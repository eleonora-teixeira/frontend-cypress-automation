/// <reference types="cypress" />

import map from '../support/pages/ondeUsar'

// arquivo de spec da funcionalidade a ser testada, que importa o page dessa funcionalidade, para assim consumir
// os métodos desse page, havendo uma abstração maior entre as responsabilidades

describe('Navegar à tela seção Pra Você, clicar em Onde usar meu cartão VR e abrir o mapa do Google ', () => {
    it('Acessar mapa onde usar meu cartão VR', () => {
        map.acessarPraVoce()
        map.clickButtonOndeUsarMeuCartao()
        map.verificarMapagoGoogle()
    });
});