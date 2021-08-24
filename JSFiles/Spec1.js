"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Validate angular site", function () {
    function Selectitem(product) {
        protractor_1.element.all(protractor_1.by.tagName("app-card")).each(function (item) {
            item.element(protractor_1.by.css("h4 a")).getText().then(function (text) {
                if (text == product) {
                    item.element(protractor_1.by.buttonText("Add")).click();
                }
            });
        });
    }
    function Removeitem() {
        protractor_1.element.all(protractor_1.by.tagName('tbody tr')).each(function (item) {
            item.element(protractor_1.by.css("td:nth-child(5)")).getText().then(function (text) {
                console.log(text);
                item.element(protractor_1.by.css("td:nth-child(5)")).click().then(function () {
                });
            });
        });
    }
    it("validate home page", function () {
        protractor_1.browser.get("https://rahulshettyacademy.com/angularpractice/");
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.element(protractor_1.by.name("name")).sendKeys("manoj");
        protractor_1.element(protractor_1.by.css("input[name='email']")).sendKeys("manoj@gmail.com");
        protractor_1.element(protractor_1.by.id("exampleInputPassword1")).sendKeys("123456");
        protractor_1.element(protractor_1.by.id("exampleCheck1")).click();
        /* element.all(by.tagName("option")).each(function (item){
             item.element(by.css("option:nth-child(1))")).click();
 css("input[name='name']")
         })*/
        protractor_1.element.all(protractor_1.by.id("exampleFormControlSelect1")).first().click();
        protractor_1.element.all(protractor_1.by.name("inlineRadioOptions")).first().click();
        protractor_1.element(protractor_1.by.buttonText("Submit")).click();
        protractor_1.element(protractor_1.by.css("div[class*='success alert']")).getText().then(function (text) {
            console.log(text);
        });
        protractor_1.element(protractor_1.by.name("name")).clear();
        protractor_1.element(protractor_1.by.name("name")).sendKeys("m");
        protractor_1.element(protractor_1.by.css("div[class='alert alert-danger']")).getText().then(function (text) {
            console.log(text);
        });
        protractor_1.element(protractor_1.by.linkText("Shop")).click();
        Selectitem("iphone X");
        Selectitem("Samsung Note 8");
        protractor_1.element(protractor_1.by.partialLinkText("Checkout")).getText().then(function (text) {
            var response = text.split("(");
            console.log(response);
            expect(response[1].trim().charAt(0)).toBe("2");
        });
        protractor_1.element(protractor_1.by.partialLinkText("Checkout")).click();
        protractor_1.element.all(protractor_1.by.tagName('tbody tr')).each(function (item) {
            item.element(protractor_1.by.css("td:nth-child(4)")).getText().then(function (text) {
                //console.log(text);
                var response = text.split(" ");
                //console.log(response);
                var res1 = Number(response[1]);
                //console.log(res1);
            });
        });
        Removeitem();
        //browser.actions().mouseMove(element(by.id("country")).sendKeys("india")).perform();
        // browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
        protractor_1.element(protractor_1.by.css("div[class='suggestions']")).click();
        protractor_1.element(protractor_1.by.css("div[class='checkbox checkbox-primary']")).click();
        //element(by.id("checkbox2")).click();
        protractor_1.element(protractor_1.by.buttonText("Purchase")).click();
        protractor_1.element(protractor_1.by.css("div[class*='alert alert-success alert-dismissible']")).getText().then(function (text) {
            console.log(text);
        });
        //element(by.cssContainingText("[id='exampleFormControlSelect1']option","Female")).click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlYzEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9TcGVjMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUE4QztBQUU5QyxRQUFRLENBQUMsdUJBQXVCLEVBQUM7SUFDN0Isb0JBQW9CLE9BQU87UUFDdkIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFFbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDdEQsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMvQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRDtRQUVJLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FB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