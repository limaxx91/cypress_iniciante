/// <register types="cypress" />

const elements ={
    buttons:{
        register: '#btnRegister'
    },
    fields:{
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages:{
        error: '.errorLabel',
        registerSuccess: '#swal2-html-container'
    }
}

export default{
    saveRegister(){
    cy.get(elements.buttons.register).click()
},

fillName(name){
     cy.get(elements.fields.name)
         .type(name)
},

fillEmail(email){
     cy.get(elements.fields.email)
        .should('be.visible')
         .type(email)
},

fillPassword(password){
     cy.get(elements.fields.password)
        .should('be.visible')
         .type(password)
},

checkRegisterSuccess(fullName){
   
    cy.get(elements.messages.registerSuccess,{ timeout: 3000 })
            .should('be.visible')
            .should('contain', `Bem-vindo ${fullName}`)
}
}