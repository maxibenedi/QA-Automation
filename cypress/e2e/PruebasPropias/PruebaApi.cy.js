describe('PruebaApi', ()=>{

    it('Crear Usuario OK',()=>{

     cy.intercept('POST','/api/user/').as('userCreado')   
     cy.visit('https://conduit.bondaracademy.com/')   
     cy.contains(/sign up/i).click()
     cy.get('[Placeholder=Username]').type('CheSapeTeQueria7')
     cy.get('[Placeholder=Email]').type('Sape@tequeria7')
     cy.get('[Placeholder=Password]').type('TeQueria')
     cy.get('.btn').click()   
     cy.wait('@UserCreado').then((interception) =>{
        expect(interception.response.statusCode).to.equal(201)   
        })
    })
    
    it.only('Ingreso Usuario Error',()=>{
        cy.intercept('POST','/api/user/').as('userWrong')   
     cy.visit('https://conduit.bondaracademy.com/login')   
     cy.get('[Placeholder=Email]').type('Sinarroba')
     cy.get('[Placeholder=Password]').type('Brenda')
     cy.get('.btn').click()   
     cy.wait('@userWrong').then((interception) =>{
        expect(interception.response.statusCode).to.equal(403)
    })
    cy.log('Por ahi no es, campeon')
    })


})