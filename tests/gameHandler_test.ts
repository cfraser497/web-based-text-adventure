import { assertEquals } from "../deps.ts";
import gameHandler from "../models/GameHandler.ts";
import Inventory from "../models/Inventory.ts";
import null_Item from "../models/Data/NullItem.ts";

Deno.test(function IsIntialisedCorrectly() {
    gameHandler.reset();
    assertEquals(gameHandler.getInventory(), new Inventory());
    assertEquals(gameHandler.getCurrentItem(), null_Item);
})