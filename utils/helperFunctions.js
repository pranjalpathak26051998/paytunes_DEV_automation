const { Builder, value, By, until, Browser } = require('selenium-webdriver');
require('dotenv').config();
const mocha = require('mocha');
const fs = require('fs');
const path = require('path');

// Function to maximize the window
const maximizeWindow = async (driver) => {
  await driver.manage().window().maximize();
};

// Function to take a screenshot
const takeScreenshot = async (driver, fileName) => {
  try {
    const screenshotDir = path.join(__dirname, '../screenshots/loginTestScreenshots');

    // Ensure directory exists
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    // Construct the correct file path
    const filePath = path.join(screenshotDir, `${fileName}.png`);

    // Take screenshot and save it
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(filePath, screenshot, 'base64');

    console.log(`✅ Screenshot saved: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error taking screenshot: ${error.message}`);
  }
};

  //Helper function to generate a 4 characters random name with alphabets only for the first name

  async function generateRandomName() {
    let name = 'p-test';
    for (let i = 0; i < 4; i++) {
        let randomChar = String.fromCharCode(Math.floor(65 + Math.random() * 26));
        name += randomChar;
    }
    return name;
};

//Helper function to generate a mobile number with first five digits fixed and the remaining five digits are random numbers 
async function generateRandomMobileNumber() {
    let mobile_number = '999' + Math.floor(100000 + Math.random() * 9000000).toString();
    return mobile_number;
};

// Export functions
module.exports = {
  maximizeWindow,
  takeScreenshot,
  generateRandomName,
  generateRandomMobileNumber
};
