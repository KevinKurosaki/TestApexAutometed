context('customer page tests', () =>{
	it("assert the value of the breadcrum label", ()=>{
	cy.visit("r/rm_holidays/105/login_desktop");
	cy.get('#P101_USERNAME').type("RM_HOLIDAYS");
	cy.get('#P101_PASSWORD').type("9fwXjjHT5qPRmzW", {log:false})
	cy.get('#P101_LOGIN').click();
	cy.get('#t_TreeNav_1 > .a-TreeView-content > .fa').click();
	cy.get('[data-cy=create_customerButton]').click();
	cy.get('.ui-dialog').invoke('css', 'height', '500px');
	cy.get("iframe").then(iframe => {
		return new Cypress.Promise(resolve => {
			iframe.on("load", () => {
				resolve(iframe.contents().find("body"));
			});
		});
	});
	cy.get("iframe").invoke("contents").invoke("find","body").then(cy.wrap).find('#P7_CUST_FIRST_NAME').type("Kevin");
	cy.get("iframe").invoke("contents").invoke("find","body").then(cy.wrap).find('#P7_CUST_LAST_NAME').type("Varela");
	cy.get("iframe").invoke("contents").invoke("find","body").then(cy.wrap).find('#P7_CUST_POSTAL_CODE').type("09656");
	cy.get("iframe").invoke("contents").invoke("find","body").then(cy.wrap).find('#P7_CREDIT_LIMIT').type("1000");
	cy.get("iframe").invoke("contents").invoke("find","body").then(cy.wrap).find('#P7_CUST_STATE').select("Massachusetts");
	cy.get("iframe").invoke("contents").invoke("find","body").then(cy.wrap).find('[data-cy=add_customerButton]').click();
	cy.contains("td", "Kevin");
});
});
