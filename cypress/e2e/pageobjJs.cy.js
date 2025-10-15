/// <reference types="cypress" />
import homePage from '../support/pages/home_page.js'
import registerPage from '../support/pages/register_page.js'

describe('Desafio - Cadastro de usuário', () =>{

     beforeEach('Acessando a págima de cadastro', () => {

        //acessando a tela de cadastro
        homePage.accessRegisterPage()

        })

   const { faker } = require('@faker-js/faker');
   const user_data = require('../fixtures/desafio_valido.json')

    it('Validar Campo "Nome" vazio', () => {

        registerPage.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo nome deve ser prenchido')
    })

    it('Validar campo "E-mail" vazio', () => {
      
        
        registerPage.fillName(user_data.name)

        registerPage.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

     it('Validar campo "E-mail" inválido', () => {
    
    
        registerPage.fillName(user_data.name)

        registerPage.fillEmail('emailinvalido')

        registerPage.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo "Senha" vazio', () => {
        
        registerPage.fillName(user_data.name)

        registerPage.fillEmail(user_data.email)

        registerPage.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })

     it('Validar campo "Senha" inválido', () => {
        
        
        registerPage.fillName(user_data.name)

        registerPage.fillEmail(user_data.email)

        cy.fillPassword('123')

        registerPage.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })

     it('Validar login com sucesso', () => {

        const fullName = faker.person.fullName();

        registerPage.fillName(fullName)

        registerPage.fillEmail(faker.internet.email())

        registerPage.fillPassword(faker.internet.password({ length: 8 }))

        registerPage.saveRegister()

        registerPage.checkRegisterSuccess(fullName)
        
    })

    
})