import { Atom } from '@dbeining/react-atom';
import { getLSValue } from '../../helpers/browser';
import type { TKeystore } from './keystore.type';

export const INITIAL_STATE: TKeystore = (() => {
  const lsValueAccessToken = getLSValue('accessToken');
  const lsValueRefreshToken = getLSValue('refreshToken');
  const returnValue: TKeystore = {};

  if (typeof lsValueAccessToken !== 'string' && typeof lsValueAccessToken !== 'undefined') {
    // throw new TypeError(`Invalid local storage value (accessToken): ${String(lsValueAccessToken)}`);
    console.error(`Invalid local storage value (accessToken): ${String(lsValueAccessToken)}`);
  }
  if (typeof lsValueRefreshToken !== 'string' && typeof lsValueRefreshToken !== 'undefined') {
    // throw new TypeError(
    //   `Invalid local storage value (refreshToken): ${String(lsValueRefreshToken)}`,
    // );
    console.error(`Invalid local storage value (refreshToken): ${String(lsValueRefreshToken)}`);
  }

  returnValue.accessToken = lsValueAccessToken as string;
  returnValue.refreshToken = lsValueRefreshToken as string;

  return returnValue;
})();

export const KeystoreAtom = Atom.of(INITIAL_STATE);
