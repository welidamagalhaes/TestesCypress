describe("Casos de teste da página demo.automationtesting", ()=>{
    beforeEach('visitando página demo.automation', ()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')
    })

    it('Selecionando linguagem', ()=>{
        cy.get('.ng-pristine ng-untouched ng-invalid ng-invalid-required').click()
    })

    it('digitando e confirmando senha', ()=>{
        cy.get('#firstpassword').type('testedesenha123')
        cy.get('#secondpassword').type('testedesenha123')
    })

    
}) 