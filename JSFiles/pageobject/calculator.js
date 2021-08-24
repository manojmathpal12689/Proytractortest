"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Calculator {
    constructor() {
        this.firstinputbox = protractor_1.element(protractor_1.by.model("first"));
        this.secondinputbox = protractor_1.element(protractor_1.by.model("second"));
        this.gobutton = protractor_1.element(protractor_1.by.id("gobutton"));
        //this.repeatbox=element.all(by.repeater('result in memory'));
        this.getresult = protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)"));
        this.nthchild = protractor_1.element(protractor_1.by.css("td:nth-child(3)"));
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VvYmplY3QvY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEwRTtBQUcxRSxNQUFhLFVBQVU7SUFXbkI7UUFFSSxJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMxQyw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFckQsQ0FBQztDQUVKO0FBdEJELGdDQXNCQyJ9