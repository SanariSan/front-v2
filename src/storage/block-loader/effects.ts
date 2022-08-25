import { swap } from '@dbeining/react-atom';
import { BlockLoaderAtom } from './atom';

export const toggleBlockLoader = (val: boolean) => {
  swap(BlockLoaderAtom, () => val);
};
