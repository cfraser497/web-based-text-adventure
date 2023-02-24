import { getItemIdFromName } from "../../utils.ts";

export default abstract class Item {
    //How the item will be printed
    abstract readonly name: string;
    //How the item will be internally represented (replacing spaces with underscores)
    readonly id: string;
    //A description of what the item is
    abstract readonly description: string ;
    //a path to the image location
    readonly image: string;

    constructor(name: string) {
        this.id = getItemIdFromName(name);
        this.image = `./images/items/${this.id}.png`;
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

    static toString(): string {
        return "item " + this.name;
    }
}