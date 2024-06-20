/// <reference types="cypress" />
import{ IMAGES, MENU, TEXTS, TITLES_SUBTITLES, CANDYTABLE} from "./elements";
import '@percy/cypress';

class validate {

    menu(){
        cy.get(MENU.Home).contains('Home')
        cy.get(MENU.News).contains('Noticias')
        cy.get(MENU.Curiosities).contains('Curiosidades')
        cy.get(MENU.Contact_us).contains('Fale Conosco')


    }

    images(){
        cy.get(IMAGES.Dandrois).should('be.visible')
        cy.get(IMAGES.Russian_illustrator).should('be.visible')
        cy.get(IMAGES.Bugdroid).should('be.visible')
    }


    texts(){
        cy.get(TEXTS.Android_mascot_history).should('have.text', Cypress.env('Texts').android_history)
        cy.get(TEXTS.The_first_version_pt1).should('have.text', Cypress.env('Texts').first_versionpt1)
        cy.get(TEXTS.The_first_version_pt2).should('have.text', Cypress.env('Texts').first_versionpt2)
        cy.get(TEXTS.A_new_mascot_appears_pt1).should('have.text', Cypress.env('Texts').new_mascotpt1)
        cy.get(TEXTS.A_new_mascot_appears_pt2).should('have.text', Cypress.env('Texts').new_mascotpt2)
        cy.get(TEXTS.A_new_mascot_appears_pt3).should('have.text', Cypress.env('Texts').new_mascotpt3)
        cy.get(TEXTS.Table_text).should('have.text', Cypress.env('Texts').LearnMoreTable)
        cy.get(TEXTS.Table_text2).should('have.text', Cypress.env('Texts').LearnMoreTable2)
        cy.get(TEXTS.Table_text3).should('have.text', Cypress.env('Texts').LearnMoreTable3)
        cy.get(TEXTS.Last_text).should('have.text', Cypress.env('Texts').LastText)
        cy.get(TEXTS.Bugdroid).should('have.text', Cypress.env('Texts').Different_Word2)
        cy.get(TEXTS.Google).should('have.text', Cypress.env('Texts').Different_Word3)
        cy.get(TEXTS.Footer).should('have.text', Cypress.env('Texts').FooterRodape)

    }

    titles_subtitles(){
        cy.get(TITLES_SUBTITLES.page_title).should('have.text', Cypress.env('Titles_Subtitles').webpage_title)
        cy.get(TITLES_SUBTITLES.page_subtitle).should('have.text', Cypress.env('Titles_Subtitles').webpage_subtitle)
        cy.get(TITLES_SUBTITLES.article_title).should('have.text', Cypress.env('Titles_Subtitles').story_title)
        cy.get(TITLES_SUBTITLES.article_subtitle).should('have.text', Cypress.env('Titles_Subtitles').story_subtitle)
        cy.get(TITLES_SUBTITLES.article_subtitle1).should('have.text', Cypress.env('Titles_Subtitles').story_subtitle1)
        cy.get(TITLES_SUBTITLES.aside_subtitle).should('have.text', Cypress.env('Titles_Subtitles').list_subtitle)
    }

    candytable(){

        cy.get(CANDYTABLE.Cupcake).should('have.text', Cypress.env('Candy_Table').Cupcake)
        .contains('1.5').should('exist')

        cy.get(CANDYTABLE.Donut).should('have.text', Cypress.env('Candy_Table').Donut)
        .contains('1.6').should('exist')

        cy.get(CANDYTABLE.Eclair).should('have.text', Cypress.env('Candy_Table').Eclair)
        .contains('3.0').should('exist')

        cy.get(CANDYTABLE.Frovo).should('have.text', Cypress.env('Candy_Table').Frovo)
        .contains('2.2').should('exist')

        cy.get(CANDYTABLE.Gingerbread).should('have.text', Cypress.env('Candy_Table').Gingerbread)
        .contains('2.3').should('exist')

        cy.get(CANDYTABLE.Honeycomb).should('have.text', Cypress.env('Candy_Table').Honeycomb)
        .contains('3.0').should('exist')

        cy.get(CANDYTABLE.IceCreamSandwich).should('have.text', Cypress.env('Candy_Table').IceCreamSandwich)
        .contains('4.0').should('exist')

        cy.get(CANDYTABLE.JellyBean).should('have.text', Cypress.env('Candy_Table').JellyBean)
        .contains('4.1').should('exist')

        cy.get(CANDYTABLE.KitKat).should('have.text', Cypress.env('Candy_Table').KitKat)
        .contains('4.4').should('exist')

        cy.get(CANDYTABLE.Lolipop).should('have.text', Cypress.env('Candy_Table').Lolipop)
        .contains('5.0').should('exist')

        cy.get(CANDYTABLE.Marshmallow).should('have.text', Cypress.env('Candy_Table').Marshmallow)
        .contains('6.0').should('exist')

        cy.get(CANDYTABLE.Nougat).should('have.text', Cypress.env('Candy_Table').Nougat)
        .contains('7.0').should('exist')

        cy.get(CANDYTABLE.Oreo).should('have.text', Cypress.env('Candy_Table').Oreo)
        .contains('8.0').should('exist')

        cy.get(CANDYTABLE.Pie).should('have.text', Cypress.env('Candy_Table').Pie)
        .contains('9.0').should('exist')
    }


}

export default new validate()