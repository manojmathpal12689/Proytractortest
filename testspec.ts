import {by} from "protractor";

import {browser,element,By} from "protractor";
import  { Calculator } from "./pageobject/calculator";


describe('protractor test',  ()=>{

    let cal = new Calculator();
    function add(a,b)
    {
        cal.firstinputbox.sendKeys(a);
        cal.secondinputbox.sendKeys(b);
        cal.gobutton.click();
    }


    it('open angualr js site program',async ()=>{


        //browser.waitForAngularEnabled(false);// for non angular application
        //browser.get("https://rahulshettyacademy.com/angularpractice/");
          await browser.get("http://juliemr.github.io/protractor-demo/");

       /* await add(3,6);
        await add(5,8);
        await add(5,9);
        await add(5,4);
        await add(5,22);
*/
        // expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");
        await cal.firstinputbox.sendKeys(5);
        await cal.secondinputbox.sendKeys(6);
        await cal.gobutton.click();
        await cal.getresult.getText().then(function(text){
            console.log(text);
        })


        // element(by.css("h2[class='ng-binding']")).getText().then(function (text){

        // console.log(text);
        //})
    })








});




