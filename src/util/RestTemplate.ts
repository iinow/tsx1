import Axios, { AxiosResponse } from 'axios'
import data from '../common/data.json'
import { AuthorizeReq } from '../models/AuthorizeReq'
import { StringUtil } from '../util/StringUtil'
import {SchedulerToken} from '../common'

export class RestTemplate {
    
    // public static get_KaKaoAuthorize(): any {
    //     const url = data.sites[0].host+data.sites.kakao.getAuthorizeUrl
    //     const req = new AuthorizeReq(data.sites.kakao.clientId, data.sites.kakao.redirectUri, "code")
    //     // StringUtil.Format()
    //     Axios.get(url, {
    //         params: req
    //     })
    // }

    public static async get_Profile() {
        const url = 'https://kapi.kakao.com/v1/api/talk/profile'
        let res = await Axios.get(url, {
            headers: {
                'Authorization': 'Bearer eYtVU_b_aw5FFzfcmcTJRLmMgq9G_0M9NIN3iworDNQAAAFsb7K4jA'
            }
        })
        return res.data.nickName
    }

    public static async get_Test() {
        Axios.get('http://localhost:8082/test').then(function (response) {
		    console.log('response is : ' + response.data);
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.headers);
            } 
            else if (error.request) {
                console.log(error.request);
            } 
            else {
                console.log(error.message);
            }
	        console.log(error.config);
        });
    }
}