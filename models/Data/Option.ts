export default class Option {
    private readonly text: string;
    private readonly value: string;


    constructor(text: string, value: string) {
        this.text = text;
        this.value = value;
    }

    getText():string {
        return this.text;
    }

    getValue():string {
        return this.value;
    }
}