import {by, element, ElementArrayFinder, ElementFinder} from "protractor";


export class Calculator
{
    secondinputbox:ElementFinder;
    firstinputbox:ElementFinder;
    gobutton:ElementFinder;
    //repeatbox:ElementArrayFinder;
    getresult:ElementFinder;
    nthchild:ElementFinder;



    constructor() {

        this.firstinputbox=element(by.model("first"));
        this.secondinputbox= element(by.model("second"));
        this.gobutton= element(by.id("gobutton"));
        //this.repeatbox=element.all(by.repeater('result in memory'));
        this.getresult=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
        this.nthchild=element(by.css("td:nth-child(3)"));

    }

}

