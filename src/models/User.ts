import {JsonObject, JsonProperty} from "json2typescript"

@JsonObject("User")
export class User {

    public constructor(){ }

    @JsonProperty("token", String)
    private _token: string
    get token() {return this._token}
    set token(_token: string) {this._token = _token}
}