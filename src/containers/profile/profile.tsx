import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProfileComponent } from '../../components/profile';
import { request } from '../../services';
import { InfoContainer } from '../info';

const ProfileContainer: React.FC = () => {
  const [data, setData] = useState<Record<string, string>>({});
  const [track, rerender] = useState<number>(0);

  useEffect(() => {
    const abortController = new AbortController();

    void (async () => {
      const r = await request({ url: 'http://httpbin.org/json', abortController }).catch(
        (error) => {
          console.log(`Req error in component _ ${String(error)}`);
        },
      );

      if (!r) return;
      const j = (await r.json()) as Record<string, string>;
      setData(j);
    })();

    return () => {
      abortController.abort();
    };
  }, [track]);

  const forceRerender = useCallback(() => {
    rerender((s) => s + 1);
  }, []);

  return (
    <Switch>
      <Route exact path="/profile">
        <ProfileComponent data={data} forceRerender={forceRerender} />
      </Route>
      <Route path="/profile/info">
        <InfoContainer />
      </Route>
    </Switch>
  );
};

export { ProfileContainer };
