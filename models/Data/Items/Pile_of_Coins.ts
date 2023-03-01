import Item from "../Item.ts"

class Pile_of_Coins extends Item {
    readonly name: string;
    readonly description: string = "They are of an unknown currency..";


    constructor() {
        const name = "Pile of Coins";
        super(name);
        this.name = name;
    }

    async use(): Promise<boolean> {
        console.log("you used the pile of coins");
        return await true;
    }
}

const pile_of_Coins: Pile_of_Coins = new Pile_of_Coins();
export default pile_of_Coins;