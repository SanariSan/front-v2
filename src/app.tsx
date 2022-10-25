import type { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from './components/not-found';
import { MainContainer } from './containers/main';
import { ProfileContainer } from './containers/profile';
import { ReduxClassicContainer } from './containers/redux-classic';
import { ReduxToolkitContainer } from './containers/redux-toolkit';

const App: FC = () => (
  <Switch>
    <Route exact path="/">
      <MainContainer />
    </Route>
    <Route exact path="/redux-classic">
      <ReduxClassicContainer />
    </Route>
    <Route exact path="/redux-toolkit">
      <ReduxToolkitContainer />
    </Route>
    <Route path="/profile">
      <ProfileContainer />
    </Route>
    <Route path="/">
      <NotFound />
    </Route>
  </Switch>
);

export { App };
