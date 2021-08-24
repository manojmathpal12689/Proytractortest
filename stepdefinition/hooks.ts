import {After, Before, Status} from "cucumber";
import {browser} from "protractor";


Before({tags : "  @calculatortesting"},function (){

    browser.manage().window().maximize();
});
After(async function(scenario) {
    if (scenario.result.status === 'failed') {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

Before({tags : "  @Angulartesting"},function (){

    console.log("need to execute");
});