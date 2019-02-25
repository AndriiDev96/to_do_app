import React from 'react';
import UserName from '../components/startPage/UserName';
import ShellApp from '../components/shellApp/ShellApp';
import { HashRouter, Route} from 'react-router-dom'; 
import browserHistory from 'history/createBrowserHistory';

const customHistory = browserHistory();

const RouteApp = () => {
  return (
    <HashRouter history={customHistory}>
    <>
      {/* Write button to the main page */}
      <Route exact path="/" component={UserName} />
      <Route path="/todo" component={ShellApp} />
    </>
    </HashRouter>
  );
}

export default RouteApp;