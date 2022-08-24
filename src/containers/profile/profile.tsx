import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProfileComponent } from '../../components/profile';
import { InfoContainer } from '../info';

const ProfileContainer: React.FC = () => (
  <Switch>
    <Route exact path="/profile" component={ProfileComponent} />
    <Route path="/profile/info" component={InfoContainer} />
  </Switch>
);

export { ProfileContainer };
