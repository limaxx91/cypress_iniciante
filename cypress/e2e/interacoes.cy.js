// const { it } = require("mocha")

describe('Get Texts', () => {
    // it('Digitar em um campo', () => {
    //     //get() - selecionar elementos
    //     cy.visit('/')
    //          .get('.header-logo')

    //     cy.get('.form-control')
    //         .type('teste@teste.com')     
    // })

    // it('Click', () => {


    //     cy.visit('/')
    //      .get('.header-logo')


    //      click normal
    //     cy.get('.fa-user')
    //         .click()

    //      click duplo
    //     cy.get('.fa-user')
    //         .dblclick()

    //     click botão direito
    //     cy.get('.fa-user')
    //         .rightclick(100, 100, {force: true})

    //     simular apertar enter
    //     cy.get('.form-control')
    //         .type('teste@teste.com{enter}')
    // })


    // it('Select', () => {
    // cy.visit('/')
    //      .get('.header-logo')

    // cy.get('.footer_one_widget')
    //     .contains('Checkout View Two')
    //     .click()

    // cy.get('#country')
    //     .select('Albania')

    // })

    // it.only('Check e Radio', () => {
    //     cy.visit('/')
    //         .get('.header-logo')

    //     cy.get('.footer_one_widget')
    //     .contains('Checkout View One')
    //     .click()

    //     cy.get('#materialUnchecked')
    //         .check()

    //     cy.get('#css')
    //         .check()

    // })

    it('Meu Teste', () => {
        
        cy.visit('/')
            .get('.header-logo')

        cy.get('.main-menu')
            .contains('Customer Dashboard')
            .click({force: true})
            
        cy.get('.dashboard-list')
            .contains('Account details').click()

        cy.get('.checkbox-default')
            .get('#offer')
             .check()

            
    })
})