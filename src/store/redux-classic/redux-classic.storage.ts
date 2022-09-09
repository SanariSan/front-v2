import { createStore, combineReducers } from 'redux';
import { sleep } from '../../helpers/util';

type TStateTodos = string[] | undefined;
type TActionTodos = { type: 'push' | 'pull' | ''; payload?: string };
const todos = (state: TStateTodos, { type = '', payload = '' }: TActionTodos) => {
  if (state === undefined) return [];
  switch (type) {
    case 'push':
      return [...state, payload];
    case 'pull':
      return state.slice(0, -1);
    default:
      return state;
  }
};

type TStateNotes = Record<string, unknown> | undefined;
type TActionNotes = { type: 'add' | 'remove' | ''; payload: { title: string; text?: string } };
const notes = (
  state: TStateNotes,
  { type = '', payload = { title: '', text: '' } }: TActionNotes,
) => {
  if (state === undefined) return {};
  const { title, text } = payload;
  switch (type) {
    case 'add':
      return { ...state, [title]: text };
    case 'remove':
      return Object.fromEntries(Object.entries(state).filter(([key]) => key !== title));
    default:
      return state;
  }
};

const reducerUnion = combineReducers({ todos, notes });
const StoreClassic = createStore(reducerUnion);

const testReduxClassic = async () => {
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

export { StoreClassic, testReduxClassic };
