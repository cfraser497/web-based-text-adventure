import Chapter from "./Chapter.ts";
import Option from "./Data/Option.ts";
import Item from "./Data/Item.ts";
import getItem from "./itemGetter.ts"

class GameHandler {

    currentChapter: Chapter;
    inventory: Map<string, number>;

    constructor(firstChapter: Chapter) {
        this.currentChapter = firstChapter;
        this.inventory = new Map<string, number>;
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

    // If the item exists in the inventory, add 1 to the number we have
    // Otherwise,  we add it to the map
    addItemToInventory(itemStr: string) {
        const item: Item | undefined = getItem(itemStr);
        if (item) {
            if (this.inventory.has(item.name)) {
                const oldValue: number = this.inventory.get(item.name)!;
                this.inventory.set(item.name, oldValue + 1);
            } else {
                this.inventory.set(item.name, 1);
            }
        }
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

    getInventory(): Map<string, number> {
        return this.inventory;
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