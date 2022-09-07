import { useLayoutEffect, useState } from 'react';
import { getScreenDetails, SCREEN_DETAILS_DEFAULT } from '../../helpers/browser';

const useScreenDetails = () => {
  const [details, setDetails] =
    useState<ReturnType<typeof getScreenDetails>>(SCREEN_DETAILS_DEFAULT);

  useLayoutEffect(() => {
    function updateDetails() {
      setDetails(getScreenDetails());
    }

    window.addEventListener('resize', updateDetails);
    updateDetails();

    return () => {
      window.removeEventListener('resize', updateDetails);
    };
  }, []);

  return details;
};

export { useScreenDetails };
