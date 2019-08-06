export class StringUtil {
    public static Empty: string = "";

    public static isNullOrWhiteSpace(value: string): boolean {
        try {
            if (value == null || value == 'undefined')
                return false;

            return value.replace(/\s/g, '').length < 1;
        }
        catch (e) {
            return false;
        }
    }

    public static format(str: string, ...args: Array<any>){
        let resStr = str
        args.forEach((value, index) => {
            let regEx = new RegExp("\\{" + (index) + "\\}", "gm");
            resStr = resStr.replace(regEx, value)
        })
        return resStr
    }
}