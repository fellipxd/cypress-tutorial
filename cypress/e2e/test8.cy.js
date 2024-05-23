// ui_interactions_spec.js
describe('UI Interactions Tests', () => {
    beforeEach(() => {
      cy.visit('index.html');
    });
  
    it('Performs drag and drop interaction', () => {
      // Perform drag and drop action
      cy.get('#dragElement').trigger('dragstart');
      cy.get('#hoverElement').trigger('drop');
  
      // Assert the dropped text
      cy.get('#hoverElement').should('contain', 'Dragged');
    });
  
    it('Performs mouse hover interaction', () => {
      // Perform mouse hover action
      cy.get('#hoverElement').trigger('mouseover');
  
      // Assert the hover effect
      cy.get('#hoverElement').should('have.css', 'background-color', 'rgb(0, 0, 255)');
    });
  
    it('Performs double-click interaction', () => {
      // Perform double-click action
      cy.get('#doubleClickButton').dblclick();
  
      // Assert the alert message
      cy.on('window:alert', (message) => {
        expect(message).to.equal('Button double-clicked');
      });
    });
  
    it('Performs keyboard shortcut interaction', () => {
      // Perform keyboard shortcut action
      cy.get('body').type('{ctrl}c');
  
      // Assert the alert message
      cy.on('window:alert', (message) => {
        expect(message).to.equal('Ctrl+C pressed');
      });
    });
  });
  