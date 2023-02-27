import Chapter from "./Chapter.ts";
import Option from "./Data/Option.ts";
import Item from "./Data/Item.ts";
import NullItem from "./Data/NullItem.ts";
import Inventory from "./Inventory.ts";
import getItem from "./itemGetter.ts";
import { validChapter } from "../utils.ts";

class GameHandler {

    currentChapter: Chapter;
    inventory: Inventory;
    currentItem: Item;
    whitelistedChapters: string[];

    constructor(firstChapter: Chapter, whiteistedChapters: string []) {
        this.currentChapter = firstChapter;
        this.inventory = new Inventory();
        this.currentItem = new NullItem();
        this.whitelistedChapters = whiteistedChapters;
    }

    
    async setChapter(chapter: string): Promise<boolean> {
        if (this.validOption(chapter)) {
            this.currentChapter = await Chapter.build(chapter);
            return true;
        } else {
            console.log("invalid chapter: " + chapter);
            return false;
        }
    }

    setCurrentItem(itemStr: string): void {
        const item: Item | undefined = getItem(itemStr);
        if (item) {
            this.currentItem = item;
        } else {
            throw new Error ("Unexpexted Item: " + itemStr);
        }
    }

    // Check if the chapter selected is a chapter that is allowed to be selected
    // after the current chapter.
    validOption(chapter: string): boolean {
        const options = this.currentChapter.getOptions();
        //Check if the chapter is an available option from the current chapter
        for (const option of options) {
            if (option.getValue() == chapter)
                return true;
        }
        //Check if the chapter is available at any point
        if (this.whitelistedChapters.includes(chapter))
            return true;
        
        return false;
    }

    async addWhitelistedChapter(chapter: string): Promise<void> {
        if (await validChapter(chapter))
            this.whitelistedChapters.push(chapter);
        else
            throw new Error("Cannot add whitelisted chapter: " + chapter);
    }

    getChapterText(): string {
        return this.currentChapter.getText();
    }

    getOptions(): Option[] {
        return this.currentChapter.getOptions();
    }

    getChapterItems(): Inventory {
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
        this.currentItem = new NullItem();
        this.whitelistedChapters = whiteistedChapters;
    }
}

const firstChapterName = "1";
const whiteistedChapters = [
    "Ancient_Stick"
]

const firstChapter = await Chapter.build(firstChapterName);
const gameHandler = new GameHandler(firstChapter, whiteistedChapters);
export default gameHandler;