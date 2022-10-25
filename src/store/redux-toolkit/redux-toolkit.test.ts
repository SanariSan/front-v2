import { sleep } from '../../helpers/util';
import { StoreToolkit } from './redux-toolkit.storage';
import { noteAdd, noteRemove, todoPull, todoPush } from './slices';

export const testReduxToolkit = async () => {
  console.group('Initial state');
  console.log(StoreToolkit.getState());
  console.groupEnd();

  await sleep(1000);

  StoreToolkit.dispatch(todoPush('todo text 1'));
  StoreToolkit.dispatch(noteAdd({ title: 'note title 1', text: 'note text 1' }));

  console.group('Dispatched "add" actions');
  console.log(StoreToolkit.getState());
  console.groupEnd();

  await sleep(1000);

  StoreToolkit.dispatch(todoPull());
  StoreToolkit.dispatch(noteRemove({ title: 'note title 1' }));

  console.group('Dispatched "remove" actions');
  console.log(StoreToolkit.getState());
  console.groupEnd();
};
