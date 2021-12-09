const el = require('./elements').ELEMENTS

//page com todas os métodos referente a funcionalidade "Onde usar meu cartão VR"
// esse acaba por  importar o arquivo elements, esse é quem armazena os identificadores
// de cada elemento que ocorrerá interação, para assim facilitar manutenção de código

class OndeAceita {

    acessarPraVoce () {
        cy.visit('/onde-aceita.htm')
    }

    clickButtonOndeUsarMeuCartao () {
        cy.get(el.ondeUsar).click()
    }

    verificarMapagoGoogle () {
        cy.get(el.mapa).should('be.visible')
    }
}

export default new OndeAceita()