import { getItemIdFromName } from "../../../utils.ts";
import Item from "../Item.ts"

export default class AncientStick extends Item {
    readonly name: string;
    readonly description: string = "A mysterious stick";

    constructor() {
        const name = "Ancient Stick";
        super(name);
        this.name = name;
    }

    use(): void {
        console.log("i wouldnt use the stick");
    }
}