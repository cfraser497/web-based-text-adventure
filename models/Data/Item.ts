import { getItemIdFromName } from "../../utils.ts";

export default abstract class Item {
    //How the item will be printed
    abstract readonly name: string;
    //How the item will be internally represented (replacing spaces with underscores)
    private readonly id: string;
    //A description of what the item is
    abstract readonly description: string ;
    //a path to the image location
    private readonly image: string;
    //optional property that dictates the next chapter to display when taken
    //if the chapter shouldnt update, we keep the chapter as null.
    private nextChapterWhenTaken: string;

    protected constructor(name: string) {
        this.id = getItemIdFromName(name);
        this.image = `./images/items/${this.id}.png`;
        this.nextChapterWhenTaken = "null";
    }

    abstract use():void;

    getName(): string {
        return this.name;
    }
    
    getDescription(): string {
        return this.description;
    }

    getId(): string {
        return this.id;
    }

    getImage(): string {
        return this.image;
    }

    setNextChapterWhenTaken(chapter: string): void {
        console.log("in setting next chapter function, setting chapter " + chapter);
        this.nextChapterWhenTaken = chapter;
    }

    getNextChapterWhenTaken(): string {
        return this.nextChapterWhenTaken;
    }

    static toString(): string {
        return "item " + this.name;
    }
}