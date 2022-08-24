import { Atom } from '@dbeining/react-atom';
import { getLSValue } from '../../helpers/browser';

export const initialState: { accessToken?: string; refreshToken?: string } = {
  accessToken: getLSValue('accessToken'),
  refreshToken: getLSValue('refreshToken'),
};

export const keystoreAtom = Atom.of(initialState);
