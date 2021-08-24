"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    it('open angualr js site program', () => __awaiter(void 0, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLDJDQUE4QztBQUM5Qyx3REFBc0Q7QUFHdEQsUUFBUSxDQUFDLGlCQUFpQixFQUFHLEdBQUUsRUFBRTtJQUU3QixJQUFJLEdBQUcsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUMzQixTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUVaLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdELEVBQUUsQ0FBQyw4QkFBOEIsRUFBQyxHQUFRLEVBQUU7UUFHeEMscUVBQXFFO1FBQ3JFLGlFQUFpRTtRQUMvRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFFbEU7Ozs7O0dBS0w7UUFDTSwwRUFBMEU7UUFDMUUsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBR0YsNEVBQTRFO1FBRTVFLHFCQUFxQjtRQUNyQixJQUFJO0lBQ1IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQVNOLENBQUMsQ0FBQyxDQUFDIn0=