const { Builder, By, Key, until, Browser } = require('selenium-webdriver');
const loginPaytunes = require('../pages/loginPaytunes');
const {maximizeWindow, takeScreenshot, generateRandomName, generateRandomMobileNumber} = require('../utils/helperFunctions');
require('dotenv').config();
// const baseURL = require('../config/baseURL');
// let driver
async function createLead(){
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await maximizeWindow(driver);

     // find crm 
    //  async function accessLogin(){

    //  };
     async function clickOnCRM() {
        //wait for the CRM card to be visible
        await driver.wait(until.elementLocated(By.xpath('//div[@class="app-card"]//div[2]/div/h2[text()="CRM"]')), 10000);
        //find the CRM card and click it
        await driver.findElement(By.xpath('//div[@class="app-card"]//div[2]/div/h2[text()="CRM"]')).click();
        console.log('Navigated to CRM successfully');
        //take a screenshot after navigating to CRM
        await takeScreenshot(driver, 'crm_screenshot');
    };
    async function navigateToUnifiedLeads() {
        //wait for the Unified Leads link to be visible
        await driver.wait(until.elementLocated(By.xpath('//a[@href="lead_management/unifiedleadcontact/" and text()="Unified Leads"]')), 10000);
        //find the Unified Leads link and click it
        await driver.findElement(By.xpath('//a[@href="lead_management/unifiedleadcontact/" and text()="Unified Leads"]')).click();
        console.log('Navigated to Unified Leads successfully');
        //take a screenshot after navigating to Unified Leads
        await takeScreenshot(driver, 'unified_leads_screenshot');
    };
    async function clickAddLeads() {
        //wait for the create new  Lead link to be visible
        await driver.wait(until.elementLocated(By.xpath('//a[@href="/crm/lead_management/unifiedleadcontact/add/"]')), 10000);
        //find the create new  Lead link and click it
        await driver.findElement(By.xpath('//a[@href="/crm/lead_management/unifiedleadcontact/add/"]')).click();
        console.log('Clicked on Add Lead button successfully');
        //take a screenshot after creating a new Lead
        await takeScreenshot(driver, 'new_lead_screenshot');
    };
    async function findFieldandEnterDetails() {
        //wait for the fields to be visible
        let first_name = await driver.wait(until.elementLocated(By.id('id_first_name')), 25000);
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

        let last_name = await driver.wait(until.elementLocated(By.id('id_last_name')), 10000);
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

        let primary_contact_number = await driver.wait(until.elementLocated(By.id('id_primary_contact_number')), 10000);
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

        let work_email = await driver.wait(until.elementLocated(By.id('id_work_email')), 10000);
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
        await driver.wait(until.elementLocated(By.id('select2-id_company-container')), 15000);
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
    // selecting the brand name from the dropdown
    async function selectBrandName() {
        await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Select Brands']")), 10000);
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
        await driver.wait(until.elementLocated(By.xpath("//a[@href='#' and text()='Add another Sales incharge']")), 10000);
        await driver.findElement(By.xpath("//a[@href='#' and text()='Add another Sales incharge']")).click();
        //take a screenshot after clicking on Add another Sales in charge button
        await takeScreenshot(driver, 'add_another_sales_buttonCLicked');
        console.log('Add another Sales incharge button clicked successfully');

        //find span to click for the drop down to open
        // select2-id_sales_incharges-0-user_profile-container
        await driver.wait(until.elementLocated(By.id('select2-id_sales_incharges-0-user_profile-container')), 10000);
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
        await driver.wait(until.elementLocated(By.xpath("//a[@href='#' and text()='Add another Sales incharge comment']")), 10000);
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
    async function clickSaveAndContinue(){
        await driver.wait(until.elementLocated(By.xpath("//input[@type='submit' and @value='Save and continue editing']")), 5000);
        await driver.findElement(By.xpath("//input[@type='submit' and @value='Save and continue editing']")).click();

        console.log('Save and continue button clicked successfully');
        //take a screenshot after clicking on save and continue button
        await takeScreenshot(driver, 'continue_button_screenshot');
        await driver.sleep(2000);
    };
    // await enterUsername();
    // await enterPassword();
    // await clickLogin();
    // await accessLogin();
    await loginPaytunes.enterUsername;
    await loginPaytunes.enterPassword;
    await loginPaytunes.clickLogin;
    await clickOnCRM();
    await navigateToUnifiedLeads();
    await clickAddLeads();
    await findFieldandEnterDetails();
    await selectCompany();
    await selectBrandName();
    await selectSalesIncharge();
    await enterSalesInchargeComment();
    await clickSaveAndContinue();



    // await loginPaytunes.navigateToPaytunes(driver);
    // await loginPaytunes.login(driver);
    // await driver.sleep(2000);
}
createLead();