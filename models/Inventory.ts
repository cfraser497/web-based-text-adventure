import Item from "./Data/Item.ts";
import getItem from "./itemGetter.ts";

export default class Inventory {
    private inventory: Map<string, number>;

    constructor () {
        this.inventory =  new Map<string, number>();
    }

    remove(itemStr: string): void {
        const item: Item | undefined= getItem(itemStr);
        if (item && this.inventory.has(item.name)) {
            const itemNum = this.inventory.get(item.name)!;
            if (itemNum > 1) {
                this.inventory.set(item.name, itemNum - 1);
            } else {
                this.inventory.delete(item.name);
            }
        } else {
            throw new Error("Item: " + itemStr + " does not exist in the inventory");
        }
    }

     // If the item exists in the inventory, add 1 to the number we have
    // Otherwise,  we add it to the map
    add(itemStr: string): void {
        // We must upcast to the check if the item is a valid item and to instantiate it now
        const item: Item | undefined = getItem(itemStr);
        if (item) {
            if (this.inventory.has(item.name)) {
                const oldValue: number = this.inventory.get(item.name)!;
                this.inventory.set(item.name, oldValue + 1);
            } else {
                this.inventory.set(item.name, 1);
            }
        } else {
            throw new Error ("Unknown item: " + itemStr);
        }
    }

    clear(): void {
        this.inventory.clear();
    }

    getInventoryMap(): Map<string, number> {
        return this.inventory;
    }
}