describe('Teste', () => {
  it('Deve conseguir logar', ()=>{
    cy.intercept('POST', 'http://localhost:54321/auth/v1/token?grant_type=password').as('authenticate') 
    cy.visit('http://localhost:3000');
    cy.get('[name=email]').type('leonardomattioli00@gmail.com');
    cy.get('[name=password]').type('123456');
    cy.get('[id=signin]').click();
    cy.wait('@authenticate').its('response.statusCode').should('eq', 200)
    //cy.wait(3000);
    cy.intercept('GET', 'http://localhost:54321/rest/v1/todos?select=*').as('todos')
    cy.visit('http://localhost:3000/client');
    cy.wait('@todos').its('response.statusCode').should('eq', 200)
    cy.get('[id=vai]').should('have.text', '[]');
  })
})