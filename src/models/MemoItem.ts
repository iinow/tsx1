import {JsonObject, JsonProperty} from "json2typescript"

@JsonObject("MenuItem")
export class MenuItem {

    private constructor() {}

    @JsonProperty("id", String)
    private _id: number
    get id() {return this._id}

    @JsonProperty("content", String)
    private _content: string
    get content() {return this._content}
    set content(_content: string) { this._content = _content }

    @JsonProperty("cdt", Date)
    private _cdt: Date
    get cdt() {return this._cdt}

    @JsonProperty("udt", Date)
    private _udt: string
    get udt() {return this._udt}

    public static create = (_content: string): MenuItem => {
        let i = new MenuItem()
        i.content = _content
        return i
    }
}