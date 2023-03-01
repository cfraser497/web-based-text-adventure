// items are uniquely identified by their name.
import Item from "./Data/Item.ts"
import ancientStick from "./Data/Items/AncientStick.ts";
import pile_of_Coins from "./Data/Items/Pile_of_Coins.ts";
import pile_of_Stones from "./Data/Items/Pile_of_Stones.ts";

const itemsMap = new Map([
    ["Pile_of_Coins", pile_of_Coins],
    ["Ancient_Stick", ancientStick]  ,
    ["Pile_of_Stones", pile_of_Stones]
]);

//Factory design pattern method of getting items
export default function getItem(item:string): Item | undefined {
    try {
        const temp = itemsMap.get(item)!;
        if (temp)
            return temp;
    } catch (e) {
        console.log("could not find item: " + item);
        throw new Error(e);
    }
}