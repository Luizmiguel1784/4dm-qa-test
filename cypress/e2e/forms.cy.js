describe('Formulario', ()=>{

	it('teste', ()=> {
 
        cy.login('4DM@gmail.com', '4DM')
        cy.contains('button','Formulários')
        .should('be.visible')
        .click('')
        cy.contains('h1','Consultoria')
        .should('be.visible')
        cy.get('#name').type("Luiz Miguel")
        cy.get('#email').type("Luiz@gmail.com")
        cy.get('#phone').type("11915882337")
        cy.get('#consultancyType').select("In Company")
        cy.contains('label', 'Pessoa Jurídica').click().find('input[type=radio]').should('be.checked')
        cy.contains('label','Pessoa Física').find('input[type=radio]').should('be.not.checked')
        cy.contains('label', 'Instagram').click()
        cy.contains('label', 'Udemy').click()
        cy.contains('label', 'LinkedIn').click()
        cy.get('#document').type("10033051488")
        cy.get('#details').type("Muito foda")
        cy.get('#technologies').type("Java")
        cy.contains('label', 'Li e aceito os termos de uso *').click()
        cy.contains('button', 'Enviar Documento').click()


    })
})