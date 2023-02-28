import Item from "../Item.ts";

class Pile_of_Stones extends Item {
    name: string;
    description = "A part of the southern watchtower, still hot from the fire";
    private static instance: Pile_of_Stones;

    private constructor() {
        const name = "Pile of Stones";
        super(name);
        this.name = name;
        console.log("constructing stones");
    }
    
   static getInstance(): Pile_of_Stones {
        return Pile_of_Stones.instance || (Pile_of_Stones.instance = new Pile_of_Stones());
    }
 

    use(): void {
        throw new Error("Method not implemented.");
    }
}

const pile_of_Stones: Pile_of_Stones = Pile_of_Stones.getInstance();
export default pile_of_Stones;