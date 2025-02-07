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