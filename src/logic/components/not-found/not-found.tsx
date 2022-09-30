import { useAtom } from '@dbeining/react-atom';
import type { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import img from '../../img/404.png';
import { TranslateAtom } from '../../store/react-atom/translate';
import { changeRoute } from '../history-catcher';
import s from './not-found.module.scss';

const NotFound: FC = () => {
  const isTranslated = useAtom(TranslateAtom);

  return (
    <Row className={s.wrapGlobal}>
      <Row className={s.top}>
        <Image src={img} />
      </Row>
      <Row className={s.bot}>
        <h1 className={s.h1Styled}>
          {isTranslated
            ? 'Не найдено, а еще, может быть, у вас нет доступа!'
            : 'Not Found or No Rights to access'}
        </h1>
        <Button
          variant="success"
          className={s.btn}
          onClick={() => {
            changeRoute('/');
          }}
        >
          {isTranslated ? 'Вернуться на главную' : 'Back to main'}
        </Button>
      </Row>
    </Row>
  );
};

export { NotFound };
