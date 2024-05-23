describe('Page Tests', () => {
    beforeEach(() => {
      cy.visit('/page-url'); // Replace '/page-url' with the URL of the page you are testing
    });
  
    it('Displays hero section', () => {
      // Verify that the hero section is visible
      cy.get('.hero-section').should('be.visible');
    });
  
    it('Displays carousel section', () => {
      // Verify that the carousel section is visible
      cy.get('.carousel-section').should('be.visible');
  
      // Verify that the carousel is not empty
      cy.get('.carousel-item').should('exist'); // Adjust selector as needed
    });
  
    it('Displays and submits the form', () => {
      // Verify that the form is visible
      cy.get('form').should('be.visible');
  
      // Fill out the form fields
      cy.get('#nameInput').type('John Doe', {delay});
      cy.get('#emailInput').type('john@example.com');
      // Add more fields if needed
  
      // Submit the form
      cy.get('form').submit();
  
      // Optionally, verify that the form submission was successful
      cy.url().should('include', '/thank-you'); // Adjust URL as needed
      cy.get('.confirmation-message').should('be.visible');
    });
  });
  