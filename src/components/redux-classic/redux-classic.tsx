import type { FC } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { testReduxClassic } from '../../store/redux-classic';
import { changeRoute } from '../history-catcher';
import s from './redux-classic.module.scss';

const ReduxClassicComponent: FC<Record<string, any>> = ({
  store,
  dispatch,
  input,
  updateInput,
}) => (
  <Container>
    <Row xs={2}>
      <Col xs={10}>
        <h2>Test redux classic (console)</h2>
      </Col>
      <Col xs={2}>
        <Button
          className={s.btn}
          variant="success"
          onClick={() => {
            void testReduxClassic();
          }}
        >
          Run test
        </Button>
      </Col>
    </Row>
    <Row xs={2}>
      <Col xs={10}>
        <p>Current redux classic state</p>
        <pre>{JSON.stringify(store, undefined, 2)}</pre>
      </Col>
      <Col xs={2}>
        <Button
          className={s.btn}
          size="sm"
          variant="success"
          onClick={() => {
            dispatch({
              type: 'add',
              payload: {
                title: input,
                text: input,
              },
            });
          }}
        >
          Add note
        </Button>
        <Button
          className={s.btn}
          size="sm"
          variant="success"
          onClick={() => {
            dispatch({ type: 'push', payload: input });
          }}
        >
          Add todo
        </Button>
        <Form.Control as="textarea" placeholder="Enter input for storage" onChange={updateInput} />
        <Button
          className={s.btn}
          size="sm"
          variant="success"
          onClick={() => {
            dispatch({
              type: 'remove',
              payload: {
                title: input,
              },
            });
          }}
        >
          Remove note
        </Button>
        <Button
          className={s.btn}
          size="sm"
          variant="success"
          onClick={() => {
            dispatch({ type: 'pull' });
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

export { ReduxClassicComponent };
