const { Builder, Browser, key, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');
const mocha = require('mocha');
const {
    setupDriver,
    closeDriver,
    accessWebsite,
    enterUsername,
    enterPassword,
    clickLogin } = require('../pages/loginPaytunes2');
require('dotenv').config();
let driver; // declared driver globally here

async function loginAndSyncRO() {
    try {
        //setup the driver
        await setupDriver();
        await accessWebsite();
        await enterUsername();
        await enterPassword();
        await clickLogin();
        await clickOrder();

    } catch (error) {
        console.log(error);

    } finally {
        await closeDriver();

    };
};

async function clickOrder(){
    await driver.wait(until.elementLocated(By.xpath("//div[@class='app-name']//div/h2[text()='Order']")),10000);
    await driver.findElement(By.xpath("//div[@class='app-name']//div/h2[text()='Order']")).click();
    await takeScreenshot(driver, 'order_screenshot');
    console.log('Navigated to Order successfully');
};


loginAndSyncRO();