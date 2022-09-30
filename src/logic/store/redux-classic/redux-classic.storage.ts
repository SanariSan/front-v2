import { combineReducers, createStore } from 'redux';

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

export { StoreClassic };
