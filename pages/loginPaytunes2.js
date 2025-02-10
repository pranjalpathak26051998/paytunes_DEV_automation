const { Builder, By, Key, until } = require('selenium-webdriver');
// const { expect } = require('chai');
require('dotenv').config();
const baseURL = require('../config/baseURl');
const {
    maximizeWindow,
    takeScreenshot,
    generateRandomName,
    generateRandomMobileNumber,
} = require('../utils/helperFunctions');

let driver;
const websiteUrl = baseURL().baseURL;
const username = process.env.paytunesDEV_username;
const password = process.env.paytunesDEV_password;
const verticalCompany = process.env.verticalCompany_dev;

// Initialize WebDriver before running tests
async function setupDriver() {
    driver = await new Builder().forBrowser('chrome').build();
    await maximizeWindow(driver);
    return driver;
}

// Close WebDriver after tests
async function closeDriver() {
    if (driver) {
        await driver.quit();
    }
}

async function accessWebsite() {
    await driver.get(websiteUrl);
    await takeScreenshot(driver, 'websiteUrl');
    console.log('Website accessed');
}

async function enterUsername() {
    const usernameField = await driver.wait(until.elementLocated(By.id('id_username')));
    await usernameField.sendKeys(username);
    await takeScreenshot(driver, 'username');
    console.log('Username entered');
}

async function enterPassword() {
    const passwordField = await driver.wait(until.elementLocated(By.id('id_password')));
    await passwordField.sendKeys(password);
    await takeScreenshot(driver, 'password');
    console.log('Password entered');
}

async function clickLogin() {
    const loginButton = await driver.wait(
        until.elementLocated(By.xpath("//input[@type='submit' and @value='LOGIN']")),
        10000
    );
    await loginButton.click();
    await takeScreenshot(driver, 'login');
    console.log('Login button clicked');
}

