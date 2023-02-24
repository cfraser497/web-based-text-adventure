import Item from "./Item.ts";

export default class NullItem extends Item {
    readonly name: string;
    readonly description: string = "null";

    constructor() {
        const name = "null"
        super(name);
        this.name = name;
    }

    use(): void {
        throw new Error("Method not implemented.");
    }
}