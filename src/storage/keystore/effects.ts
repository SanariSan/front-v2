import { swap } from '@dbeining/react-atom';
import { setLSValue } from '../../helpers/browser';
import { KeystoreAtom } from './atom';
import type { TKeystore } from './keystore.type';

export const updateKeystore = ({ accessToken, refreshToken }: TKeystore) => {
  setLSValue('accessToken', accessToken);
  setLSValue('refreshToken', refreshToken);
  swap(KeystoreAtom, () => ({
    accessToken,
    refreshToken,
  }));
};
