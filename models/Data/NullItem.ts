import Item from "./Item.ts";

class NullItem extends Item {
    readonly name: string;
    readonly description: string = "null";

    constructor() {
        const name = "null"
        super(name);
        this.name = name;
    }

    use(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

const null_Item = new NullItem();
export default null_Item;