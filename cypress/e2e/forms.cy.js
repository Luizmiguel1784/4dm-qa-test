describe("Formulario", () => {
  it("teste", () => {
   
   
    cy.login("4DM@gmail.com", "4DM");
    cy.contains("button", "Formulários").should("be.visible").click("");
    cy.contains("h1", "Consultoria").should("be.visible");
    cy.get("#name").type("Luiz Miguel");
    cy.get("#email").type("Luiz@gmail.com");
    cy.get("#phone").type("11915882337");
    cy.get("#consultancyType").select("In Company");
    cy.contains("label", "Pessoa Jurídica")
      .click()
      .find("input[type=radio]")
      .should("be.checked");
    cy.contains("label", "Pessoa Física")
      .find("input[type=radio]")
      .should("be.not.checked");
    const sociais = [
      "Instagram",
      "LinkedIn",
      "Udemy",
      "YouTube",
      "Indicação de Amigo",
    ];
    sociais.forEach((sociais) => {
      cy.contains("label", sociais)
        .find("input[type=checkbox]")
        .click()
        .should("be.checked");
    });

    cy.get('input[type="file"]').selectFile('./Cypress/fixtures/header.png', {force:true})
    cy.contains('span','header.png').should('be.visible')


    cy.get("#document").type("10033051488");
    cy.get("#details").type("Muito foda");

    const tecnologia = [
        "Java ",
        "Javascript ",
        "Git "
    ]
    tecnologia.forEach((tecnologia)=>{
        cy.get("#technologies").type(tecnologia + '{enter}')
    })

   // cy.get("#technologies").type("Java");
    cy.contains("label", "Li e aceito os termos de uso *").click();
    cy.contains("button", "Enviar formulário").click();

    cy.contains("button","Fechar").click();
  });
  it("testeEmBranco",()=>{
     cy.login("4DM@gmail.com", "4DM");
     cy.contains("button", "Formulários").should("be.visible").click("");
     cy.contains("button", "Enviar formulário").click();
     cy.contains('Digite nome e sobrenome').should("be.visible")
     cy.contains('Informe um email válido').should("be.visible")
     cy.contains('Você precisa aceitar os termos de uso').should("be.visible")


  })
});
