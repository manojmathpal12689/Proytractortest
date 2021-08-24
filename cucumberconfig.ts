import {Config} from "protractor";
var reporter = require('cucumber-html-reporter');
//import * as reporter from "cucumber-html-reporter";
export let config:Config = {
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
                "App Version":"0.3.2",
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

        require :[
           './stepdefinition/*.js',
       ]

    },


    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },





};