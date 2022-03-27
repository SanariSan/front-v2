import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { App } from './App';
import { GlobalHistoryCatcherComponent } from './components/history-catcher';
import './index.scss';

const history = createBrowserHistory();

render(
  <React.StrictMode>
    <Router history={history}>
      <GlobalHistoryCatcherComponent />
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,

  document.querySelector('#root'),
);
