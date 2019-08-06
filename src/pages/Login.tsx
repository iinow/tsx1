import * as React from 'react';
import SignIn from '../components/SignIn'
import queryString from 'query-string'
import { LoginParam } from '../models/LoginParam'
import { JsonUtil } from '../util/JsonUtil'
import { __RouterContext } from 'react-router'
import useRouter from '../routes'

export const Login = () => {
    const router = useRouter()
    const { location } = router
    const query = JSON.stringify(queryString.parse(location.search))
    
    let param: LoginParam = new LoginParam()
    try{
        param = JsonUtil.parseJsonString(JSON.parse(query), LoginParam)
    }catch(e){
        console.log(`Mapping failed: ${query}`)
    }

    return(
        <>
            <SignIn code={param.code}/>
        </>
    )
}

export default Login