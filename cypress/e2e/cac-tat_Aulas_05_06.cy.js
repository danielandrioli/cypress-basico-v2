/// <reference types="Cypress" />

describe('Aula 05 - Checkbox', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('marca ambos checkboxes, depois desmarca o último', () => {
        cy.get('#email-checkbox').check()
        cy.get('#email-checkbox').should('be.checked')

        cy.get('#phone-checkbox').check()
        cy.get('#phone-checkbox').should('be.checked')

        cy.get('#phone-checkbox').uncheck()
        cy.get('#phone-checkbox').should('not.be.checked')

        cy.get('[type=checkbox]').last().should('not.be.checked')
    })
})

describe.only('Aula 06 - Upload de arquivos', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('Upload de arquivo', () => {
        // cy.get('#file-upload').selectFile('C:\\Users\\danie\\OneDrive\\Imagens\\Tatuagens\\coruja.jpg') // dá pra usar / ao invés de \ também. O \ é o estilo do Windows

        cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
            .should((elemento) => {
                console.log(elemento)
                expect(elemento[0].files[0].name).equals('example.json')
            })

    })

    it('Upload de arquivo com drag and drop', () => {
        cy.get('#file-upload').selectFile('C:\\Users\\danie\\OneDrive\\Imagens\\Tatuagens\\coruja.jpg', { action: 'drag-drop' })
        cy.get('#file-upload').should((elemento) => {
            expect(elemento[0].files[0].name).equals('C:\\Users\\danie\\OneDrive\\Imagens\\Tatuagens\\coruja.jpg')
        })
    })

    it('Upload de arquivo utlizando um alias', () => {
        cy.get('#file-upload').selectFile('C:\\Users\\danie\\OneDrive\\Imagens\\Tatuagens\\coruja.jpg', { action: 'drag-drop' })
        cy.get('#file-upload').should((elemento) => {
            expect(elemento[0].files[0].name).equals('C:\\Users\\danie\\OneDrive\\Imagens\\Tatuagens\\coruja.jpg')
        })
    })


    it.only('Upload de arquivo com um alias para a fixture', () => {
        cy.fixture('example.json').as('sampleFile')
        cy.get('#file-upload').selectFile('@sampleFile')
            .should((elemento) => {
                console.log(elemento)
                expect(elemento[0].files[0].name).equals('example.json') //aqui não dá pra usar o alias, só no selectFile
            })
    })
    
})