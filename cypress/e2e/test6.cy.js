// dynamic_content_spec.js
describe('Dynamic Content', () => {
    beforeEach(() => {
      cy.visit('index.html');
    });
  
    it('Displays dynamic content when button is clicked', () => {
      // Click the button to toggle content
      cy.get('#toggleButton').click();
  
      // Assert that the paragraph element is visible
      cy.get('#contentContainer p').should('be.visible');
    });
  
    it('Hides dynamic content when button is clicked again', () => {
      // Click the button to toggle content
      cy.get('#toggleButton').click();
  
      // Click the button again to hide content
      cy.get('#toggleButton').click();
  
      // Assert that the paragraph element is not visible
      cy.get('#contentContainer p').should('not.exist');
    });
  });
  