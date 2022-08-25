import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Router, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { App } from './app';
import { GlobalHistoryCatcherComponent } from './components/history-catcher';
import './index.scss';

const history = createBrowserHistory();
const rootElement = document.querySelector('#root') as Element;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router history={history}>
      <GlobalHistoryCatcherComponent />
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
);
