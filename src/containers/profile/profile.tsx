import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProfileComponent } from '../../components/profile';
import { request } from '../../services';
import { InfoContainer } from '../info';

const ProfileContainer: React.FC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    void (async () => {
      const r = await request({ url: 'http://httpbin.org/json' });
      const j = await r.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setData(j);
    })();
  }, []);

  return (
    <Switch>
      <Route exact path="/profile">
        <ProfileComponent data={data} />
      </Route>
      <Route path="/profile/info">
        <InfoContainer />
      </Route>
    </Switch>
  );
};

export { ProfileContainer };
