describe('sauce demo test',{testIsolation:false},()=>{
    
    it('comprar con user 1',()=>{

        //comando para iniciar sesion con user "standard"
        cy.LoginUser1('standard_user','secret_sauce')

        //agregar el producto al carrito
        cy.contains('Add to cart').eq('0').click()
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
        cy.contains('Add to cart').eq('0').click()
        cy.get('[data-test="shopping-cart-link"]').click()

        //comando con los datos del checkout
        cy.Checkout()
        cy.get('#react-burger-menu-btn').click()

        //cerrar sesion
        cy.contains('Logout').click()
    })
})
