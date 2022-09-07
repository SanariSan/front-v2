import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from './components/not-found';
import { MainContainer } from './containers/main';
import { ProfileContainer } from './containers/profile';
import s from './app.module.scss';

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/">
        <MainContainer />
      </Route>
      <Route path="/profile">
        <ProfileContainer />
      </Route>
      <Route path="/">
        <NotFound />
      </Route>
    </Switch>
    <span className={s.bg} />
  </>
);

export { App };
