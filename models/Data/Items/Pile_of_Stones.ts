import Item from "../Item.ts";

class Pile_of_Stones extends Item {
    name: string;
    description = "A part of the southern watchtower, still hot from the fire";

    constructor() {
        const name = "Pile of Stones";
        super(name);
        this.name = name;
    }
 

    async use(): Promise<boolean> {
        console.log("you used the pile of stones");
        return await true;
    }
}

//Singleton design pattern
const pile_of_Stones: Pile_of_Stones = new Pile_of_Stones();
export default pile_of_Stones;