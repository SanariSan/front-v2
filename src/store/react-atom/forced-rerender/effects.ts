import { swap } from '@dbeining/react-atom';
import { ForcedRerenderAtom } from './atom';

export const forceRerender = () => {
  swap(ForcedRerenderAtom, (state) => !state);
};
