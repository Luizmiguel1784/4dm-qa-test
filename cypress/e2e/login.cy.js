describe('Login', () => {
  it('Login invalido', () => {
    cy.visit('localhost:3000')
    cy.get('#email').type('email@email.com')
    cy.get('#password').type('123456')
    cy.contains('button','Entrar').click()
    cy.contains('Acesso negado! Tente novamente.')

 } )

  //     it('Login Valido', () => {
  //   cy.visit('localhost:3000')
  //   cy.get('#email').type('4DM@gmail.com')
  //   cy.get('#password').type('4DM')
  //   cy.contains('button','Entrar').click()
  //   cy.contains('Dashboard')

  // })

  it('Campos em branco', () => {
    cy.visit('localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password')
    cy.contains('button','Entrar').click('')
    cy.contains('Você precisa de uma senha para entrar! 🔒')
  })

  it('Senha incorreta', () =>{
    cy.visit('localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('123')
    cy.contains('button','Entrar').click('')
    cy.contains('Acesso negado! Tente novamente.')
  })

}


)