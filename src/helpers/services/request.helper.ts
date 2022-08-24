import { deref } from '@dbeining/react-atom';
import { keystoreAtom } from '../../storage/keystore';
import type { TPath } from '../../services/request-base';

const getBearerHeader = () => {
  const { accessToken, refreshToken } = deref(keystoreAtom);
  return { Authorization: `Bearer ${accessToken}` };
};

const prepareURI = (basePart: TPath, encodePart = '') =>
  `${basePart}/${encodeURIComponent(encodePart)}`;

export { getBearerHeader, prepareURI };
