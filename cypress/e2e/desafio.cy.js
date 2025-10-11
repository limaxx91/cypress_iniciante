describe('Desafio - Cadastro de usuário', () =>{

   const { faker } = require('@faker-js/faker');
   const user_data = require('../fixtures/desafio_valido.json')

    it('Validar Campo "Nome" vazio', () => {
        cy.visit('/')
            cy.get('.header-logo')

        cy.get('.fa-lock')
            .click()
    
        cy.get('.account_form > h3')
            .contains('Cadastro de usuário')

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo nome deve ser prenchido')
    })

    it('Validar campo "E-mail" vazio', () => {
        cy.visit('/')
            cy.get('.header-logo')

        cy.get('.fa-lock')
            .click()
    
        cy.get('.account_form > h3')
            .contains('Cadastro de usuário')
        
        cy.get('#user')
         .type(user_data.name)

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

     it('Validar campo "E-mail" inválido', () => {
        cy.visit('/')
            cy.get('.header-logo')

        cy.get('.fa-lock')
            .click()
    
        cy.get('.account_form > h3')
            .contains('Cadastro de usuário')
        
        cy.get('#user')
         .type(user_data.name)

        cy.get('#email')
            .type('teste@teste')

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo "Senha" vazio', () => {
        cy.visit('/')
            cy.get('.header-logo')

        cy.get('.fa-lock')
            .click()    
        cy.get('.account_form > h3')
            .contains('Cadastro de usuário')
        
        cy.get('#user')
         .type(user_data.name)

        cy.get('#email')
            .type(user_data.email)

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })

     it('Validar campo "Senha" inválido', () => {
        cy.visit('/')
            cy.get('.header-logo')

        cy.get('.fa-lock')
            .click()
    
        cy.get('.account_form > h3')
            .contains('Cadastro de usuário')
        
        cy.get('#user')
         .type(user_data.name)

        cy.get('#email')
            .type(user_data.email)

        cy.get('#password')
            .type('123')

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })

     it.only('Validar login com sucesso', () => {

        const fullName = faker.person.fullName();

        cy.visit('/')
            cy.get('.header-logo')

        cy.get('.fa-lock')
            .click()
    
        cy.get('.account_form > h3')
            .contains('Cadastro de usuário')
        
        cy.get('#user')
         .type(fullName)

        cy.get('#email')
            .type(faker.internet.email())

        cy.get('#password')
            .type(faker.internet.password({ length: 8 }))

        cy.get('#btnRegister').click()

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('contain', `Bem-vindo ${fullName}`)
    })

    
})