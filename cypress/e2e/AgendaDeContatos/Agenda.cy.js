/// <reference types="cypress" />

describe('Testes para agenda de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.clearAllLocalStorage()
    })

    
    it('Deve adicionar um contato', () => {
        cy.get('input[type="text"]').type('leo coutinho')
        cy.get('input[type="email"]').type('leocoutinho@teste.com.br')
        cy.get('input[type="tel"]').type('32 12345678')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk').should('contain','leo coutinho')
    })

    it('Deve editar o contato cadastrado', () => {
        cy.get('.sc-iAEyYk > :nth-child(2)')
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('leonardo coutinho')
        cy.get('input[type="email"]').clear().type('leonardocoutinho@teste.com')
        cy.get('input[type="tel"]').clear().type('32 12345678')
        cy.get('.alterar').click()
        cy.get('.sc-iAEyYk').should('contain','leonardo coutinho')
    })

    it('Deve deletar o contato cadastrado', () => {
        cy.get('.sc-iAEyYk > :nth-child(2)')
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.get('.sc-iAEyYk').should('not.contain', 'leonardo coutinho')
})
})

