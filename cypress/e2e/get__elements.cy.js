describe('Get Elements', () => {
    it('Encontrar/Selecionar', () => {
        //get() - selecionar elementos
        cy.visit('/')
             .get('.header-logo')

        //contains() - para encontrar elementos que contenham um texto específico
        //geralmente diminuimos o escopo com um get() antes
        cy.get('#top_header').as('cabecalho') //as() - alias()
            .contains('Login')


        //find() - para encontrar elementos
        //geralmente diminuimos o escopo com um get() antes de usar o find()
        cy.get('@cabecalho')
            .find('.fa-user')

        
        cy.get('@cabecalho')
            .find('.fa-user')
    })
})