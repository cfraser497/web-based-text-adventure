import { RouterContext } from "../deps.ts"
import gameHandler from "../models/GameHandler.ts";
import Item from "../models/Data/Item.ts";
import getItem from "../models/itemGetter.ts";
import { renderWebPage } from "../utils.ts";

class GameController {

    async update(ctx: RouterContext<"/">){
        const body = ctx.request.body({ type: 'form' })
        const value = await body.value
        const valueAsString = value.toString();
        console.log("incoming data: " + valueAsString);
        const [type, data] = valueAsString.split("=", 2);
        switch (type) {
            case "pickOption": 
                await gameHandler.setChapter(data);
                break;
            case "takeItem": {
                gameHandler.getInventory().add(data);
                gameHandler.getChapterItems().remove(data);
                const item: Item | undefined = getItem(data);
                if (item && item.getNextChapterWhenTaken() != "null")
                    await gameHandler.setChapter(item.getNextChapterWhenTaken());
                break;
            }
            case "currItem":
                gameHandler.setCurrentItem(data);
                break;
            case "use": {
                const currentItem = gameHandler.getCurrentItem();
                if (await currentItem.use())
                    gameHandler.getInventory().remove(currentItem.getId());
                    if (!gameHandler.getInventory().contains(currentItem.getId()))
                        gameHandler.setCurrentItem("null");
                break;
            }
            case "restart":
                await gameHandler.reset();
                break;
            default:
                ctx.response.status = 422;
                ctx.response.body = { message: "No file found" };
                return;
        }

        ctx.response.body = await renderWebPage();
    }
}

const gameController = new GameController();
export default gameController;