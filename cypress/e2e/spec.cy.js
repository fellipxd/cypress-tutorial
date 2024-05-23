describe('Login process', () => {
  before(() => {
    // visit the login page before each test
    cy.visit('https://staging.shelflife.field.supply/login', {failOnStatusCode:false});
  })
  it('Log in with valid credentials', () => {
    // fill in the input fields
    cy.get('input[type="text"]').type('qa-philip-globsl-planner-abuja');
    cy.get('input[type="password"]').type('stream-type-sound');

    //submit form 
    cy.get('button.vs-button.vs-button--fill-full.vs-button--color-brand.vs-button--shape-pill.vs-button--size-large').click();
    cy.wait(10000)
    // check user is redirected to the home page
    
    cy.url().should('eq', 'https://staging.shelflife.field.supply/');

  })
})