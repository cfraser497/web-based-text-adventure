import Item from "../Item.ts"
import gameHandler from "../../GameHandler.ts";

class AncientStick extends Item {
    readonly name: string;
    readonly description: string = "A mysterious stick";
    private static instance: AncientStick;

    private constructor() {
        const name = "Ancient Stick";
        super(name);
        this.name = name;
    }

    static getInstance(): AncientStick {
        return AncientStick.instance || (AncientStick.instance = new AncientStick());
    }

    async use(): Promise<void> {
        await gameHandler.setChapter("Ancient_Stick");
    }
}

const ancientStick: AncientStick = AncientStick.getInstance();
export default ancientStick;