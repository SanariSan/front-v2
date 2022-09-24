import { createBrowserHistory } from 'history';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { App } from './app';
import { GlobalHistoryCatcherComponent } from './components/history-catcher';
import './index.scss';
import { StoreToolkit } from './store/redux-toolkit';

const history = createBrowserHistory();
const rootElement = document.querySelector('#root') as Element;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={StoreToolkit}>
      <Router history={history}>
        <GlobalHistoryCatcherComponent />
        <Switch>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
);
