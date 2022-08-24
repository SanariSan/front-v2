import { useAtom } from '@dbeining/react-atom';
import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import img from '../../img/404.png';
import { translateAtom } from '../../storage/translate';
import { changeRoute } from '../history-catcher';
import s from './not-found.module.scss';

const NotFound: React.FC = () => {
  const isTranslated = useAtom(translateAtom);

  return (
    <div className={s.wrapGlobal}>
      <div className={s.top}>
        <Image src={img} size={'big'} />
      </div>
      <div className={s.bot}>
        <h1 className={s.h1Styled}>
          {isTranslated
            ? 'Не найдено, а еще, может быть, у вас нет доступа!'
            : 'Not Found or No Rights to access'}
        </h1>
        <Button
          color="violet"
          inverted
          className={s.btn}
          onClick={() => {
            changeRoute('/');
          }}
        >
          {isTranslated ? 'Вернуться на главную' : 'Back to main'}
        </Button>
      </div>
    </div>
  );
};

export { NotFound };
