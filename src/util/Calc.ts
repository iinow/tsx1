export class Calc {
    private name: String

    public constructor() {
        this.name = ""
    }

    /**
     * name
     */
    public getName() {
        return this.name
    }

    public setName(name: String){
        this.name = name
    }
}