// find crm 
async function clickOnCRM() {
    //wait for the CRM card to be visible
    await driver.wait(until.elementLocated(By.xpath('//div[@class="app-card"]//div[2]/div/h2[text()="CRM"]')));
    //find the CRM card and click it
    await driver.findElement(By.xpath('//div[@class="app-card"]//div[2]/div/h2[text()="CRM"]')).click();
    console.log('Navigated to CRM successfully');
    //take a screenshot after navigating to CRM
    await takeScreenshot(driver, 'crm_screenshot');
};
async function navigateToUnifiedLeads() {
    //wait for the Unified Leads link to be visible
    await driver.wait(until.elementLocated(By.xpath('//a[@href="lead_management/unifiedleadcontact/" and text()="Unified Leads"]')));
    //find the Unified Leads link and click it
    await driver.findElement(By.xpath('//a[@href="lead_management/unifiedleadcontact/" and text()="Unified Leads"]')).click();
    console.log('Navigated to Unified Leads successfully');
    //take a screenshot after navigating to Unified Leads
    await takeScreenshot(driver, 'unified_leads_screenshot');
};
async function clickAddLeads() {
    //wait for the create new  Lead link to be visible
    await driver.wait(until.elementLocated(By.xpath('//a[@href="/crm/lead_management/unifiedleadcontact/add/"]')));
    //find the create new  Lead link and click it
    await driver.findElement(By.xpath('//a[@href="/crm/lead_management/unifiedleadcontact/add/"]')).click();
    console.log('Clicked on Add Lead button successfully');
    //take a screenshot after creating a new Lead
    await takeScreenshot(driver, 'new_lead_screenshot');
};
async function findFieldandEnterDetails() {
    //wait for the fields to be visible
    let first_name = await driver.wait(until.elementLocated(By.id('id_first_name')));
    if (first_name) {
        console.log('First Name field is visible');
        first_name.sendKeys(generateRandomName());
        //take a screenshot after entering the first name field
        await takeScreenshot(driver, 'first_name_screenshot');
    }
    else {
        await driver.quit();
        console.error('First Name field is not visible');
    }

    let last_name = await driver.wait(until.elementLocated(By.id('id_last_name')));
    if (last_name) {
        console.log('Last Name field is visible');
        await last_name.sendKeys(generateRandomName());
        //take a screenshot after entering the last name field
        await takeScreenshot(driver, 'last_name_screenshot');
    }
    else {
        await driver.quit();
        console.error('Last Name field is not visible');
    }

    let primary_contact_number = await driver.wait(until.elementLocated(By.id('id_primary_contact_number')));
    if (primary_contact_number) {
        console.log('Primary Contact Number field is visible');
        await primary_contact_number.sendKeys(generateRandomMobileNumber());
        //take a screenshot after entering the primary contact number field
        await takeScreenshot(driver, 'primary_contact_number_screenshot');
    }
    else {
        await driver.quit();
        console.error('Primary Contact Number field is not visible');
    }

    let work_email = await driver.wait(until.elementLocated(By.id('id_work_email')));
    if (work_email) {
        console.log('Primary Work Email field is visible');

    }
    else {
        await driver.quit();
        console.error('Primary Work Email field is not visible');
    }

    console.log('All fields are visible');
};
// 1 Finances
// selecting the company from the dropdown
async function selectCompany() {
    //wait for the company dropdown to be visible
    await driver.wait(until.elementLocated(By.id('select2-id_company-container')));
    // await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.id('select2-id_company-container'))).click();
    let company_selected = "1 Finances";
    // ANJ Creations Pvt Ltd
    await driver.wait(until.elementLocated(By.xpath("//input[@class='select2-search__field' and @tabindex='0']"))).sendKeys(company_selected);
    await driver.wait(until.elementLocated(By.xpath("//li[@class='select2-results__option select2-results__option--highlighted']"))).click();
    console.log('Company selected successfully');
    //take a screenshot after selecting the company
    await takeScreenshot(driver, 'company_screenshot');
};
// open the drop-down of the vertical company.
async function OpenVerticalCompanyDropDown() {
    try {
        await driver.wait(until.elementLocated(By.xpath("//span[@class='select2-selection__rendered' and @id='select2-id_vertical-container']")));
        await driver.findElement(By.xpath("//span[@class='select2-selection__rendered' and @id='select2-id_vertical-container']")).click();
        console.log('Vertical company drop-down opened successfully selected successfully');
        await driver.sleep(2000);
        await driver.findElement(By.xpath("//span[@class='select2-container select2-container--jet select2-container--open']//input[@class='select2-search__field']")).sendKeys(verticalCompany);
        //span[@class='select2-container select2-container--jet select2-container--open']//span//span[2]//input
        // await driver.wait(until.elementLocated(By.xpath("//span[@class='select2-container select2-container--jet select2-container--open']//span//span[2]//input")),10000);
        // await driver.findElement(By.xpath("//span[@class='select2-container select2-container--jet select2-container--open']//span//span[2]//input")).sendKeys("Paytunes");
        console.log('Vertical company selected successfully');
        await takeScreenshot(driver, 'vertical_company_screenshot');
        await driver.sleep(3000);

    } catch (error) {
        console.log('Error:', error);
        await driver.quit();
    }
};




