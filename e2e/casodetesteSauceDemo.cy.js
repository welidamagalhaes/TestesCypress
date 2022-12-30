///<reference types="cypress"/>
describe("Minha primeira suite de teste", ()=>{
    beforeEach(()=>{ //antes de cada it executa esse bloco (para evitar repetições em cada teste)
        cy.visit('https://www.saucedemo.com/') //entra pagina
        cy.get('#user-name').type('standard_user') //login
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
    

    it('validar logo visivel', ()=>{
        cy.get(".app_logo").should("be.visible")

    })


    it.only('validar adição produto no carrinho', ()=>{ //colocando .only executa apenas esse it (caso de teste)
        cy.get(".app_logo").should("be.visible")
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')
    })

    xit('abrir carrinho', ()=> {  //xit não executa esse caso de teste
        cy.get('#shopping_cart_container').click()
    })
}) 
