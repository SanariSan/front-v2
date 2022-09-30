import { sleep } from '../../../helpers/util';
import { StoreClassic } from './redux-classic.storage';

export const testReduxClassic = async () => {
  console.group('Initial state');
  console.log(StoreClassic.getState());
  console.groupEnd();

  await sleep(1000);

  StoreClassic.dispatch({ type: 'push', payload: '1' });
  StoreClassic.dispatch({
    type: 'add',
    payload: {
      title: 'title1',
      text: 'text1',
    },
  });

  console.group('Dispatched "add" actions');
  console.log(StoreClassic.getState());
  console.groupEnd();

  await sleep(1000);

  StoreClassic.dispatch({ type: 'pull' });
  StoreClassic.dispatch({
    type: 'remove',
    payload: {
      title: 'title1',
    },
  });

  console.group('Dispatched "remove" actions');
  console.log(StoreClassic.getState());
  console.groupEnd();
};
