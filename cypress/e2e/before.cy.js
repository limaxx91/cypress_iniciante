/// <reference types="cypress" />


describe('Desafio - Cadastro de usuário', () =>{

     beforeEach('Acessando a págima de cadastro', () => {

        //acessando a tela de cadastro
        cy.accessRegisterPage()

        })

   const { faker } = require('@faker-js/faker');
   const user_data = require('../fixtures/desafio_valido.json')

    it('Validar Campo "Nome" vazio', () => {

        cy.saveRegster()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo nome deve ser prenchido')
    })

    it('Validar campo "E-mail" vazio', () => {
      
        
        cy.fillName(user_data.name)

        cy.saveRegster()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

     it('Validar campo "E-mail" inválido', () => {
    
    
        cy.fillName(user_data.name)

        cy.fillEmail('emailinvalido')

        cy.saveRegster()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo "Senha" vazio', () => {
        
        cy.fillName(user_data.name)

        cy.fillEmail(user_data.email)

        cy.saveRegster()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })

     it('Validar campo "Senha" inválido', () => {
        
        
        cy.fillName(user_data.name)

        cy.fillEmail(user_data.email)

        cy.fillPassword('123')

        cy.saveRegster()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })

     it('Validar login com sucesso', () => {

        const fullName = faker.person.fullName();

        cy.fillName(fullName)

        cy.fillEmail(faker.internet.email())

        cy.fillPassword(faker.internet.password({ length: 8 }))

        cy.saveRegster()

        cy.checkRegisterSuccess(fullName)
        
    })

    
})