import Chapter from "./Chapter.ts";
import Option from "./Data/Option.ts";
import Item from "./Data/Item.ts";
import NullItem from "./Data/NullItem.ts";
import Inventory from "./Inventory.ts";

class GameHandler {

    currentChapter: Chapter;
    inventory: Inventory;
    currentItem: Item;

    constructor(firstChapter: Chapter) {
        this.currentChapter = firstChapter;
        this.inventory = new Inventory();
        this.currentItem = new NullItem();
    }

    
    async setChapter(chapter: string): Promise<boolean> {
        if (this.validChapter(chapter)) {
            this.currentChapter = await Chapter.build(chapter);
            return true;
        } else {
            console.log("invalid chapter");
            return false;
        }
    }

    // Check if the chapter selected is a chapter that is allowed to be selected
    // after the current chapter.
    validChapter(chapter: string): boolean {
        const options = this.currentChapter.getOptions();
        for (const option of options) {
            if (option.getValue() == chapter)
                return true;
        }
        return false;
    }

    getChapterText(): string {
        return this.currentChapter.getText();
    }

    getOptions(): Option[] {
        return this.currentChapter.getOptions();
    }

    getChapterItems(): Item[] {
        return this.currentChapter.getItems();
    }

    getInventory(): Inventory {
        return this.inventory;
    }

    getCurrentItem(): Item {
        return this.currentItem;
    }

    async reset(): Promise<void> {
        this.inventory.clear();
        this.currentChapter = await Chapter.build(firstChapterName);
    }
}

const firstChapterName = "1";
const firstChapter = await Chapter.build(firstChapterName);
const gameHandler = new GameHandler(firstChapter);
export default gameHandler;