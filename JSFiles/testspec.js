"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pageobject/calculator");
describe('protractor test', () => {
    let cal = new calculator_1.Calculator();
    function add(a, b) {
        cal.firstinputbox.sendKeys(a);
        cal.secondinputbox.sendKeys(b);
        cal.gobutton.click();
    }
    it('open angualr js site program', () => __awaiter(this, void 0, void 0, function* () {
        //browser.waitForAngularEnabled(false);// for non angular application
        //browser.get("https://rahulshettyacademy.com/angularpractice/");
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        /* await add(3,6);
         await add(5,8);
         await add(5,9);
         await add(5,4);
         await add(5,22);
 */
        // expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");
        yield cal.firstinputbox.sendKeys(5);
        yield cal.secondinputbox.sendKeys(6);
        yield cal.gobutton.click();
        yield cal.getresult.getText().then(function (text) {
            console.log(text);
        });
        // element(by.css("h2[class='ng-binding']")).getText().then(function (text){
        // console.log(text);
        //})
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsMkNBQThDO0FBQzlDLHdEQUFzRDtBQUd0RCxRQUFRLENBQUMsaUJBQWlCLEVBQUcsR0FBRSxFQUFFO0lBRTdCLElBQUksR0FBRyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzNCLGFBQWEsQ0FBQyxFQUFDLENBQUM7UUFFWixHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxFQUFFLENBQUMsOEJBQThCLEVBQUMsR0FBUSxFQUFFO1FBR3hDLHFFQUFxRTtRQUNyRSxpRUFBaUU7UUFDL0QsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBRWxFOzs7OztHQUtMO1FBQ00sMEVBQTBFO1FBQzFFLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsTUFBTSxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtRQUdGLDRFQUE0RTtRQUU1RSxxQkFBcUI7UUFDckIsSUFBSTtJQUNSLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFTTixDQUFDLENBQUMsQ0FBQyJ9