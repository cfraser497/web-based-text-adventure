import { RouterContext } from "../deps.ts";
import { renderWebPage } from "../utils.ts";

class SiteController {
    async display(ctx: RouterContext <"/">) {
        ctx.response.body = await renderWebPage();
    }
}

const siteController = new SiteController();
export default siteController;