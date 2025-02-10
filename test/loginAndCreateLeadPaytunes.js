const { Builder, By, Browser, until } = require('selenium-webdriver');
const mocha = require('mocha');
require('dotenv').config();
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
    OpenVerticalCompanyDropDown,
    selectBrandName,
    selectSalesIncharge,
    enterSalesInchargeComment,
    clickSaveAndContinue
} = require('../pages/loginPaytunes2');

let driver;

describe('Login to Paytunes and create a new lead', function () {
    try {
        this.timeout(50000);

        let expect;

        before(async function () {
            driver = await setupDriver();
            // expect = (await import('chai')).expect; // Use dynamic import for Chai
        });

        after(async function () {
            await closeDriver();
            console.log('Test Suite completed');
        });

        it('should access the website', async function () {
            await accessWebsite();
            console.log('Accessed the website successfully');
        });

        it('should enter username successfully', async function () {
            await enterUsername();
            console.log('Entered username successfully');
        });

        it('should enter password successfully', async function () {
            await enterPassword();
            console.log('Entered password successfully');
        });

        it('should click login button', async function () {
            await clickLogin();
            console.log('Clicked login button successfully');
        });

        it('should click on CRM', async function () {
            await clickOnCRM();
            console.log('Clicked on CRM successfully');
        });

        it('should navigate to Unified Leads', async function () {
            await navigateToUnifiedLeads();
            console.log('Navigated to Unified Leads successfully');
        });

        it('should click on Add Leads', async function () {
            await clickAddLeads();
            console.log('Clicked on Add Leads successfully');
        });

        it('should find field and enter details', async function () {
            await findFieldandEnterDetails();
            console.log('Found field and entered details successfully');
        });

        it('should select company', async function () {
            await selectCompany();
            console.log('Selected company successfully');
        });

        it('should select vertical company', async function(){
            await OpenVerticalCompanyDropDown();
            console.log('Opened vertical company drop down successfully');
        });

        it('should select brand name', async function () {
            await selectBrandName();
            console.log('Selected brand name successfully');
        });

        it('should select sales incharge', async function () {
            await selectSalesIncharge();
            console.log('Selected sales incharge successfully');
        });

        it('should enter sales incharge comment', async function () {
            await enterSalesInchargeComment();
            console.log('Entered sales incharge comment successfully');
        });

        it('should click save and continue', async function () {
            await clickSaveAndContinue();
            console.log('Clicked save and continue successfully');
        });

        // // Verify the lead creation
        // it('should verify lead creation', async function () {
        //     const leadName = await driver.findElement(By.css('input[name="name"]')).getAttribute('value');
        //     expect(leadName).to.equal('Test Lead');
        //     console.log('Lead creation verified successfully');
        // });

    } catch (error) {
        console.log(error);
        // await closeDriver();

    }
});




















// const { Builder, By, Browser, until, key } = require('selenium-webdriver');
// const mocha = require('mocha');
// const fs = require('fs');
// const path = require('path');
// const Openai = require('openai');
// // const loginPaytunes = require('../pages/loginPaytunes');
// const {
//     accessWebsite,
//     enterUsername,
//     enterPassword,
//     clickLogin
// }= require('../pages/loginPaytunes2');

// require('dotenv').config(); //
// (async function loginAndCreateLead() {

//     describe('login to paytunes and create a new lead', async function(){
//         try {
//             this.timeout(25000); //Increase timeout to 25 seconds
//             // before(async function () {
//             //     driver = await new Builder().forBrowser(Browser.CHROME).build();
//             //     await maximizeWindow(driver);

//             // });
//             // after(async function () {
//             //     await driver.quit();
//             //     console.log('Test Suite completed');
//             // });
//             //access website
//             // it('should access the website', async function (){
//             //     await accessWebsite();
//             //     console.log("Accessed the website successfully");
//             // });
//             it('enter username successfully', async function () {
//                 // await loginPaytunes.enterUsername;
//                 await enterUsername();
//                 console.log('Enter username successfully');
//                 // await takeScreenshot(driver, 'loginPage');

//             });

//         } catch (error) {
//             console.log(error);


//         }
//     });


// })();