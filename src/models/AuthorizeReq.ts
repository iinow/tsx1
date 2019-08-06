
export class AuthorizeReq {
    private client_id: string
    private redirect_uri: string
    private response_type: string = "code"

    public constructor(clientId: string, redirectUri: string, responseType: string){
        this.client_id = clientId
        this.redirect_uri = redirectUri
        this.response_type = responseType
    }

    public getClientId(): string {
        return this.client_id
    }

    public getRedirectUri(): string {
        return this.redirect_uri
    }

    public getResponseType(): string {
        return this.response_type
    }
}