import { configureStore } from '@reduxjs/toolkit';
import { notes, todos, fetchTodo } from './slices';

const StoreToolkit = configureStore({
  reducer: {
    todos,
    notes,
    fetchTodo,
  },
  // https://redux-toolkit.js.org/api/getDefaultMiddleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // .concat(logger)
});

export { StoreToolkit };
