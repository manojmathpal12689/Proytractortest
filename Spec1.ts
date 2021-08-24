
import {browser,element,by} from "protractor";

describe("Validate angular site",function () {
    function Selectitem(product) {
        element.all(by.tagName("app-card")).each(function (item) {

            item.element(by.css("h4 a")).getText().then(function (text) {
                if (text == product) {
                    item.element(by.buttonText("Add")).click();
                }
            })
        })
    }
    function Removeitem()
    {
        element.all(by.tagName('tbody tr')).each(function (item) {
            item.element(by.css("td:nth-child(5)")).getText().then(function (text) {
                console.log(text);
                item.element(by.css("td:nth-child(5)")).click().then(function (){
                })
            })
        })
    }

    it("validate home page", function () {

        browser.get("https://rahulshettyacademy.com/angularpractice/");
        browser.driver.manage().window().maximize();
        element(by.name("name")).sendKeys("manoj");
        element(by.css("input[name='email']")).sendKeys("manoj@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("123456");
        element(by.id("exampleCheck1")).click();
        /* element.all(by.tagName("option")).each(function (item){
             item.element(by.css("option:nth-child(1))")).click();
 css("input[name='name']")
         })*/

        element.all(by.id("exampleFormControlSelect1")).first().click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText("Submit")).click();
        element(by.css("div[class*='success alert']")).getText().then(function (text) {
            console.log(text);

        })
        element(by.name("name")).clear();
        element(by.name("name")).sendKeys("m");
        element(by.css("div[class='alert alert-danger']")).getText().then(function (text) {

            console.log(text);
        })
        element(by.linkText("Shop")).click();
        Selectitem("iphone X");
        Selectitem("Samsung Note 8");
        element(by.partialLinkText("Checkout")).getText().then(function (text) {
            var response = text.split("(");
            console.log(response);
            expect(response[1].trim().charAt(0)).toBe("2");
        })
        element(by.partialLinkText("Checkout")).click();
        element.all(by.tagName('tbody tr')).each(function (item) {
            item.element(by.css("td:nth-child(4)")).getText().then(function (text) {
                //console.log(text);
                var response = text.split(" ");
                //console.log(response);
                var res1 = Number(response[1]);

                //console.log(res1);


            })


        })
        Removeitem();

        //browser.actions().mouseMove(element(by.id("country")).sendKeys("india")).perform();
        // browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
        element(by.css("div[class='suggestions']")).click();
        element(by.css("div[class='checkbox checkbox-primary']")).click();
        //element(by.id("checkbox2")).click();
        element(by.buttonText("Purchase")).click();
        element(by.css("div[class*='alert alert-success alert-dismissible']")).getText().then(function(text){

            console.log(text);
        })



        //element(by.cssContainingText("[id='exampleFormControlSelect1']option","Female")).click();

    })
})
