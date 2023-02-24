import { getItemIdFromName } from "../../../utils.ts";
import Item from "../Item.ts"

export default class Trinket extends Item {
    readonly name: string = "Trinket";
    readonly id: string = getItemIdFromName(this.name);
    readonly description: string = "A rusty trinket";

    constructor() {
        super();
    }

    use(): void {
        console.log("you used the trinket");
    }
}