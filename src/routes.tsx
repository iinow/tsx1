import * as React from "react";
import { HashRouter, Switch, Route, Router, Redirect } from "react-router-dom";
import { Login, Redirect as redirect, Dashboard } from './pages'
import { __RouterContext } from "react-router"
import { createBrowserHistory } from 'history'
import RouteWithLayout from "./components/RouteWithLayout";

const browserHistory = createBrowserHistory()

export default function useRouter() {
  return React.useContext(__RouterContext);
}

export const Routes = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/redirect" component={redirect} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </HashRouter>
    </>
  );
};


{/* <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/redirect" component={Redirect} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </HashRouter> */}


{/* <Router history={browserHistory}>
        <Redirect
          exact
          from="/"
          to="/dashboard"/>
        <RouteWithLayout
          component={Dashboard}
          
          layout={Dashboard}
          rest={[]}/>
      </Router>       */}