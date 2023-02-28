import Item from "../Item.ts"

class Pile_of_Coins extends Item {
    readonly name: string;
    readonly description: string = "They are of an unknown currency..";
    private static instance: Pile_of_Coins;


    private constructor() {
        const name = "Pile of Coins";
        super(name);
        this.name = name;
    }

    static getInstance(): Pile_of_Coins {
        return Pile_of_Coins.instance || (Pile_of_Coins.instance = new Pile_of_Coins());
    }

    use(): void {
        console.log("you used the pile of coins");
    }
}

const pile_of_Coins: Pile_of_Coins = Pile_of_Coins.getInstance();
export default pile_of_Coins;