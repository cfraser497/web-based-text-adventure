import { getItemIdFromName } from "../../../utils.ts";
import Item from "../Item.ts"

export default class AncientStick extends Item {
    readonly name: string = "Ancient Stick";
    readonly id: string = getItemIdFromName(this.name);
    readonly description: string = "A mysterious stick";

    constructor() {
        super();
    }

    use(): void {
        console.log("i wouldnt use the stick");
    }
}