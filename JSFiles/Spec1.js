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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlYzEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9TcGVjMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUE4QztBQUU5QyxRQUFRLENBQUMsdUJBQXVCLEVBQUM7SUFDN0IsU0FBUyxVQUFVLENBQUMsT0FBTztRQUN2QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUVuRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO2dCQUN0RCxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUM5QztZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsU0FBUyxVQUFVO1FBRWYsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO2dCQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDckQsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMs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