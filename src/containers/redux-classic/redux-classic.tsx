import React, { useEffect, useState } from 'react';
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

  const updateInput = (event: React.FormEvent<FormControlProps>) => {
    event.preventDefault();
    setInput(event.currentTarget.value);
  };

  return (
    <ReduxClassicComponent
      store={store}
      dispatch={StoreClassic.dispatch}
      input={input}
      updateInput={updateInput}
    />
  );
};

export { ReduxClassicContainer };
