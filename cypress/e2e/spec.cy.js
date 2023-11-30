describe('template spec', () => {
  it('read json file and navigate to url from the file', () => {
    cy.readFile('cypress/fixtures/publicainf.json').then(content =>{  
        cy.wrap(content).as("publicainf")
        
    })
    cy.get("@publicainf").then(publisContent => {
      cy.log(publisContent["url"])
      cy.visit(publisContent["url"])
      cy.get('#email').type(publisContent["email"])
      cy.get('#pass').type(publisContent["senha"])
      cy.get('.btn-orange').click()
      cy.get('.books-edition > .btn').click()
      cy.get('#title').type(publisContent["titulo"])
      cy.get('#author').type(publisContent["autor"])
      cy.get('.btn-next').click() 
      cy.get('.change-cat-age-group > .label-option > .btn').click()
      cy.get('#book_category_update').select('3')
      cy.get('#age_group_update').select('4')
      cy.get('.modal-cat-age-group > .modal-content > form > :nth-child(3) > .btn').click({force:true})
      cy.get('.add-page').click()
      cy.wait(3000)
      cy.get('.jqte_editor').type(publisContent["pagina1"])
      cy.get('.add-page').click()
      cy.wait(3000)
      cy.get('.jqte_editor').type(publisContent["pagina2"])
      cy.get('.add-page').click()
      cy.wait(3000)
      cy.get('.jqte_editor').type(publisContent["pagina3"])
      cy.get('.add-page').click()
      cy.wait(3000)
      cy.get('.jqte_editor').type(publisContent["pagina4"])
      cy.get('.btn-green').click()
      cy.get('.tools > .btn-blue').click({force:true})
      cy.get(':nth-child(1) > .custom-radio-buttons > :nth-child(3) > label').click()
      cy.get('#book_category3').check({force:true});
      cy.get(':nth-child(2) > .custom-radio-buttons > :nth-child(5) > label').click()
      cy.get('#age-group4').check({force: true});
      cy.get('.modal-medium > .modal-content > form > :nth-child(3) > .btn').click()
      cy.get('.btn-download-book').click()
      
    })
  })
})
