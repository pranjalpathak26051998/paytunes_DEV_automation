const { Builder, Browser, key, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');
const mocha = require('mocha');
require('dotenv').config();
const {
    setupDriver,
    closeDriver,
    accessWebsite,
    enterUsername,
    enterPassword,
    clickLogin,
    clickOrder,
    seeAllROs,
    syncRO } = require("../pages/loginPaytunes2");

// let driver = setupDriver().driver  //new Builder().forBrowser('chrome').build();// declared driver globally here

async function loginAndSyncRO() {
    try {
        //setup the driver
        await setupDriver();
        await accessWebsite();
        await enterUsername();
        await enterPassword();
        await clickLogin();
        await clickOrder();
        await seeAllROs();
        await syncRO();


    } catch (error) {
        console.log(error);

    } finally {
        await closeDriver();

    };
};

//create an async function to click on the order so that it can be called in the loginAndSyncRO function but driver not defined here,
// // so we need to pass the driver as a parameter to the function



loginAndSyncRO();