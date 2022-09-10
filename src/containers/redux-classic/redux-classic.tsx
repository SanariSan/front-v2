import React, { useEffect, useState, useCallback } from 'react';
import type { FormControlProps } from 'react-bootstrap';
import { ReduxClassicComponent } from '../../components/redux-classic';
import { StoreClassic } from '../../store/redux-classic';

const ReduxClassicContainer: React.FC = () => {
  const [store, setStore] = useState<ReturnType<typeof StoreClassic.getState>>();
  const [input, setInput] = useState<FormControlProps['value']>('');

  useEffect(() => {
    const unsubscribe = StoreClassic.subscribe(() => {
      setStore(StoreClassic.getState());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // const updateInput = (event: React.FormEvent<FormControlProps> or React.BaseSyntheticEvent and cast value) => {
  const updateInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.currentTarget.value);
  }, []);

  // const dispatch = useCallback(StoreClassic.dispatch, []);
  const dispatch = useCallback(
    (action: Parameters<typeof StoreClassic.dispatch>[0]) => StoreClassic.dispatch(action),
    [],
  );

  return (
    <ReduxClassicComponent
      store={store}
      dispatch={dispatch}
      input={input}
      updateInput={updateInput}
    />
  );
};

export { ReduxClassicContainer };