// selecting the brand name from the dropdown
async function selectBrandName() {
    await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Select Brands']")));
    let brandEnter = 'Patanjali';
    // 'p-testB2';
    // 'Patanjali'
    await driver.findElement(By.xpath("//input[@placeholder='Select Brands']")).sendKeys(brandEnter);
    await driver.wait(until.elementLocated(By.xpath("//li[@class='select2-results__option select2-results__option--highlighted']"))).click();
    // await driver.findElement(By.xpath("//input[@placeholder='Select Brands']")).sendKeys('Amrutanjan');
    // await driver.wait(until.elementLocated(By.xpath("//li[@class='select2-results__option' and text()='Amrutanjan']"))).click();
    console.log('Brand name entered successfully');
    //take a screenshot after entering the brand name
    await takeScreenshot(driver, 'brand_name_screenshot');
    // await driver.sleep(2000);
};
//find another sales incharge and select
//a[@href='#' and text()='Add another Sales incharge']
async function selectSalesIncharge() {

    // locate and click on Add another Sales in charge button
    await driver.wait(until.elementLocated(By.xpath("//a[@href='#' and text()='Add another Sales incharge']")));
    await driver.findElement(By.xpath("//a[@href='#' and text()='Add another Sales incharge']")).click();
    //take a screenshot after clicking on Add another Sales in charge button
    await takeScreenshot(driver, 'add_another_sales_buttonCLicked');
    console.log('Add another Sales incharge button clicked successfully');

    //find span to click for the drop down to open
    // select2-id_sales_incharges-0-user_profile-container
    await driver.wait(until.elementLocated(By.id('select2-id_sales_incharges-0-user_profile-container')));
    await driver.findElement(By.id('select2-id_sales_incharges-0-user_profile-container')).click();
    //click and enter the details
    await driver.findElement(By.xpath("//span[@class='select2-search select2-search--dropdown']/input")).sendKeys('e3');
    await driver.wait(until.elementLocated(By.xpath("//ul[@id='select2-id_sales_incharges-0-user_profile-results']/li[1]"))).click();
    console.log('Sales incharge selected successfully');
    //take a screenshot after selecting the sales incharge
    await takeScreenshot(driver, 'another_sales_incharge_screenshot');
    driver.sleep(2000);
};
//click to add another sales incharge comment
//a[@href='#' and text()='Add another Sales incharge comment']
async function enterSalesInchargeComment() {
    //find add another sales incharge comment button and click it
    await driver.wait(until.elementLocated(By.xpath("//a[@href='#' and text()='Add another Sales incharge comment']")));
    await driver.findElement(By.xpath("//a[@href='#' and text()='Add another Sales incharge comment']")).click();

    console.log('Add another Sales incharge comment button clicked successfully');
    await driver.wait(until.elementLocated(By.xpath("//span[@id='select2-id_sales_incharge_comments-0-status_desc-container']"))).click();
    await driver.wait(until.elementLocated(By.xpath("//li[@class='select2-results__option' and text()='Open-Lead Assigned']"))).click();
    //td[@class='field-comment']//textarea[@name='sales_incharge_comments-0-comment']
    await driver.findElement(By.xpath("//td[@class='field-comment']//textarea[@name='sales_incharge_comments-0-comment']")).sendKeys('Test Comment');
    //generate a next call date by adding 30 days to the current date of the system, and take the output in the form of YYYY-MM-DD
    let currentDate = new Date();
    let nextCallDate = new Date(currentDate.setDate(currentDate.getDate() + 30));
    let formattedDate = nextCallDate.toISOString().split('T')[0];
    console.log('Next Call Date:', formattedDate);
    //td[@class='field-next_call_date']/input[@name='sales_incharge_comments-0-next_call_date']
    await driver.findElement(By.xpath("//td[@class='field-next_call_date']/input[@name='sales_incharge_comments-0-next_call_date']")).sendKeys(formattedDate);
    console.log('Sales incharge comment next date added successfully');


    //take a screenshot after clicking on Add another Sales incharge comment button
    await takeScreenshot(driver, 'add_another_sales_incharge_comment_screenshot');
    await driver.sleep(2000);

};

//click on save and continue button
async function clickSaveAndContinue() {
    await driver.wait(until.elementLocated(By.xpath("//input[@type='submit' and @value='Save and continue editing']")));
    await driver.findElement(By.xpath("//input[@type='submit' and @value='Save and continue editing']")).click();

    console.log('Save and continue button clicked successfully');
    //take a screenshot after clicking on save and continue button
    await takeScreenshot(driver, 'continue_button_screenshot');
    await driver.sleep(2000);
};
//go back to view site for order
async function clickViewSite() {
    await driver.wait(until.elementLocated(By.xpath("//a[@href='/' and @class='sidebar-link icon']")), 10000);
    await driver.findElement(By.xpath("//a[@href='/' and @class='sidebar-link icon']")).click();
    await takeScreenshot(driver, 'view_site_clicked');
    console.log("Clicked on view site successfully");
};

