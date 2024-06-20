/// <reference types="cypress" />
import '@percy/cypress'
import validate from '../support/pages/home'


describe('Validar tela HOME', () => {
    beforeEach(() => {
        
      cy.visit('/')
  })

  it('Menu', () => {
    validate.menu()
  })

  it('Images', () => {
    validate.images()
  })

  it('Títulos e Subtítulos', () =>{
    validate.titles_subtitles()
  })

  it('Textos', () => {
    validate.texts()
  })
})