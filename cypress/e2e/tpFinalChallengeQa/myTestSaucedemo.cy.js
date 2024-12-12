describe('sauce demo test',{testIsolation:false},()=>{ 
    
    it('comprar con user 1',()=>{

        //comando para iniciar sesion con user "standard"
        cy.LoginUser1('standard_user','secret_sauce')

        //agregar el producto al carrito
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()

        // comando con los datos del checkout
        cy.Checkout()

        //cerrar sesion
        cy.get('#react-burger-menu-btn').click()
        cy.contains('Logout').click()

    })
    it('comprar con user 2',()=>{

        //comando para inicar sesion con user "problem"
        cy.LoginUser2('problem_user','secret_sauce')

        //agregar producto al carrito
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()

        //comando con los datos del checkout
        cy.Checkout()

        //cerrar sesion
        cy.get('#react-burger-menu-btn').click()
        cy.contains('Logout').click()
    })
})
