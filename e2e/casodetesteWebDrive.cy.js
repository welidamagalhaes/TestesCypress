///<reference types="cypress"/>
describe("Casos de teste da página webdriveruniversity", ()=>{
    it('visitando página webdriveruniversity', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })


    //casos de testes com dropdow menu
    it('testando valores caixa de opções', ()=>{ //ver se o elemento é select, input, div, etc
        cy.get('#dropdowm-menu-1').select('Python') //pegar os valores no select
        cy.get('#dropdowm-menu-2').select('TestNG')
        cy.get('#dropdowm-menu-3').select('JavaScript')
    })

    it('Vendo visibilidade', ()=>{ 
        cy.get('#dropdowm-menu-1').should('be.visible');
        cy.get('#dropdowm-menu-2').should('be.visible');
        cy.get('#dropdowm-menu-3').should('be.visible');
    })

    
    //casos de testes no checkboxes
    it('testando valores caixa de opções', ()=>{ //ver se o elemento é select, input, div, etc
        cy.get('[type="checkbox"]').check('option-2') //acha o checkbox dentro do código e da um check usando o value (diferente do select que é o valor)
        cy.get('[type="checkbox"]').uncheck('option-2').should("not.be.checked") // desmarcando opção que foi dada check e vendo se foi realmente desmarcada
        cy.get('[type="checkbox"]').check('option-3')
    })  

    //casos de testes no radio button

        it('testando clique nos botões', ()=>{ 
            cy.get('[type="radio"]').check('orange') 
            cy.get('[type="radio"]').check('purple').should("be.checked")  
            cy.get("input[value=blue]").click(); //outra forma de clicar no radio
    })

        //casos de testes no select e disable

        it('testando check e select', ()=>{ 
            cy.get('[type="radio"]').check('lettuce')
            cy.get('[type="radio"]').check('pumpkin').should("be.checked") //dando check e checando se funcionau
            cy.get('#fruit-selects').select('Apple')

    })


    
}) 