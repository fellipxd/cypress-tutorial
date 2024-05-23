describe('Navigation to New Tab', () => {
    it('Opens a new tab and verifies its content', () => {
      // Visit a page with a link that opens in a new tab
      cy.visit('/page-with-link');
  
      // Click the link that opens in a new tab
      cy.get('a[target="_blank"]').click();
  
      // Verify that a new tab has been opened
      cy.window().then((win) => {
        // Check the number of tabs before and after opening the link
        const initialTabCount = win.windowHandles.length;
        expect(initialTabCount).to.equal(2); // Assuming the initial tab count is 1
  
        // Switch to the new tab
        const newTabHandle = win.windowHandles[1];
        win.switchTo(newTabHandle);
  
        // Assert that the new tab's URL matches the expected URL
        cy.url().should('include', '/new-tab-content'); // Adjust the URL as needed
  
        // Assert on the content of the new tab
        cy.contains('New Tab Content').should('be.visible'); // Adjust the content as needed
      });
    });
  });
  