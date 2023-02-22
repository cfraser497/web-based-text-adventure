// items are uniquely identified by their name.
import Item from "./Data/Item.ts"
import Trinket from "./Data/Items/Trinket.ts";
import AncientStick from "./Data/Items/AncientStick.ts";

const itemsMap = new Map([
    ["Trinket", Trinket],
    ["AncientStick", AncientStick]  
]);

export default function getItem(item:string): Item | undefined {
    try {
        const temp = itemsMap.get(item);
        if (temp)
            return new temp();
    } catch (e) {
        console.log("could not find item: " + item);
        throw new Error(e);
    }
}