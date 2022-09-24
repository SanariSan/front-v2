import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable no-param-reassign */

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as string[],
  reducers: {
    todoPush(state, action: { payload: string }) {
      state.push(action.payload);
    },
    todoPull(state, action: { payload: undefined }) {
      state.pop();
    },
  },
});

const todos = todosSlice.reducer;
const { todoPush, todoPull } = todosSlice.actions;

export { todos, todoPush, todoPull };
