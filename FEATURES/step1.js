const { promise } = require('protractor');

var webdriver = require('selenium-webdriver');

var browser_name = new webdriver.Builder();

withCapabilities(webdriver.Capabilities.firefox()).build();

browser.get('http:/www.google.com');
var Promise = browser_name.getTitle();

{
  console.log(title);
}

browser.quit();


