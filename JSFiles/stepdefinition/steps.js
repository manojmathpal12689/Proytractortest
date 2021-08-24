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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageobject/calculator");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let cal = new calculator_1.Calculator();
cucumber_1.Given('Navigate to {string} site.', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "calculator") {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    }
    else if (string == "Angularjs") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I add two number {string} and {string}.', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield cal.firstinputbox.sendKeys(string);
    yield cal.secondinputbox.sendKeys(string2);
}));
cucumber_1.Then('output display should be {string}.', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield cal.gobutton.click();
    yield cal.getresult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbi9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUEyQztBQUMzQywyQ0FBbUM7QUFDbkMseURBQXVEO0FBQ3ZELGdEQUF3QjtBQUN4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBR3pCLElBQUksR0FBRyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzNCLGdCQUFLLENBQUMsNEJBQTRCLEVBQUcsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUNsRCxJQUFJLE1BQU0sSUFBRSxZQUFZLEVBQUU7UUFDdEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQ2xFO1NBQ0ksSUFBSSxNQUFNLElBQUUsV0FBVyxFQUM1QjtRQUNJLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUMvQztBQUNKLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUU7SUFDcEUsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRS9DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsb0NBQW9DLEVBQUUsQ0FBUSxNQUFNLEVBQUMsRUFBRTtJQUN4RCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbEMsQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=