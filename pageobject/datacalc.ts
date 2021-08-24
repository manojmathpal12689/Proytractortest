import {by, element, ElementFinder} from "protractor";


export class Calculator
{
    secondinputbox:ElementFinder;
    firstinputbox:ElementFinder;
    gobutton:ElementFinder;


    constructor() {

        this.firstinputbox=element(by.model("first"));
        this.secondinputbox= element(by.model("second"));
        this.gobutton= element(by.id("gobutton"));
    }

}

