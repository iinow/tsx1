import * as React from 'react'
import { SchedulerToken } from '../common'
import { RestTemplate } from '../util'

export const Dashboard = () => {
    let schedule = SchedulerToken.getInstance()
    return (
        <>
            Hi: 
            <div onClick={
                async () => {
                    RestTemplate.get_Test()
                }
            }>
                hellow
            </div>
        </>
    )
}

export default Dashboard