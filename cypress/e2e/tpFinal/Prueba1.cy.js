describe('standard_user',{testIsolation:false},()=>{

    //utilizar el usuario "standard_user"
    it('comprar con el user1',()=>{
        cy.visit('https://www.saucedemo.com')
        cy.get('input[placeholder="Username"]').type('standard_user')
        cy.get('input[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Add to cart').eq('0').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('Checkout').click()
        cy.get('input[placeholder="First Name"]').type('Maxi')
        cy.get('input[placeholder="Last Name"]').type('Benedi')
        cy.get('input[placeholder="Zip/Postal Code"]').type('5008')
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.contains('Back Home').click()
        cy.get('#react-burger-menu-btn').click()
        cy.contains('Logout').click()
               
    })


    //utilizar el usuario "problem_user"
    it('comprar con el user2',()=>{
        cy.visit('https://www.saucedemo.com')
        cy.get('input[placeholder="Username"]').type('problem_user')
        cy.get('input[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Add to cart').eq('0').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('Checkout').click()
        cy.get('input[placeholder="First Name"]').type('Maxi')
        cy.get('input[placeholder="Last Name"]').type('Benedi')
        cy.get('input[placeholder="Zip/Postal Code"]').type('5008')
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.contains('Back Home').click()
        cy.get('#react-burger-menu-btn').click()
        cy.contains('Logout').click()

    })










})