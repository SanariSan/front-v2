import fetch from 'isomorphic-fetch';
import { DEFAULT_FETCH_OPTIONS, DEFAULT_FETCH_HEADERS, ETIME } from '../App.const';

async function request({
  url,
  method,
  headers,
  body,
  fetchOtions,
  timeoutSec = 30,
  maxAttempts = 1,
}) {
  let attemptsDone = 0;
  let isError = false;
  let response;
  let timeoutId;

  const req = (controller) =>
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
    }).catch((e) => {
      console.log('___Request error___');
      console.log(e);
      console.dir(e);

      isError = true;
    });

  do {
    const controller = new AbortController();
    timeoutId = setTimeout(() => controller.abort(), timeoutSec * ETIME.SEC);
    isError = false;
    response = await req(controller);

    clearTimeout(timeoutId);

    if (response !== undefined) {
      console.dir({ url: response.url, status: response.status, headers: response.headers });
    }
  } while (isError && ++attemptsDone < maxAttempts);

  if (isError || !response) throw new Error('No successful response');

  return response;
}

export { request };
