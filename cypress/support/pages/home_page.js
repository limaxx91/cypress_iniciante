/// <reference types="cypress" />

export default{
    accessRegisterPage(){

        //acessando a aplicação
        cy.visit('/')
        cy.get('.header-logo')

    //entrou no registrar    
        cy.get('.fa-lock')
            .click()

    //validando se está na página de cadastro
        cy.get('.account_form > h3')
            .contains('Cadastro de usuário')
    }
}