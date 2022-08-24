import React from 'react';
import { Route, Switch } from 'react-router-dom';
import s from './app.module.scss';
import { NotFound } from './components/not-found';
import { MainContainer } from './containers/main';
import { ProfileContainer } from './containers/profile';

const App: React.FC = () => (
  <div className={s.App}>
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route path="/profile" component={ProfileContainer} />
      <Route path="/" component={NotFound} />
    </Switch>
  </div>
);

export { App };
