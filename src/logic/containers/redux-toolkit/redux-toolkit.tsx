import React, { useCallback, useEffect, useState } from 'react';
import { ReduxToolkitComponent } from '../../components/redux-toolkit';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOneTodo, setIdle } from '../../store/redux-toolkit';

const ReduxToolkitContainer: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const notes = useAppSelector((state) => state.notes);
  const fetchedTodos = useAppSelector((state) => state.fetchTodo.todos);
  const fetchedTodosStatus = useAppSelector((state) => state.fetchTodo.status);

  useEffect(() => {
    console.log('mount cont_redux_toolkit');
    return () => {
      console.log('unmount cont_redux_toolkit');
    };
  }, []);

  useEffect(() => {
    console.log(`Status: ${fetchedTodosStatus}`);
    return () => {};
  }, [fetchedTodosStatus]);

  useEffect(() => {
    const promise = dispatch(fetchOneTodo());

    return () => {
      promise.abort();
      dispatch(setIdle());
    };
  }, [dispatch]);

  const updateInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.currentTarget.value);
  }, []);

  return (
    <ReduxToolkitComponent
      todos={todos}
      notes={notes}
      fetchedTodos={fetchedTodos}
      input={input}
      updateInput={updateInput}
    />
  );
};

export { ReduxToolkitContainer };
