describe('Desafio - Cadastro de usuário', () =>{

    const user_name = 'Gabriel'
    const user_email = 'teste@teste.com'
    const user_password = '1234567'

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
         .type(user_name)

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
         .type(user_name)

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
         .type(user_name)

        cy.get('#email')
            .type(user_email)

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
         .type(user_name)

        cy.get('#email')
            .type(user_email)

        cy.get('#password')
            .type('123')

        cy.get('#btnRegister').click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })

     it('Validar login com sucesso', () => {
        cy.visit('/')
            cy.get('.header-logo')

        cy.get('.fa-lock')
            .click()
    
        cy.get('.account_form > h3')
            .contains('Cadastro de usuário')
        
        cy.get('#user')
         .type(user_name)

        cy.get('#email')
            .type(user_email)

        cy.get('#password')
            .type(user_password)

        cy.get('#btnRegister').click()

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('contain', `Bem-vindo ${user_name}`)
    })

    
})