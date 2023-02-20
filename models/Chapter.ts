import Option from "./Option.ts";

// A chapter is a text file containing a block of text about the
// information contained in that chapter, as well as filenames of
// the next chapters that we can go to.
export default class Chapter {
    private readonly chapterText: string;
    private readonly options: Option[];

    // private constructor as we use a builder design pattern to construct
    // chapters as constructors cannot be asynchronous
    private constructor(chapterText: string, options: Option[]) {
        this.chapterText = chapterText;
        this.options = options;
    }

    static async build(chapter: string): Promise<Chapter> {
        const path = `${Deno.cwd()}/Chapters/${chapter}.txt`;
        const content = await Deno.readTextFile(path);
        const parsedContents = this.parseChapter(content);
        return new Chapter(parsedContents[0], parsedContents[1]);
    }

    static parseChapter(content: string): [string, Option[]] {
        const splitContents: string[] = content.split("#");
        const chapterText: string = splitContents[0];
        const numOptions: number = splitContents.length - 1;
        const options: Option[] = new Array(numOptions);

        // loop over each option and fill out the option class
        for (let i = 0; i < numOptions; i++) {
            const optionAsString = splitContents[i + 1];
            const value = optionAsString.split(" ", 1)[0];
            const text = optionAsString.slice(optionAsString.indexOf(" "));
            const option: Option = new Option(text, value);
            options[i] = option;
        }
        return [chapterText, options];
    }

    getText(): string {
        return this.chapterText;
    }

    getOptions(): Option[] {
        return this.options;
    }
}