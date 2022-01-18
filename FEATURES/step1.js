let webdriver = require(‘selenium-webdriver’);

var browser_name = new webdriver.Builder();

withCapabilities(webdriver.Capabilities.firefox()).build();

browser.get(‘http:/www.google.com’);

let promise = browser_name.getTitle();

promise.then(function(title) 

{

console.log(title);

});