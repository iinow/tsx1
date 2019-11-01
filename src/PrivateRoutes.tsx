import * as React from 'react';
import { RouteComponentProps, withRouter, Route, Redirect, RouteProps } from 'react-router-dom'
import queryString from 'query-string'
import { User } from '@src/models'
type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

/**
 * @param auth = auth.token 은 JWT 값을 의미한다.
 * 로그인 페이지로 이동할 때 자신이 가지고 있는 JWT 값이 존재하면 대시보드로 이동
 * 향 후 JWT 유효 TOKEN 검증 API를 만들어야 한다. 
 */
export const PrivateRoute = ({component, ...rest}: {component:any, [key: string]: any}) => {
    React.useEffect(() => {
        
    })
    const renderFn = (Component?: RouteComponent) => (props: RouteProps) => {
        if (!Component) {
            return null
        }

        if (localStorage.getItem('auth')) {
            Component = Component as React.ComponentClass<any>
            return <Component {...props} />
        }
        
        const redirectProps = {
            to: {
                pathname: "/login",
                state: {from: props.location},
            },
        }
        return <Redirect {...redirectProps} />
    }
    return <Route {...rest} render={renderFn(component)} />
}

export default PrivateRoute