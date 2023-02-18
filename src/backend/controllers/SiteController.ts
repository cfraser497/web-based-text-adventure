import { renderFileToString } from "../deps.ts";
import { RouterContext } from "../deps.ts";

class SiteController {
    async display(ctx: RouterContext <"/">) {
        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/index.ejs`,
             {}
        );
    }
}

const siteController = new SiteController();
export default siteController;