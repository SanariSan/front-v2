enum ETIME {
  MS = 1,
  SEC = 1000,
  MIN = 1000 * 60,
  HOUR = 1000 * 60 * 60,
}

const DEFAULT_FETCH_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:83.0) Gecko/20100101 Firefox/83.0',
  Connection: 'keep-alive',
};

const DEFAULT_FETCH_OPTIONS = {
  method: 'GET',
  redirect: 'manual',
};

export { ETIME, DEFAULT_FETCH_OPTIONS, DEFAULT_FETCH_HEADERS };
