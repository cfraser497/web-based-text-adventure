import { Application } from "./deps.ts";
import { staticFileMiddleware } from "./middlewares/staticFileMiddleware.ts";
import router from "./router.ts";


const app = new Application();

//use the routes that we defined (e.g. get and post methods)
app.use(router.routes());
app.use(router.allowedMethods());

app.use(staticFileMiddleware);

app.addEventListener("listen", ({hostname, port, secure}) => {
    console.log(`Listening on ${secure ? "https://": "http://"}${hostname ?? "localhost"}:${port}`);
});

await app.listen ({ port: 5500 });