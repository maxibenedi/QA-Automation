describe('algunos metodos',{testIsolation:false},()=>{ 

    it('Visitar la pagina',()=>{
        
        cy.visit('https://demoqa.com/')

        cy.title().should('eq','DEMOQA')

    })

    it('Ir al form',()=>{
        cy.get('h5').contains('Elements').click()
        cy.get('span').contains('Form').click()
        cy.get('span').contains('Practice Form').click()

        cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible')

    })

    it('Completar form',()=>{

        cy.get('#submit').click()

        cy.get('#firstName:invalid').should('exist')
        cy.get('#lastName:invalid').should('exist')

        cy.get('#userNumber:invalid').type('1234567890')

        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__day--015').click()

        cy.get('#hobbies-checkbox-3').check({force: true})
            
        cy.get('#uploadPicture').selectFile('cypress/fixtures/cypress test.jpg')

        cy.get('#city').should('not.be.enabled')

        cy.get('div').contains('Select State').click()
        cy.get('#react-select-3-option-1').click()

        cy.get('#firstName').type('Juan')
        cy.get('#lastName').type('Perez')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()

        cy.get('#submit').click()
        cy.wait(2000)

        cy.get('#example-modal-sizes-title-lg').contains('Thanks for submitting the form').should('be.visible')


    })





})

