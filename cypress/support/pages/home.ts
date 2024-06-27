/// <reference types="cypress" />
import{ IMAGES, MENU, TEXTS, TITLES_SUBTITLES, CANDYTABLE, VIDEO, LINKS} from "./elements";
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

    Iframe(){
        cy.get(VIDEO.Iframe).then($iframe => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).should('not.be.empty')
        }) 
    }

    linksCSS(){
        cy.get(LINKS.Dan_Morrill).contains('Dan Morrill').should('have.attr', 'href', 'https://androidcommunity.com/dan-morrill-shows-us-the-android-mascot-that-almost-was-20130103/')
        cy.get(LINKS.Inkscape).contains('Inkscape').should('have.attr', 'href', 'https://inkscape.org/pt-br/')
        cy.get(LINKS.Irina_Blok).contains('Irina Blok').should('have.attr', 'href', 'https://www.irinablok.com')
        cy.get(LINKS.Android_History).contains('Android History').should('have.attr', 'href', 'https://www.android.com/intl/en_uk/history/')
        cy.get(LINKS.GustavoGuanabara).contains('Gustavo Guanabara').should('have.attr', 'href', 'https://gustavoguanabara.github.io')
        cy.get(LINKS.CursoEmVideo).contains('CursoemVideo').should('have.attr', 'href', 'https://www.youtube.com/c/CursoemVídeo')
    }

    creator(){
    cy.get(LINKS.GustavoGuanabara).contains('Gustavo Guanabara').invoke('removeAttr', 'target').click()
    cy.origin('https://gustavoguanabara.github.io/', () => {
        cy.url().should('eq', 'https://gustavoguanabara.github.io/')
        cy.contains('Gustavo Guanabara').should('exist')
        cy.go('back')
        })
    }

    Inkscape(){
        cy.get('[data-cy="article_p2"]').within(() => {
            cy.contains('Inkscape').invoke('removeAttr', 'target').click()
            cy.origin('https://inkscape.org/pt-br/', () => {
                cy.url().should('eq', 'https://inkscape.org/pt-br/')
                cy.contains('Inkscape').should('exist')
                cy.go('back')
            })
        })
    }

    IrinaBlok(){
        cy.get(LINKS.Irina_Blok).contains('Irina Blok').invoke('removeAttr', 'target').click()
        cy.origin('https://www.irinablok.com/', () => {
            cy.url().should('eq', 'https://www.irinablok.com/')
            cy.contains('Irina Blok').should('exist')
            cy.go('back')
        })
    }

}

export default new validate()