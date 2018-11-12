
load("myPages.js");

beforeTest(function () {
	var driver = createDriver("http://testapp.galenframework.com/", "1024x768", "firefox");
	
	session.put("driver",driver);
});
	

test("My notes page",function () {
	var driver=session.get("driver");

//	session.report().info("This is only Information");
//	session.report().warn("This is warning");	
//	session.report().error("This is error");
	
	var welcomePage = new WelcomePage(driver);
	welcomePage.loginButton.click();

/*	logged("Log in as test user", function () {
		var loginPage = new LoginPage(driver);
		loginPage.username.typeText("testuser@example.com");
		loginPage.password.typeText("test123");
		loginPage.loginButton.click();
	});
*/

	var loginPage = new LoginPage(driver);
	loginPage.loginAsUser("testuser@example.com","test123");
	
	throw new Error("Somethis went wrong");
	checkLayout(driver,"mynotes.gspec","desktop");
});


afterTest(function(test) {
	var driver= session.get("driver");
	if(test.isFailed()){
		session.report().info("Screenshot")
		.withAttachment("screenshot.png",takeScreenshot(driver))
		.withTextAttachment("pagesource.txt",driver.getPageSource());
	}
	driver.quit();
});


var devices ={
	mobile:{
		devicesName:"mobile",
		tags:["mobile"],
		size: "500x600"
	},
	desktop:{
		devicesName:"desktop",
                tags:["desktop"],
                size: "1024x768"
	}

};


forAll(devices, function() {
	test("Home page on ${deviceName}", function (devices){
		var driver = session.get("driver");
		resize(driver, devices.size);
		checkLayout(driver, "homepage.gspec", devices.tags);
	});
});

