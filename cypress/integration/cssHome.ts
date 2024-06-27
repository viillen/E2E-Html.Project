/// <reference types="cypress" />
import {MENU, TEXTS, TITLES_SUBTITLES, LINKS, LAYOUT} from "../support/pages/elements";

class csshome {

    CssMenu(){

        cy.get(MENU.Home).contains('Home')
        .should('have.css', 'color', 'rgb(131, 225, 173)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')
    
        cy.get(MENU.News).contains('Noticias')
        .should('have.css', 'color', 'rgb(131, 225, 173)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')
    
        cy.get(MENU.Curiosities).contains('Curiosidades')
        .should('have.css', 'color', 'rgb(131, 225, 173)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')
    
        cy.get(MENU.Contact_us).contains('Fale Conosco')
        .should('have.css', 'color', 'rgb(131, 225, 173)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')
    }

    CssTexts(){

        cy.get(TEXTS.Android_mascot_history)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.The_first_version_pt1)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.The_first_version_pt2)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.A_new_mascot_appears_pt1)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.A_new_mascot_appears_pt2)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.A_new_mascot_appears_pt3)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.AndroidQ)
        .should('have.css', 'color', 'rgb(26, 92, 55)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.Table_text)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.Table_text2)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.Table_text3)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.Last_text)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.Bugdroid)
        .should('have.css', 'color', 'rgb(26, 92, 55)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.Google)
        .should('have.css', 'color', 'rgb(26, 92, 55)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.Footer)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '12.8px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')
        .should('have.css', 'text-align', 'center')
    }

    CssTitles_Subtitles(){

        cy.get(TITLES_SUBTITLES.page_title)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '48px')
        .should('have.css', 'font-family', '"Bebas Neue", sans-serif')

        cy.get(TITLES_SUBTITLES.page_subtitle)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '19.2px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TITLES_SUBTITLES.article_title)
        .should('have.css', 'color', 'rgb(6, 61, 30)')
        .should('have.css', 'font-size', '28.8px')
        .should('have.css', 'font-family', 'android, sans-serif')

        cy.get(TITLES_SUBTITLES.article_subtitle)
        .should('have.css', 'color', 'rgb(26, 92, 55)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'font-size', '20.8px')
        .should('have.css', 'font-family', 'android, sans-serif')

        cy.get(TITLES_SUBTITLES.article_subtitle1)
        .should('have.css', 'color', 'rgb(26, 92, 55)')
        .should('have.css', 'font-size', '20.8px')
        .should('have.css', 'font-family', 'android, sans-serif')

        cy.get(TITLES_SUBTITLES.aside_subtitle)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '18.72px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')
    }

    linksCSS(){

        cy.get(LINKS.Dan_Morrill).contains('Dan Morrill')
        .should('have.css', 'color', 'rgb(6, 61, 30)')
        .should('have.css', 'background-color', 'rgb(131, 225, 173)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(LINKS.Inkscape).contains('Inkscape')
        .should('have.css', 'color', 'rgb(6, 61, 30)')
        .should('have.css', 'background-color', 'rgb(131, 225, 173)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(LINKS.Irina_Blok).contains('Irina Blok')
        .should('have.css', 'color', 'rgb(6, 61, 30)')
        .should('have.css', 'background-color', 'rgb(131, 225, 173)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(LINKS.Android_History).contains('Android History')
        .should('have.css', 'color', 'rgb(6, 61, 30)')
        .should('have.css', 'background-color', 'rgb(131, 225, 173)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(LINKS.GustavoGuanabara).contains('Gustavo Guanabara')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'font-size', '12.8px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(LINKS.CursoEmVideo).contains('CursoemVideo')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        .should('have.css', 'font-size', '12.8px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')
    }

    LayoutWebPage(){

        cy.get(LAYOUT.Header)
        .should('have.css', 'background-image', 'linear-gradient(rgb(47, 168, 102), rgb(6, 61, 30))')
        .should('have.css', 'margin', '0px')

        cy.get(LAYOUT.MenuBar)
        .should('have.css', 'background-color', 'rgb(6, 61, 30)')
        .should('have.css', 'padding', '10px')
        .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.337) 0px 7px 7px 0px')
        .should('have.css', 'margin', '0px')

        cy.get(LAYOUT.Body)
        .should('have.css', 'background-color', 'rgb(235, 235, 214)')
        .should('have.css', 'padding', '0px')
        .should('have.css', 'margin', '0px')

        cy.get(LAYOUT.main)
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        .should('have.css', 'min-width', '400px')
        .should('have.css', 'max-width', '800px')
        .should('have.css', 'margin', '0px 80px 30px')
        .should('have.css', 'margin-bottom', '30px')
        .should('have.css', 'padding', '20px')
        .should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.506) 0px 0px 10px 0px')
        .should('have.css', 'border-bottom-left-radius', '10px')
        .should('have.css', 'border-bottom-right-radius', '10px')

        cy.get(LAYOUT.VideoBar)
        .should('have.css', 'background-color', 'rgb(6, 61, 30)')
        .should('have.css', 'margin', '0px 20px 30px')
        .should('have.css', 'padding', '20px 20px 431.195px')
        .should('have.css', 'padding-bottom', '431.195px')
        .should('have.css', 'position', 'relative')

        cy.get(LAYOUT.TableTitle)
        .should('have.css', 'background-color', 'rgb(26, 92, 55)')
        .should('have.css', 'padding', '5px')
        .should('have.css', 'margin', '-10px -10px 0px')

        cy.get(LAYOUT.Footer)
        .should('have.css', 'background-color', 'rgb(6, 61, 30)')
        .should('have.css', 'padding', '5px')
        .should('have.css', 'position', 'static')
        .should('have.css', 'margin', '0px')
        
    }


}

export default new csshome()