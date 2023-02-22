import Item from "./Data/Item.ts";
import Option from "./Data/Option.ts";
import getItem from "./itemGetter.ts";

// A chapter is a text file containing a block of text about the
// information contained in that chapter, as well as filenames of
// the next chapters that we can go to.
export default class Chapter {
    private readonly chapterText: string;
    private readonly options: Option[];
    private readonly items: Item[];

    // private constructor as we use a builder design pattern to construct
    // chapters as constructors cannot be asynchronous
    private constructor(chapterText: string, options: Option[], items: Item[]) {
        this.chapterText = chapterText;
        this.options = options;
        this.items = items;
    }

    static async build(chapter: string): Promise<Chapter> {
        const path = `${Deno.cwd()}/Chapters/${chapter}.txt`;
        const content = await Deno.readTextFile(path);
        const parsedContents = this.parseChapter(content);
        //parsedContents[0] = Text for the chapter
        //parsedContents[1] = Options for the chapter
        //parsedContents[2] = Items for the chapter
        return new Chapter(parsedContents[0], parsedContents[1], parsedContents[2]);
    }

    static parseChapter(content: string): [string, Option[], Item[]] {
        const splitContentsForItems = content.split('%');
        const splitContentsForOptions: string[] = splitContentsForItems[0].split("#");
        const chapterText: string = splitContentsForOptions[0];
        const numItems: number = splitContentsForItems.length - 1;
        const numOptions: number = splitContentsForOptions.length - 1;
        const options: Option[] = new Array(numOptions);
        const items: Item[] = new Array(numItems);

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
            const itemName = splitContentsForItems[i + 1];
            const item: Item | undefined = getItem(itemName);
            if (item)
                items[i] = item;
        }
        return [chapterText, options, items];
    }

    getText(): string {
        return this.chapterText;
    }

    getOptions(): Option[] {
        return this.options;
    }

    getItems(): Item[] {
        return this.items;
    }
}