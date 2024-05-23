describe('Error Handling', () => {
    it('Displays error message for invalid input', () => {
      // Simulate invalid input by entering incorrect data
      cy.get('#inputField').type('invalid data');
  
      // Trigger action that may result in an error
      cy.get('#submitButton').click();
  
      // Verify that the error message is displayed
      cy.get('.error-message').should('be.visible'); // Adjust selector as needed
    });
  });

  
  describe('Error Handling', () => {
    it('Logs error message to console', () => {
      // Spy on console log messages
      cy.window().then((win) => {
        cy.spy(win.console, 'error').as('consoleError');
      });
  
      // Trigger action that may result in an error
      cy.get('#actionButton').click();
  
      // Wait for the error to be logged
      cy.get('@consoleError').should('be.calledWithMatch', 'Error occurred'); // Adjust the expected error message as needed
    });
  });

  





  describe('Error Handling', () => {
    it('Gracefully handles unexpected errors', () => {
      // Simulate unexpected error condition
      cy.intercept('/api/data', (req) => {
        req.replyWithError('Internal Server Error');
      });
  
      // Trigger action that may result in an unexpected error
      cy.get('#fetchDataButton').click();
  
      // Verify that the application gracefully handles the error
      cy.get('.error-message').should('contain', 'An unexpected error occurred. Please try again later.'); // Adjust error message as needed
    });
  });

  






  describe('Sensitive Data Exposure', () => {
    it('Ensures sensitive data is not exposed in logs or error messages', () => {
      // Trigger an action that may result in an error (e.g., logging in with incorrect credentials)
      cy.get('#loginButton').click();
  
      // Verify that sensitive data such as passwords is not exposed in logs or error messages
      cy.get('.error-message').should('not.contain', 'Password'); // Adjust selector as needed
    });
  });
  