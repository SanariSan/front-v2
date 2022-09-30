import type { FC } from 'react';
import { memo, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks/redux';
import {
  fetchOneTodo,
  noteAdd,
  noteRemove,
  setIdle,
  testReduxToolkit,
  todoPull,
  todoPush,
} from '../../store/redux-toolkit';
import { changeRoute } from '../history-catcher';
import s from './redux-toolkit.module.scss';

type TReduxToolkitComponent = {
  todos;
  notes;
  fetchedTodos;
  input: string;
  updateInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ReduxToolkitComponent: FC<TReduxToolkitComponent> = memo(
  ({ todos, notes, fetchedTodos, input, updateInput }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      console.log('mount comp_redux_toolkit');
      return () => {
        console.log('unmount comp_redux_toolkit');
      };
    }, []);

    return (
      <Container>
        <Row xs={2}>
          <Col xs={10}>
            <h2>Test redux toolkit</h2>
          </Col>
          <Col xs={2}>
            <Button
              className={s.btn}
              variant="success"
              onClick={() => {
                void testReduxToolkit();
              }}
            >
              Run test
            </Button>
            <Button
              className={s.btn}
              variant="success"
              onClick={() => {
                void Promise.resolve()
                  .then(() => dispatch(setIdle()))
                  .then(() => {
                    // only first starts
                    void dispatch(fetchOneTodo());
                    void dispatch(fetchOneTodo());
                    void dispatch(fetchOneTodo());

                    return;
                  });
              }}
            >
              Fetch todo
            </Button>
          </Col>
        </Row>
        <Row xs={2}>
          <Col xs={10}>
            <p>Current redux toolkit state</p>
            <pre>todos: {JSON.stringify(todos, undefined, 2)}</pre>
            <pre>notes: {JSON.stringify(notes, undefined, 2)}</pre>
            <pre>fetched: {JSON.stringify(fetchedTodos, undefined, 2)}</pre>
          </Col>
          <Col xs={2}>
            <Button
              className={s.btn}
              size="sm"
              variant="success"
              onClick={() => {
                dispatch(noteAdd({ title: input, text: input }));
              }}
            >
              Add note
            </Button>
            <Button
              className={s.btn}
              size="sm"
              variant="success"
              onClick={() => {
                dispatch(todoPush(input));
              }}
            >
              Add todo
            </Button>
            <Form.Control
              as="textarea"
              placeholder="Enter input for storage"
              onChange={updateInput}
            />
            <Button
              className={s.btn}
              size="sm"
              variant="success"
              onClick={() => {
                dispatch(noteRemove({ title: input }));
              }}
            >
              Remove note
            </Button>
            <Button
              className={s.btn}
              size="sm"
              variant="success"
              onClick={() => {
                dispatch(todoPull());
              }}
            >
              Remove last todo
            </Button>
            <Button
              className={s.btn}
              size="sm"
              variant="success"
              onClick={() => {
                changeRoute('/');
              }}
            >
              To main
            </Button>
          </Col>
        </Row>
      </Container>
    );
  },
);

export { ReduxToolkitComponent };
