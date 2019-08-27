import * as React from "react";
import { HashRouter, Switch, Route, Router, Redirect, BrowserRouter } from "react-router-dom";
import { Login, Redirect as redirect, Dashboard } from './pages'
import { __RouterContext } from "react-router"
import { ThemeProvider } from '@material-ui/styles'
import { createBrowserHistory } from 'history'
import RouteWithLayout from "./common/components/RouteWithLayout";

const browserHistory = createBrowserHistory()

export default function useRouter() {
  return React.useContext(__RouterContext);
}

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect
          exact
          from="/"
          to="/login"
        />
        <Route exact path="/login" component={Login} />
        <Route path="/oauth2" component={redirect}/>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}