//click on order button 
async function clickOrder() {
    await driver.wait(until.elementLocated(By.xpath("//h2[text()='Order']")), 10000);
    await driver.findElement(By.xpath("//h2[text()='Order']")).click();
    await takeScreenshot(driver, 'click_order');
    console.log("clicked on order successfully");
};

//click on see al ROs
async function seeAllROs() {
    await driver.wait(until.elementLocated(By.xpath("//a[@href='/order/order/ro/']")), 10000);
    await driver.findElement(By.xpath("//a[@href='/order/order/ro/']")).click();
    await takeScreenshot(driver, 'see_all_ROs');
    console.log("clicked on see all ROs successfully");
};
//click on sync RO button
async function syncRO() {
    await driver.wait(until.elementLocated(By.xpath("//a[@href='/order/order/ro/sync_ro/']")), 10000);
    await driver.findElement(By.xpath("//a[@href='/order/order/ro/sync_ro/']")).click();
    await takeScreenshot(driver, 'sync_RO_btn');
    console.log("clicked on sync RO button successfully");
};

async function runAndCreateLead() {
    try {
        await setupDriver();
        await accessWebsite();
        await enterUsername();
        await enterPassword();
        await clickLogin();
        await clickOnCRM();
        await navigateToUnifiedLeads();
        await clickAddLeads();
        await findFieldandEnterDetails();
        await selectCompany();
        await OpenVerticalCompanyDropDown();
        await selectBrandName();
        await selectSalesIncharge();
        await enterSalesInchargeComment();
        await clickSaveAndContinue();
        await clickViewSite();
        await driver.sleep(3000);
        await clickOrder();
        await seeAllROs();
        await syncRO();
        await driver.sleep(2000);

    } catch (error) {
        console.log('Error:', error);
        await closeDriver();

    }
};
runAndCreateLead();

module.exports = {
    driver,
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
    OpenVerticalCompanyDropDown,
    selectBrandName,
    selectSalesIncharge,
    enterSalesInchargeComment,
    clickSaveAndContinue,
    clickViewSite,
    clickOrder,
    seeAllROs,
    syncRO
};

















// //making the setup for required components from selenium components
// const { Builder, By, Key, until, Browser } = require('selenium-webdriver');
// const mocha = require('mocha');
// const { maximizeWindow, takeScreenshot, generateRandomName, generateRandomMobileNumber } = require('../utils/helperFunctions');
// // const takeScreenshot = require('../utils/helperFunctions/takeScreenshot');
// // const chai = require('chai');
// require('dotenv').config();
// const baseURL = require('../config/baseURl');
// // const { elementLocated } = require('selenium-webdriver/lib/until');
// // const { expect } = chai;
// let websiteUrl = baseURL().baseURL;
// console.log(websiteUrl.toString());
// let driver
// let username = process.env.paytunesDEV_username;
// let password = process.env.paytunesDEV_password;

//         async function accessWebsite() {
//             await driver.get(websiteUrl);
//             await driver.takeScreenshot(driver, 'websiteUrl');
//             console.log('website accessed');
//         }
//         // await accessWebsite();
//         // enter the username and password
//         async function enterUsername() {
//             await driver.wait(until.elementLocated(By.id('id_username')), 10000);
//             await driver.findElement(By.id('id_username')).sendKeys(username);
//             await driver.takeScreenshot(driver, 'username');
//             console.log('username entered');
//         };
//         async function enterPassword() {
//             await driver.wait(until.elementLocated(By.id('id_password')), 10000);
//             await driver.findElement(By.id('id_password')).sendKeys(password);
//             await driver.takeScreenshot(driver, 'password');
//             console.log('password entered');
//         };
//         //click on login button
//         async function clickLogin() {
//             await driver.wait(until.elementLocated(By.xpath("//input[@type='submit' and @value ='LOGIN']")), 10000);
//             await driver.findElement(By.xpath("//input[@type='submit' and @value ='LOGIN']")).click();
//             await driver.takeScreenshot(driver, 'login');
//             console.log('login button clicked');
//         };

// module.exports = {
//     accessWebsite,
//     enterUsername,
//     enterPassword,
//     clickLogin
// }