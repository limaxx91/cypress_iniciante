// const { it } = require("mocha")

describe('Get Texts', () => {
   

    it('Verificar elemento ', () => {
        
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click()

        cy.get('.account_form > h3')
            .should('be.visible')

        cy.get('.account_form > h3')
            .should('contain', 'Login')
            .should('have.text', 'Login')

        cy.get('.account_form > h3')
            .then((e) => {
                expect(e.text()).eq('Login')
                expect(e).to.be.visible
            })
            
    })
})