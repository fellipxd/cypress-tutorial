describe('Checkout Process', () => {
    beforeEach(() => {
      // Visit the checkout page before each test
      cy.visit('/checkout'); // Replace '/checkout' with the actual checkout page URL
    });
  
    it('Completes the checkout process successfully', () => {
      // Fill in shipping information
      cy.get('#shipping-name').type('John Doe');
      cy.get('#shipping-address').type('123 Main St');
      cy.get('#shipping-city').type('Anytown');
      cy.get('#shipping-zip').type('12345');
      cy.get('#shipping-country').select('United States');
  
      // Proceed to billing information
      cy.get('#next-shipping').click();
  
      // Fill in billing information
      cy.get('#billing-name').type('John Doe');
      cy.get('#billing-address').type('123 Main St');
      cy.get('#billing-city').type('Anytown');
      cy.get('#billing-zip').type('12345');
      cy.get('#billing-country').select('United States');
  
      // Proceed to payment information
      cy.get('#next-billing').click();
  
      // Fill in payment information
      cy.get('#card-number').type('4242424242424242');
      cy.get('#expiration').type('12/24');
      cy.get('#cvv').type('123');
  
      // Submit the order
      cy.get('#submit-order').click();
  
      // Assert that the order is successful
      cy.url().should('include', '/confirmation'); // Adjust '/confirmation' to match the expected URL after successful checkout
      cy.get('.confirmation-message').should('contain', 'Your order has been placed successfully.'); // Adjust the selector to match the confirmation message element
    });
  
    it('Displays error message with invalid payment information', () => {
      // Fill in shipping information
      // (similar steps as above)
  
      // Proceed to billing information
      // (similar steps as above)
  
      // Fill in billing information
      // (similar steps as above)
  
      // Proceed to payment information
      // (similar steps as above)
  
      // Fill in invalid payment information
      cy.get('#card-number').type('invalidcardnumber');
      cy.get('#expiration').type('12/24');
      cy.get('#cvv').type('123');
  
      // Submit the order
      cy.get('#submit-order').click();
  
      // Assert that an error message is displayed
      cy.get('.error-message').should('be.visible'); // Adjust the selector to match the error message element
    });
  });
  