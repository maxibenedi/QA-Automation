describe('actividades de asistencia 12/11', {testIsolation :false },() => {


    //Verifica que ingrese a la pagina automationintesting.online
    it('dirigirse a la pagina automationintesting',()=>{
    
    cy.visit('https://automationintesting.online/')
    cy.title().should('eq','Restful-booker-platform demo')

    })
        //verificar los datos del hotel
    it('corroborar datos del hotel que esten presente', ()=>{
        cy.visit('https://automationintesting.online/')
    
        //nombre del hotel
         cy.get('.col-sm-5').should('contain','Shady Meadows B&B').and('be.visible')
         cy.get('.fa.fa-home').should('exist').and('be.visible')

        //direccion
         cy.get('.col-sm-5').should('contain','The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').and('be.visible')

        //telefono
         cy.get('.col-sm-5').should('contain','012345678901').and('be.visible')
         cy.get('.fa.fa-phone').should('exist').and('be.visible')
            
         //email
         cy.get('.col-sm-5').should('contain','fake@fakeemail.com').and('be.visible')
         cy.get('.fa.fa-envelope').should('exist').and('be.visible')
        
    })

    it('asegurarse que haya una imagen visible',()=>{

        //verificar las imagenes del hotel estan visibles
        cy.visit('https://automationintesting.online/')
        cy.get('img[src="https://www.mwtestconsultancy.co.uk/img/rbp-logo.png"]').should('be.visible')
        cy.get('img[src="https://loremflickr.com/500/500/cat?lock=7698"]').should('be.visible')
        

    })


    it('asegurar que el texto de la descripción del hotel sea el esperado.',()=>{

        //verificar si la descripcion del hotel es la esperada
        cy.visit('https://automationintesting.online/')
        cy.get('.col-sm-10').should('contain','Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.').and('be.visible')


    })














})