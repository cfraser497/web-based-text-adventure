import Item from "./Item.ts";

export default class EmptyItem extends Item {
    readonly name: string = "empty";
    readonly id: string = "empty";
    readonly description: string = "empty";

    constructor() {
        super();
    }

    use(): void {
        throw new Error("Method not implemented.");
    }
}