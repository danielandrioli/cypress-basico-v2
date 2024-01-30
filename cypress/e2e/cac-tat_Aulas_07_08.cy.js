/// <reference types="Cypress" />

describe('Aula 07 - Novas abas abertas', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Verificando que uma nova aba foi aberta', () => {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it('Removendo o atributo "target" para o link ser aberto na mesma aba', () => {
        cy.get('#privacy a').invoke('removeAttr', 'target').click()
        
        cy.title('Central de Atendimento ao Cliente TAT - Política de privacidade')
        .should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
    })

    it('Substituindo o atributo "target" para o link ser aberto na mesma aba', () => {
        cy.get('#privacy a').invoke('attr', 'target', '_self').click()

        cy.title('Central de Atendimento ao Cliente TAT - Política de privacidade')
        .should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
    })

})