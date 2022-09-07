import { Atom } from '@dbeining/react-atom';
import { getLSValue } from '../../../helpers/browser';

export const INITIAL_STATE: boolean = (() => {
  const lsValue = getLSValue('translate');
  if (typeof lsValue !== 'boolean') {
    // throw new TypeError(`Invalid local storage value (translate): ${String(lsValue)}`);
    console.error(`Invalid local storage value (translate): ${String(lsValue)}`);
    return false;
  }

  return lsValue;
})();
export const TranslateAtom = Atom.of(INITIAL_STATE);
