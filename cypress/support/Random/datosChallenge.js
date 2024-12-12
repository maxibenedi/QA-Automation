Cypress.Commands.add('LoginUser1',(User,Password) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[placeholder="Username"]').type('standard_user')
    cy.get('input[placeholder="Password"]').type('secret_sauce')
    cy.get('#login-button').click()
})

Cypress.Commands.add('LoginUser2',(User,Password)=>{
    cy.visit('https://www.saucedemo.com')
    cy.get('input[placeholder="Username"]').type('problem_user')
    cy.get('input[placeholder="Password"]').type('secret_sauce')
    cy.get('#login-button').click()
})

Cypress.Commands.add('Checkout',()=>{
    cy.get('input[placeholder="First Name"]').type('Maxi')
    cy.get('input[placeholder="Last Name"]').type('Benedi')
    cy.get('input[placeholder="Zip/Postal Code"]').type('5008')
    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.contains('Back Home').click()

})



