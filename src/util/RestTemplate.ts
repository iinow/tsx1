import Axios, { AxiosResponse } from 'axios'
import data from '../data.json'
import { AuthorizeReq } from '../models/AuthorizeReq'
import { StringUtil } from '../util/StringUtil'

export class RestTemplate {
    
    public static get_KaKaoAuthorize(): any {
        const url = data.sites.kakao.host+data.sites.kakao.getAuthorizeUrl
        const req = new AuthorizeReq(data.sites.kakao.clientId, data.sites.kakao.redirectUri, "code")
        // StringUtil.Format()
        Axios.get(url, {
            params: req
        })
    }
}