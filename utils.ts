import { renderFile } from "./deps.ts";
import gameHandler from "./models/GameHandler.ts";

// Returns true is a file exists in the selected folder, false if not
export const fileExists = async (filename: string): Promise<boolean> => {
    try {
        const stats = await Deno.lstat(filename);
        return stats && stats.isFile;
    } catch (e) {
        if (e && e instanceof Deno.errors.NotFound) {
            return false;
        } else {
            throw e;
        }
    }
};

//renders webpage
export function renderWebPage ():Promise<Deno.Reader> {
    return renderFile(
        `${Deno.cwd()}/views/index.ejs`, {
            chapterText: gameHandler.getChapterText(),
            options: gameHandler.getOptions(),
            items: gameHandler.getChapterItems()
         }
    );
}