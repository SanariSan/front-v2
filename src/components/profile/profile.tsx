import React from 'react';
import { Button } from 'semantic-ui-react';
import { changeRoute } from '../history-catcher';
import s from './profile.module.scss';

const ProfileComponent: React.FC<any> = ({ data }) => (
  <div>
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
    <Button
      color="violet"
      inverted
      className={s.btn}
      onClick={() => {
        changeRoute('/profile/info');
      }}
    >
      To info
    </Button>
    <br />
    <textarea value={JSON.stringify(data, undefined, 2)} />
  </div>
);

export { ProfileComponent };
