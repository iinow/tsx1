import * as React from 'react';
import useRouter from '../routes'
import queryString from 'query-string'
import { LoginParam } from '../models'
import { JsonUtil } from '../util'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface Props extends RouteComponentProps { }

/**
 * @description OAuth 로그인 후 리다이렉트 되는 URL 에 해당하는 컴포넌트로 실행된다. 
 * JWT 토큰으로 받게 됨
 */
export const Redirect = (props: Props) => {
    const router = useRouter()
    const { location } = router
    const query = JSON.stringify(queryString.parse(location.search))

    let param: LoginParam = new LoginParam()
    try{
        param = JsonUtil.parseJsonString(JSON.parse(query), LoginParam)
    }catch(e){
        console.log(`Mapping failed: ${query}`)
    }
    console.log(JSON.stringify(param))
    
    React.useEffect(() => {
        window.opener.postMessage(param.code, '*')
        window.close()
    })    

    return (
        <div>
            <div>
                redirect page
                
            </div>
        </div>
    )
}

export default Redirect