var fs = require("fs");

export class FileHandler {
    readonly file: string;

    constructor (filePath: string) {
        this.file = fs.readFileSync(filePath, "utf-8");
    }

    getText (): string {
        return this.file;
    }
}