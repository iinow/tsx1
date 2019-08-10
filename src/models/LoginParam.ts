import {JsonObject, JsonProperty} from "json2typescript"

@JsonObject("loginParam")
export class LoginParam {

    @JsonProperty("token", String)
    private _code: string = ""
    get code() {return this._code}
    set code(_code: string) {this._code = _code}
}