import { updateKeystore } from '../../store/keystore';
import { updateProfileInfo } from '../../store/profile-info';

const clearPersonalLocalStorage = () => {
  updateProfileInfo(null);
};

const clearWholeLocalStorage = () => {
  clearPersonalLocalStorage();
  updateKeystore(null, null);
};

export { clearPersonalLocalStorage, clearWholeLocalStorage };
