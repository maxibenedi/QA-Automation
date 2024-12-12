describe('actividades de asistencia 12/11', {testIsolation :false },() => {


        //Verifica que ingrese a la pagina automationintesting.online
    it('dirigirse a la pagina automationintesting',()=>{
        
        cy.visit('https://automationintesting.online/')
        cy.title().should('eq','Restful-booker-platform demo')

    })
        //verificar los datos del hotel
    it('corroborar datos del hotel que esten presente', ()=>{
        cy.visit('https://automationintesting.online/')
       
        /*    
        cy.contains('Shady Meadows B&B').should('be.visible')
        cy.contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible')
        cy.contains('012345678901').should('be.visible')
        cy.contains('fake@fakeemail.com').should('be.visible')

        cy.get('span.fa.fa-home').should('be.visible')
        cy.get('span.fa.fa-phone').should('be.visible')
        cy.get('span.fa.fa-envelope').should('be.visible')*/
        
        /*
        cy.get('.col-sm-5').should('contain','Shady Meadows B&B').and('be.visible')
        cy.get('.fa.fa-home').should('exist').and('be.visible')

        cy.get('.col-sm-5').should('contain','The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').and('be.visible')

        cy.get('.col-sm-5').should('contain','012345678901').and('be.visible')
        cy.get('.fa.fa-phone').should('exist').and('be.visible')
        
        cy.get('.col-sm-5').should('contain','fake@fakeemail.com').and('be.visible')
        cy.get('.fa.fa-envelope').should('exist').and('be.visible')*/
            
        //cy.get('.col-sm-10').should('contain','Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.').and('be.visible')

        cy.get('img[src="https://www.mwtestconsultancy.co.uk/img/rbp-logo.png"]').should('be.visible')

    })













})