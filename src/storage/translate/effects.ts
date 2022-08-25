import { deref, swap } from '@dbeining/react-atom';
import { TranslateAtom } from './atom';
import { setLSValue } from '../../helpers/browser';

export const toggleTranslate = () => {
  swap(TranslateAtom, (state) => !state);
  setLSValue('translate', deref(TranslateAtom));
};
