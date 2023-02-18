import { RouterContext } from "../deps.ts"
import { getChapter } from "../file_reader.ts";

class GameController {

    async update(ctx: RouterContext<"/">){
        const {nextChapter} = await ctx.request.body().value;
        if (!nextChapter) {
            ctx.response.status = 422;
            ctx.response.body = { message: "No file found" };
            return;
        }
        ctx.response.body = getChapter(nextChapter);
    }
}

const gameController = new GameController();
export default gameController;