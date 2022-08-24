import fetch from 'isomorphic-fetch';
import { ETIME } from '../general.const';
import { DEFAULT_FETCH_HEADERS, DEFAULT_FETCH_OPTIONS } from './services.const';
import type { IRequestOptions } from './services.type';

async function request({
  url,
  method,
  headers,
  body,
  fetchOtions,
  timeoutSec = 30,
  maxAttempts = 1,
}: IRequestOptions) {
  let attemptsDone = 0;
  let isError = false;
  let response: Response | undefined;

  const requestInternal = (controller: AbortController) =>
    fetch(url, {
      ...DEFAULT_FETCH_OPTIONS,
      ...fetchOtions,
      headers: {
        ...DEFAULT_FETCH_HEADERS,
        ...headers,
      },
      signal: controller.signal,
      method,
      body,
    }).catch((error) => {
      // TODO: temp log format, change
      console.log('___Request error___');
      console.log(error);
      console.dir(error);
    });

  do {
    const controller = new AbortController();
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      controller.abort();
    }, timeoutSec * ETIME.SEC);
    isError = false;
    attemptsDone += 1;

    response = (await requestInternal(controller)) as Response | undefined;
    clearTimeout(timeoutId);

    if (response === undefined) {
      isError = true;
    } else {
      console.dir({ url: response.url, status: response.status, headers: response.headers });
    }
  } while (isError && attemptsDone < maxAttempts);

  if (isError || !response) throw new Error('No successful response');

  return response;
}

export { request };
