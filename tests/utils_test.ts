import { assertEquals } from "../deps.ts"
import * as util from "../utils.ts";

Deno.test(function removeNewLineTest() {
    assertEquals(util.removeNewLine("Hello World\n"), "Hello World");
    assertEquals(util.removeNewLine("Hello World"), "Hello World");
});

Deno.test(function getItemIdFromNameTest() {
    assertEquals(util.getItemIdFromName("Trinket"), "Trinket");
    assertEquals(util.getItemIdFromName("Ancient Stick"), "Ancient_Stick");
})