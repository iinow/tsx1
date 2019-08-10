
export class SchedulerToken {
    private constructor(){ }

    private static instance: SchedulerToken
    private _token: string

    public get token(){
        return this._token
    }

    public set token(_token: string){
        this._token = _token
    }

    public static getInstance(): SchedulerToken {
        if(!SchedulerToken.instance){
            SchedulerToken.instance = new SchedulerToken()
        }
        return SchedulerToken.instance
    }
}