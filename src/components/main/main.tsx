import type { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useScreenDetails } from '../../hooks/use-screen-details';
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
          <p>Sections</p>
          <pre className={s.test}>Current page size - {`${w} x ${h}`}</pre>
        </Col>
        <Col xs={2}>
          <Button
            className={s.btn}
            size="sm"
            variant="success"
            onClick={() => {
              changeRoute('/redux-classic');
            }}
          >
            To redux-classic
          </Button>
          <Button
            className={s.btn}
            size="sm"
            variant="success"
            onClick={() => {
              changeRoute('/redux-toolkit');
            }}
          >
            To redux-toolkit
          </Button>
          <Button
            className={s.btn}
            size="sm"
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
