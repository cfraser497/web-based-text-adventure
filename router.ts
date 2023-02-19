import { Router } from "./deps.ts"
import gameController from "./controllers/GameController.ts";
import siteController from "./controllers/SiteController.ts";

const router = new Router();

router
    .get("/", siteController.display)
    .post("/", gameController.update);

export default router;