/// <reference types="Cypress" />

describe('template spec', () => {
  beforeEach(function () {
    cy.visit('./src/index.html')
  })

  // it('Preenche os campos obrigatórios e envia o formulário', () => {
  //   preencheCamposObrigatorios('Daniboy', 'Andrioli', 'aew@gmail.com', 'Nada não', 500)
  //   cy.get('.button').click() //.button é uma class

  //   cy.get('.success').should('be.visible')
  // })

  // it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
  //   preencheCamposObrigatorios('Ixurú', "Cabelo Twonight", "ix!gmail.com", "Nada não")

  //   cy.get('.button').click()
  //   cy.get('.error').should('be.visible')
  // })

  // it('Valor não numérico no campo "telefone" não pode ser digitado', () => {
  //   cy.get('[id=phone]').type("AEEEEEE MEU!!").should('be.empty')
  // })

  // it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
  //   preencheCamposObrigatorios('Daniboy', 'Andrioli', 'aew@gmail.com', 'Nada não')
  //   cy.get('[id=phone-checkbox]').click().should('be.checked')
  //   cy.get('.button').click()
  //   cy.get('.error').should('be.visible')
  // })

  // it('Preenche e limpa o campo', () => {
  //   cy.get('[id=firstName]').type("Aew aew!!").clear().should('have.value', '')
  // })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    let formulario = {
      firstName: "Danozo",
      lastName: "Andrioli",
      email: "danozo@gmail.com",
      message: "aeeeew"
    }

    cy.fillMandatoryFields(formulario)
  })

})

function preencheCamposObrigatorios(firstName, lastName, email, message, delayMessage) {
  cy.contains('Nome').type(firstName) //contains é para texto na UI
  cy.get('[id=lastName]').type(lastName).should('have.value', lastName) //get é para seletor
  cy.get('[id=email]').type(email)
  cy.get('[id=open-text-area]').type(message, { delay: delayMessage }) //options é opcional
  //Só um teste envia delayMessage. Como ele é opcional e está undefined (em muitas ocasiões), o valor fica o padrão
}