describe('Teste', () => {
  it('Deve conseguir dar signup', () => {
    cy.visit('http://localhost:3000');
    cy.get('[name=email]').type('troll@gmail');
    cy.get('[name=password]').type('troll@gmail');
    cy.get('[id=signup]').click();
  })

  it('Deve conseguir logar', ()=>{
    cy.visit('http://localhost:3000');
    cy.get('[name=email]').type('leonardomattioli00@gmail.com');
    cy.get('[name=password]').type('123456');
    cy.get('[id=signin]').click();
    cy.visit('http://localhost:3000/client');
  })
})