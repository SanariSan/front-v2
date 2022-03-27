import React from 'react';
import { Button } from 'semantic-ui-react';
import { changeRoute } from '../history-catcher';
import s from './main.module.scss';

const MainComponent: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};

export { MainComponent };
