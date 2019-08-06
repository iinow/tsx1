import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript"
import {LoginParam} from '../models/LoginParam'

export class JsonUtil {
    private static convert = new JsonConvert()

    public static parseJsonString<T>(json: string, classReference: {new (): T}): T {
        return this.convert.deserializeObject(json, classReference)
    }
}