describe('Login Authentication Process', () => {
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('https://staging.shelflife.field.supply/login', {failOnStatusCode: false}); // Replace '/login' with the actual login page URL
    });
  
    it('Logs in with valid credentials', () => {
      // Enter valid username and password
      cy.get('input[type="username"]').type('yourusername');
      cy.get('input[name="password"]').type('yourpassword');
  
      // Submit the login form
      cy.get('form').submit();
  
      // Assert that the user is redirected to the dashboard or a logged-in state
      cy.url().should('include', '/dashboard'); // Adjust '/dashboard' to match the expected URL after successful login
    });
  
    it('Displays error message with invalid credentials', () => {
      // Enter invalid username and password
      cy.get('input[name="username"]').type('invalidusername');
      cy.get('input[name="password"]').type('invalidpassword');
  
      // Submit the login form
      cy.get('form').submit();
  
      // Assert that an error message is displayed
      cy.get('.error-message').should('be.visible'); // Adjust the selector to match the error message element in your application
    });
  });
  