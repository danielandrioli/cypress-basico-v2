/// <reference types="Cypress" />

describe('Aula 11 - Parando e avançando no relógio', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Verifica se a mensagem de erro desaparece após 3s', () => {
        cy.clock()
        cy.get('button[type=submit]').click()
        cy.get('.error').should('be.visible')
        cy.tick(3000)
        cy.get('.error').should('not.be.visible')
    })

    Cypress._.times(5, () => { //executando o teste 5 vezes com a biblioteca Lodash
        it('Dá check em cada opção do radio', () => {
            cy.get('#support-type').find('[type=radio]').each(($element) => {
                cy.get($element).check().should('be.checked')
            })
        })
    })

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke()', () => {
        cy.get('.success')
            .should('not.be.visible')
            .invoke('show')
            .should('be.visible').and('contain', 'Mensagem enviada com sucesso.')
            .invoke('hide')
            .should('not.be.visible')

        cy.get('.error')
            .should('not.be.visible')
            .invoke('show')
            .should('be.visible').and('contain', 'Valide os campos obrigatórios!')
            .invoke('hide')
            .should('not.be.visible')
    })

    it('Simula um ctrl+v de um texto longo em um campo de texto', () => {
        const longText = Cypress._.repeat("Blablabla! ", 20)

        cy.get('#open-text-area').invoke('val', longText).should('have.value', longText)
    })

    it.only('Faz uma requisição HTTP', () => {
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        .should((response) => {
            console.log(response)
            const {body, headers, status} = response

            expect(status).equals(200)
            expect(headers.server).equals('AmazonS3')
            expect(body).include('CAC TAT')
        })
    })
}
)