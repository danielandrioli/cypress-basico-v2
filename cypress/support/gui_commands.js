Cypress.Commands.add('fillMandatoryFields', (formulario) => {
    cy.contains('Nome').type(formulario.firstName) //contains é para texto na UI
    cy.get('[id=lastName]').type(formulario.lastName).should('have.value', formulario.lastName) //get é para seletor
    cy.get('[id=email]').type(formulario.email)
    cy.get('[id=open-text-area]').type(formulario.message, { delay: formulario.delayMessage })
})
