context('login page tests', () =>{
	it("plain login", ()=>{
	cy.visit("r/rm_holidays/105/login_desktop");
	cy.get('#P101_USERNAME').type("RM_HOLIDAYS");
	cy.get('#P101_PASSWORD').type("9fwXjjHT5qPRmzW", {log:false})
	cy.get('#P101_LOGIN').click()
});
});
