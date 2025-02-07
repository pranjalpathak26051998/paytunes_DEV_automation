const { Builder, Browser, Build, until, key, By } = require('selenium-webdriver');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const mocha = require('mocha');
const { maximizeWindow, takeScreenshot, generateRandomName, generateRandomMobileNumber } = require('../utils/helperFunctions');
const {
    setupDriver,
    closeDriver,
    accessWebsite,
    enterUsername,
    enterPassword,
    clickLogin,
    clickOnCRM,
    navigateToUnifiedLeads,
    clickAddLeads,
    findFieldandEnterDetails,
    selectCompany,
    selectBrandName,
    selectSalesIncharge,
    enterSalesInchargeComment,
    clickSaveAndContinue
} = require('../pages/loginPaytunes2');
let driver;

describe("Login and Sync RO on Paytunes", () => {
    before(async function () {
        driver = await setupDriver();
        console.log("Driver setup is complete");
    });
    after(async function () {
        await closeDriver();
        console.log("Driver closed");
    });

    //access the website
    it("should access the website", async function () { await accessWebsite(); console.log("Accessed website successfully"); });
    //enter the user name
    it("should enter username", async function () { await enterUsername(); console.log("Username Entered successfully"); });
    //enter the password
    it("should enter the password", async function (){ await enterPassword(); console.log("Password entered successfully");});
    //click on the login button to login
    it("should click the login button", async function(){ await clickLogin(); console.log("Login button clicked successfully"); });

});
    
