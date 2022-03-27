import React from 'react';
import { Button } from 'semantic-ui-react';
import { changeRoute } from '../history-catcher';
import s from './info.module.scss';

const InfoComponent: React.FC = () => {
  return (
    <div>
      Some info here
      <Button
        color="violet"
        inverted
        className={s.btn}
        onClick={() => {
          changeRoute('/profile');
        }}
      >
        To profile
      </Button>
      <Button
        color="violet"
        inverted
        className={s.btn}
        onClick={() => {
          changeRoute('/');
        }}
      >
        To main
      </Button>
    </div>
  );
};

export { InfoComponent };
