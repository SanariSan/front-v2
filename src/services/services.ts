import fetch from 'isomorphic-fetch';
const { DEFAULT_FETCH_OPTIONS, DEFAULT_FETCH_HEADERS, ETIME_SEC } = require('../App.const');

async function request({ url, method, headers, body, fetchOtions, timeout = 30, maxAttempts = 1 }) {
  let attemptsDone = 0;
  let isError = false;
  let response;
  let timeoutId;

  do {
    const controller = new AbortController();
    timeoutId = setTimeout(() => controller.abort(), timeout * ETIME_SEC.ONE);
    isError = false;

    response = await fetch(url, {
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

    clearTimeout(timeoutId);

    if (response)
      console.dir({ url: response.url, status: response.status, headers: response.headers });
  } while (isError && ++attemptsDone < maxAttempts);

  if (isError || !response) throw new Error('No successful response');

  return response;
}

export { request };
