import Item from "../Item.ts"
import gameHandler from "../../GameHandler.ts";

export default class AncientStick extends Item {
    readonly name: string;
    readonly description: string = "A mysterious stick";

    constructor() {
        const name = "Ancient Stick";
        super(name);
        this.name = name;
    }

    async use(): Promise<void> {
        await gameHandler.setChapter("Ancient_Stick");
    }
}