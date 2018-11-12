exports.config = {
	seleniumAddress : 'http://localhost:4723/wd/hub',
	specs : [ 'wordpress.js' ],
	framework: 'jasmine',
	capabilities : {
		'platformName' : 'iOS',
		'platformVersion' : '9.0',
		'deviceName' : 'iPhone 6',
		'appium-version' : '1.6.0',
		'browserName' : 'safari',
		"nativeInstrumentsLib" : true,
		//"forceStop" : false,
		"newCommandTimeout":120,
		"launchTimeout":120000,
	},

	baseUrl : 'http://10.0.2.2:8000',
};
