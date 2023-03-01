import Item from "../Item.ts";
import gameHandler from "../../GameHandler.ts";

class Key extends Item {
    readonly name: string;
    readonly description: string = "The backdoor key to the watchtower";

    constructor() {
        const name = "Key";
        super(name);
        this.name = name;
    }

    async use(): Promise<boolean> {
        const currentChapter = gameHandler.getCurrentChapter().getId();
        if (currentChapter == "TutorialOutsideDoor") {
            await gameHandler.setChapter("TutorialUnlockedDoor");
            return true;
        }
        return false;
    }
}

const key: Key = new Key();
export default key;