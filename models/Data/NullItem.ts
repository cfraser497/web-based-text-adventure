import Item from "./Item.ts";

export default class NullItem extends Item {
    readonly name: string = "null";
    readonly id: string = "null";
    readonly description: string = "null";

    constructor() {
        super();
    }

    use(): void {
        throw new Error("Method not implemented.");
    }
}