import { updateKeystore } from '../../storage/keystore';
import { updateProfileInfo } from '../../storage/profile-info';

const clearPersonalLocalStorage = () => {
  updateProfileInfo(null);
};

const clearWholeLocalStorage = () => {
  clearPersonalLocalStorage();
  updateKeystore(null, null);
};

export { clearPersonalLocalStorage, clearWholeLocalStorage };
