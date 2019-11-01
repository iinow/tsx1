import * as React from "react";
import { HashRouter, Switch, Route, Router, Redirect, BrowserRouter } from "react-router-dom";
import { Login, Redirect as redirect, Dashboard } from '@src/pages'
import { __RouterContext } from "react-router"
import { ThemeProvider } from '@material-ui/styles'
import { createBrowserHistory } from 'history'
import { RouteWithLayout } from "@src/common/components";
import { User } from './models'
import { PrivateRoute } from '@src/PrivateRoutes'
import { observer, useObserver } from 'mobx-react'
import { useObservable } from "mobx-react-lite";
import './assets/scss/index.scss'

const browserHistory = createBrowserHistory()

export default function useRouter() {
  return React.useContext(__RouterContext);
}

export const Routes = observer(() => {
  const [user, setUser] = React.useState(new User())
  // const user = useObservable(new User)
  // const setToken = (token: string) => {
  //   user.token = token
  // }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/oauth2" component={redirect}/>
        {/* <Route path="/" component={Dashboard}/> */}
        <PrivateRoute path="/" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
})