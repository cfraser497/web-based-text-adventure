export default abstract class Item {
    //How the item will be printed
    abstract readonly name: string;
    //How the item will be internally represented (replacing spaces with underscores)
    abstract readonly id: string;
    //A description of what the item is
    abstract readonly description: string ;

    constructor () {}

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

    static toString(): string {
        return "item " + this.name;
    }
}