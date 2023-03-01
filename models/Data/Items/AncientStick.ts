import Item from "../Item.ts"
import gameHandler from "../../GameHandler.ts";

class AncientStick extends Item {
    readonly name: string;
    readonly description: string = "A mysterious stick";

    constructor() {
        const name = "Ancient Stick";
        super(name);
        this.name = name;
    }

    async use(): Promise<boolean> {
        await gameHandler.setChapter("Ancient_Stick");
        return true;
    }
}

const ancientStick: AncientStick = new AncientStick();
export default ancientStick;