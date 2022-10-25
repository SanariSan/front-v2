import type { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { changeRoute } from '../../containers/history-catcher';
import s from './info.module.scss';

const InfoComponent: FC = () => (
  <Container fluid>
    <Row>
      <Col>Some info here</Col>
      <Col>
        <Button
          variant="info"
          className={s.btn}
          onClick={() => {
            changeRoute('/profile');
          }}
        >
          To profile
        </Button>
      </Col>
      <Col>
        <Button
          variant="warning"
          className={s.btn}
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

export { InfoComponent };
