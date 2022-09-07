import type { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import type { TObjectUnknown } from '../../general.type';
import { changeRoute } from '../history-catcher';
import s from './profile.module.scss';

const ProfileComponent: FC<TObjectUnknown> = ({ data }) => (
  <Container>
    <Row>
      <Col>
        <Button
          variant="dark"
          className={s.btn}
          onClick={() => {
            changeRoute('/');
          }}
        >
          To main
        </Button>
      </Col>
      <Col>
        <Button
          variant="outline-primary"
          className={s.btn}
          onClick={() => {
            changeRoute('/profile/info');
          }}
        >
          To info
        </Button>
      </Col>
      <Col>
        <textarea value={JSON.stringify(data, undefined, 2)} />
      </Col>
    </Row>
  </Container>
);

export { ProfileComponent };
