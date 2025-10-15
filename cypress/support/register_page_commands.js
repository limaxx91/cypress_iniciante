Cypress.Commands.add('saveRegster',() => {
    cy.get('#btnRegister').click()
})

Cypress.Commands.add('fillName', (name)=>{
     cy.get('#user')
         .type(name)
})

Cypress.Commands.add('fillEmail', (email)=>{
     cy.get('#email')
        .should('be.visible')
         .type(email)
})

Cypress.Commands.add('fillPassword', (password)=>{
     cy.get('#password')
        .should('be.visible')
         .type(password)
})

Cypress.Commands.add('checkRegisterSuccess', (fullName) => {
   
    cy.get('#swal2-html-container',{ timeout: 3000 })
            .should('be.visible')
            .should('contain', `Bem-vindo ${fullName}`)
})