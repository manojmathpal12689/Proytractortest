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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "  @calculatortesting" }, function () {
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === 'failed') {
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
    });
});
cucumber_1.Before({ tags: "  @Angulartesting" }, function () {
    console.log("need to execute");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUErQztBQUMvQywyQ0FBbUM7QUFHbkMsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRyxzQkFBc0IsRUFBQyxFQUFDO0lBRW5DLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFDSCxnQkFBSyxDQUFDLFVBQWUsUUFBUTs7UUFDekIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDckMsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUcsbUJBQW1CLEVBQUMsRUFBQztJQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUMifQ==