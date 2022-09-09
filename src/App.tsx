import React from 'react';
import { Route, Switch } from 'react-router-dom';
import s from './app.module.scss';
import { NotFound } from './components/not-found';
import { MainContainer } from './containers/main';
import { ProfileContainer } from './containers/profile';
import { ReduxClassicContainer } from './containers/redux-classic';

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/">
        <MainContainer />
      </Route>
      <Route exact path="/redux-classic">
        <ReduxClassicContainer />
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
