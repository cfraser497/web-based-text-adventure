export async function getChapter(chapter: string) {
    const path = "./Chapters/" + chapter +".txt";
    const content = await Deno.readTextFile(path);
    return content;
}