export default abstract class Item {
    abstract readonly name: string ;
    abstract readonly description: string ;

    constructor () {

    }

    abstract use():void;

    getName(): string {
        return this.name;
    }
    
    getDescription(): string {
        return this.description;
    }
}