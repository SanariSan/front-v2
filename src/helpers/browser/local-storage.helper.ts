import type { ILocalStorageKey } from './local-storage.helper.type';

const getLSValue = (key: ILocalStorageKey): any => {
  const item = window.localStorage.getItem(key);
  let parsed;

  try {
    parsed = item ? JSON.parse(item) : undefined;
  } catch {
    console.warn('No key in local storage, please clear cookies and refresh');
  }

  return parsed;
};

const setLSValue = (key: ILocalStorageKey, value): void => {
  const valueStr = JSON.stringify(value);
  window.localStorage.setItem(key, valueStr);
};

const delLSValue = (key: ILocalStorageKey): void => {
  window.localStorage.removeItem(key);
};

export { getLSValue, setLSValue, delLSValue };
