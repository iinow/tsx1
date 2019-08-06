import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { App } from './pages/App'
import { Redirect } from './pages/Redirect'
import { Login } from './pages/Login'
import { __RouterContext } from "react-router";

export default function useRouter() {
  return React.useContext(__RouterContext);
}

export const Routes = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/redirect" component={Redirect} />
        </Switch>
      </HashRouter>
    </>
  );
};
