import type { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import type { IPublishEntity } from '../../../access-layer/events/pubsub';
import { publishError, publishLog, Sub } from '../../../access-layer/events/pubsub';
import { jwtDecode, jwtEncode, jwtRead } from '../../../access-layer/jwt';
import { PubSubError } from '../../../core/pubsub';
import { ELOG_LEVEL } from '../../../general.type';
import { sleep } from '../../../helpers/util';
import { useScreenDetails } from '../../hooks/use-screen-details';
import { changeRoute } from '../history-catcher';
import s from './main.module.scss';

const jwtTest = async () => {
  const token = await jwtEncode({ a: 123 }, 'supersecret123');
  console.log(token);

  const readed = await jwtRead(token);
  console.log(readed);

  const decoded = await jwtDecode(token, 'supersecret123');
  console.log(decoded);
};

const testCb = ({ channel, logLevel, message }: IPublishEntity) => {
  console.log(`Message | channel: ${channel} | message: ${String(JSON.stringify(message))}`);
  return;
};

const pubSubTest = async () => {
  const sub = new Sub();

  sub.listen(testCb);
  sub.subscribe('log');
  sub.subscribe('error-expected');

  console.log(`Listeners for current sub instance: ${sub.listenerCount()}`);

  await sleep(500);

  publishLog(ELOG_LEVEL.INFO, '12345678912345');
  publishError(ELOG_LEVEL.WARN, new PubSubError('Some expected error', { a: 'b' }));

  await sleep(500);

  sub.removeListener(testCb);
  console.log(`Listeners for current sub instance: ${sub.listenerCount()}`);
};

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
          <Button
            className={s.btn}
            size="sm"
            variant="success"
            onClick={() => {
              void jwtTest();
              return;
            }}
          >
            test jwt
          </Button>
          <Button
            className={s.btn}
            size="sm"
            variant="success"
            onClick={() => {
              void pubSubTest();
              return;
            }}
          >
            test pubsub
          </Button>
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
