import type { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useScreenDetails } from '../../hooks/screen';
import { changeRoute } from '../history-catcher';
import s from './main.module.scss';

const MainComponent: FC = () => {
  const {
    screenResolutionDetails: {
      default: { w, h },
    },
  } = useScreenDetails();

  return (
    <Container>
      <Row xs={2}>
        <Col xs={10}>
          <h2>h2 col 1</h2>
          <pre className={s.test}>{`${w} x ${h}`}</pre>
        </Col>
        <Col xs={2}>
          <Button
            className={s.btn}
            variant="success"
            onClick={() => {
              changeRoute('/profile');
            }}
          >
            To profile
          </Button>
        </Col>
      </Row>
      <Row xs={2}>
        <Col xs={10}>
          <h2>h2 col 1</h2>
        </Col>
        <Col xs={2}>
          <Button
            className={s.btn}
            variant="success"
            onClick={() => {
              changeRoute('/profile');
            }}
          >
            To profile
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export { MainComponent };
