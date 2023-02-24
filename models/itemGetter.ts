// items are uniquely identified by their name.
import Item from "./Data/Item.ts"
import AncientStick from "./Data/Items/AncientStick.ts";
import Pile_of_Coins from "./Data/Items/Pile_of_Coins.ts";

const itemsMap = new Map([
    ["Pile_of_Coins", Pile_of_Coins],
    ["Ancient_Stick", AncientStick]  
]);

export default function getItem(item:string): Item | undefined {
    try {
        const temp = itemsMap.get(item)!;
        if (temp)
            return new temp();
    } catch (e) {
        console.log("could not find item: " + item);
        throw new Error(e);
    }
}