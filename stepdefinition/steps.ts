import {Given, Then, When} from "cucumber";
import {browser} from "protractor";
import  { Calculator } from "../pageobject/calculator";
import chai from "chai";
var expect = chai.expect;


let cal = new Calculator();
Given('Navigate to {string} site.',  async (string)=>{
   if (string=="calculator") {
       await browser.get("http://juliemr.github.io/protractor-demo/");
   }
   else if (string=="Angularjs")
   {
       await browser.get("https://angularjs.org/");
   }
});
When('I add two number {string} and {string}.', async (string,string2)=>{
    await cal.firstinputbox.sendKeys(string);
    await cal.secondinputbox.sendKeys(string2);

});
Then('output display should be {string}.', async  (string)=>{
    await cal.gobutton.click();
    await cal.getresult.getText().then(function(text){
        expect(text).to.equal(string);

    })

});