import {Config} from "protractor";

export let config:Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['testspec.js'],

    capabilities: {
        'browserName': 'chrome',
        //'browserName': 'firefox'

    },
    useAllAngular2AppRoots: true,
    framework: 'jasmine'


};