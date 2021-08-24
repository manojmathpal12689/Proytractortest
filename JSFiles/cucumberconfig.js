"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reporter = require('cucumber-html-reporter');
//import * as reporter from "cucumber-html-reporter";
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/demo.feature'],
    onComplete: () => {
        //
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberjson.json',
            output: './results.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  92.0.2840.98",
                "Platform": "Ubantu 18.20",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            },
        };
        reporter.generate(options);
    },
    cucumberOpts: {
        // tags:"@calculatortesting",
        format: 'json:./cucumberjson.json',
        require: [
            './stepdefinition/*.js',
        ]
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=800x600"]
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ2pELHFEQUFxRDtBQUMxQyxRQUFBLE1BQU0sR0FBVTtJQUN2QixrREFBa0Q7SUFDbEQsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLEVBQUU7UUFDQSxJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QixzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLGNBQWM7Z0JBQzFCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUVKLENBQUM7UUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxZQUFZLEVBQUU7UUFDWCw2QkFBNkI7UUFDNUIsTUFBTSxFQUFFLDBCQUEwQjtRQUVsQyxPQUFPLEVBQUU7WUFDTix1QkFBdUI7U0FDMUI7S0FFSDtJQUdELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGFBQWEsRUFBRTtZQUNYLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsdUJBQXVCLENBQUM7U0FDakU7S0FDSjtDQUtKLENBQUMifQ==