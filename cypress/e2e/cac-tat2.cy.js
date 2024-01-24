/// <reference types="Cypress" />

describe('Aula 03 - Suite testes caixa selecao suspensa', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Seleciona o produto "Mentoria"', () => {
        cy.get('#product').select('mentoria')
        cy.get('#product').should('have.value', 'mentoria') //value no DOM tem 'm' minúsculo
    })

    it('Seleciona o produto "Blog"', () => {
        cy.get('#product').select('blog')
        cy.get('#product').should('have.value', 'blog')
    })

    it('Seleciona o produto "Cursos"', () => {
        cy.get('#product').select('Cursos')
        cy.get('#product').should('have.value', 'cursos')
    })
})

describe.only('Aula 04 - Suite testes radio button', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Check opção elogio', () => {
        cy.get('input[value=elogio]').check().should('be.checked')
    })

    it('Check opção feedback', () => {
        cy.get('#support-type').find('[value=feedback]').check().should('be.checked')
    })

    it('Check em cada opção', () => {
        cy.get('#support-type').each( () => {
            //TERMINAR AQUI!!
        })
    })
})