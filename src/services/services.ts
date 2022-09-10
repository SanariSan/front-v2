import fetch from 'isomorphic-fetch';
import { sleep } from '../helpers/util';
import { DEFAULT_FETCH_HEADERS, DEFAULT_FETCH_OPTIONS } from './services.const';
import type { IRequestOptions } from './services.type';

async function request({
  url,
  method,
  headers,
  body,
  fetchOtions,
  timeoutMS = 10_000,
  attemptDelayMS = 500,
  attemptDelayGrowthMS = 500,
  maxAttempts = 1,
  abortController: externalAbortController = new AbortController(),
}: IRequestOptions) {
  const requestInternal = (localAbortController: AbortController) =>
    fetch(url, {
      ...DEFAULT_FETCH_OPTIONS,
      ...fetchOtions,
      headers: {
        ...DEFAULT_FETCH_HEADERS,
        ...headers,
      },
      signal: localAbortController.signal,
      method,
      body,
    });

  // if externally signalled - stop ongoing request through local abort controller
  const externalAbortControllerCbWrapper = (localAbortController: AbortController) => () => {
    localAbortController.abort();
  };

  const setupExternalAbortControllerSignalListener = (externalAbortControllerCb: () => void) => {
    externalAbortController.signal.addEventListener('abort', externalAbortControllerCb);

    // if abort happened while was not listening - dispatch missed event
    if (externalAbortController.signal.aborted) {
      externalAbortController.signal.dispatchEvent(new Event('abort'));
    }
  };

  const cleanupExternalAbortControllerSignalListener = (externalAbortControllerCb: () => void) => {
    externalAbortController.signal.removeEventListener('abort', externalAbortControllerCb);
  };

  let errorReturn: Error | undefined;
  let currentAttempt = 0;
  while (currentAttempt < maxAttempts) {
    const localAbortController = new AbortController();
    const externalAbortControllerCb = externalAbortControllerCbWrapper(localAbortController);
    setupExternalAbortControllerSignalListener(externalAbortControllerCb);

    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      localAbortController.abort();
    }, timeoutMS);

    // eslint-disable-next-line @typescript-eslint/no-loop-func
    const response = (await requestInternal(localAbortController).catch((error: Error) => {
      errorReturn = error;
    })) as Response | undefined;

    clearTimeout(timeoutId);
    cleanupExternalAbortControllerSignalListener(externalAbortControllerCb);

    if (response !== undefined) {
      console.dir({ url: response.url, status: response.status, headers: response.headers });
      return response;
    }

    // check if external signal was called at this point to not sleep when just need to exit
    if (externalAbortController.signal.aborted) {
      throw new Error('Request externally aborted');
    }

    await sleep(attemptDelayMS + currentAttempt * attemptDelayGrowthMS);

    currentAttempt += 1;
  }

  throw errorReturn as Error;
}

export { request };
