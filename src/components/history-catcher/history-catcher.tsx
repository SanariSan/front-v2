import type { History } from 'history';
import { FC } from 'react';
import type { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

/**
 * This little hack allows to catch history object and change it outside component
 * withRouter() wrapper catches history changes on every render
 * this way there's no need to wrap every component in withRouter() to let it catch history + change it
 *
 * Below some other solutions, but less convenient (also for v5):
 * https://github.com/remix-run/react-router/blob/main/FAQ.md#how-do-i-access-the-history-object-outside-of-components
 * https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
 */

let globalHistory: History;

const GlobalHistoryCatcher: FC<RouteComponentProps> = ({
  history,
  location,
  match,
  staticContext,
}) => {
  globalHistory = history;

  // show current history state
  // return <>{JSON.stringify(globalHistory.location)}</>;
  return null;
};

const GlobalHistoryCatcherComponent = withRouter(GlobalHistoryCatcher);

function changeRoute(route: string) {
  if (!globalHistory) {
    throw new Error(
      'No history Object. You probably forgot to mount GlobalHistoryCatcherComponent.',
    );
  }

  globalHistory.push(route);
}

export { GlobalHistoryCatcherComponent, changeRoute };
