import React from 'react';
import { Button } from 'semantic-ui-react';
import { changeRoute } from '../history-catcher';
import s from './main.module.scss';

const MainComponent: React.FC<any> = ({ data }) => {
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
      {JSON.stringify(data)}
    </div>
  );
};

export { MainComponent };
