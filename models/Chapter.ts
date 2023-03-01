import Item from "./Data/Item.ts";
import Option from "./Data/Option.ts";
import getItem from "./itemGetter.ts";
import { removeNewLine } from "../utils.ts";
import Inventory from "./Inventory.ts";

// A chapter is a text file containing a block of text about the
// information contained in that chapter, as well as filenames of
// the next chapters that we can go to.
export default class Chapter {
    private readonly chapterText: string;
    private readonly options: Option[];
    private readonly items: Inventory;
    private readonly id: string;

    // private constructor as we use a builder design pattern to construct
    // chapters as constructors cannot be asynchronous
    private constructor(id:string, chapterText: string, options: Option[], items: Inventory) {
        this.chapterText = chapterText;
        this.options = options;
        this.items = items;
        this.id = id;
    }

    static async build(id: string): Promise<Chapter> {
        const path = `${Deno.cwd()}/Chapters/${id}.txt`;
        const content = await Deno.readTextFile(path);
        const parsedContents = this.parseChapter(content);
        //parsedContents[0] = Text for the chapter
        //parsedContents[1] = Options for the chapter
        //parsedContents[2] = Items for the chapter
        return new Chapter(id, parsedContents[0], parsedContents[1], parsedContents[2]);
    }

    static parseChapter(content: string): [string, Option[], Inventory] {
        const splitContentsForItems = content.split('%');
        const splitContentsForOptions: string[] = splitContentsForItems[0].split("#");
        const chapterText: string = splitContentsForOptions[0];
        const numItems: number = splitContentsForItems.length - 1;
        const numOptions: number = splitContentsForOptions.length - 1;
        const options: Option[] = new Array(numOptions);
        const items: Inventory = new Inventory();

        // loop over each option and fill out the option class
        for (let i = 0; i < numOptions; i++) {
            const optionAsString = splitContentsForOptions[i + 1];
            const value = optionAsString.split(" ", 1)[0];
            const text = optionAsString.slice(optionAsString.indexOf(" "));
            const option: Option = new Option(text, value);
            options[i] = option;
        }
        // loop over each item and instantiate each item
        for (let i = 0; i < numItems; i++) {
            const itemNoNewLine = removeNewLine(splitContentsForItems[i + 1]);
            const itemDetails = itemNoNewLine.split("->");
            const item: Item | undefined = getItem(itemDetails[0]);
            if (item) {
                items.add(item.getId());
                if (itemDetails[1])
                    item.setNextChapterWhenTaken(itemDetails[1]);
            }
        }
        return [chapterText, options, items];
    }

    getText(): string {
        return this.chapterText;
    }

    getOptions(): Option[] {
        return this.options;
    }

    getItems(): Inventory {
        return this.items;
    }

    getId(): string {
        return this.id;
    }
}