this.WelcomePage = $page("Welcome page",{
        loginButton: ".button-login"
});

this.LoginPage = $page("Login page",{
        username: "input[name='login.username']",
        password: "input[name='login.password']",
        loginButton: ".button-login",
	
	loginAsUser: loggedFunction("Login as user with email ${username} and password ${password}", function (username, password) {
		this.username.typeText(username);
		this.password.typeText(password);
		this.loginButton.click();
	})

});
