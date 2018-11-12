/**
 * Test script for amazon
 */
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
	  browser.ignoreSynchronization = true;
    browser.get('http://www.amazon.in/');
    element(by.id("nav-logobar-greeting")).click();
    
    element(by.id("ap_email_login")).sendKeys("parkarmobileautomation@gmail.com");
    element(by.xpath("//div[@id='accordion-row-login']//input[@id='ap_password']")).sendKeys("parkarmobile")
    element(by.id("signInSubmit")).click();
  });
});