import { RouterContext } from "../deps.ts"
import gameHandler from "../models/GameHandler.ts";
import { renderWebPage } from "../utils.ts";

class GameController {

    async update(ctx: RouterContext<"/">){
        const body = ctx.request.body({ type: 'form' })
        const value = await body.value
        const valueAsString = value.toString();
        const nextChapter = valueAsString.slice(valueAsString.indexOf("=") + 1);
        console.log(nextChapter);
        if (!nextChapter) {
            ctx.response.status = 422;
            ctx.response.body = { message: "No file found" };
            return;
        }
        await gameHandler.setChapter(nextChapter);
        ctx.response.body = await renderWebPage();
    }
}

const gameController = new GameController();
export default gameController;