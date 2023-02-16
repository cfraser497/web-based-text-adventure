import { FileHandler } from "./FileHandler"

class WebPage {
    readonly headerText;
    readonly button1;
    readonly button2;

    constructor() {
        this.headerText = document.getElementById("text");
        this.button1    = document.getElementById("btn1");
        this.button2    = document.getElementById("btn2");
    }

    initWebPage():boolean {
        if (this.headerText && this.button1 && this.button2) {
            this.button1.classList.add("btn");
            this.button2.classList.add("btn");
        
            this.headerText.textContent = "actually i changed my mind";
        
            this.button1.textContent = "this is button 1";
            this.button2.textContent = "this is not button 1";
            return true;
        }
        return false;
    }
}

class GameHandler {
    readonly webPage: WebPage;

    constructor(webPage:WebPage) {
        this.webPage = webPage;
    }

    mainEventLoop(): void {
       var fileHandler: FileHandler = new FileHandler("../../../Chapters/test.txt");
        if (this.webPage.headerText) {
            this.webPage.headerText.textContent = fileHandler.getText();
        }
    }

}


export function main():void {
    let webPage: WebPage = new WebPage();
    let initialised: boolean = webPage.initWebPage();
    if (initialised) {
        var gameHandler: GameHandler = new GameHandler(webPage);
        gameHandler.mainEventLoop();
    }
}