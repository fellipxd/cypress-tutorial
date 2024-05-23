  describe('Mobile Viewport Test', () => {
    it('Checks for elements spilling out on a page in mobile view', () => {
      // Set viewport to simulate mobile device
      cy.viewport('iphone-6')
     
      // Visit the page you want to test
      cy.visit('https://staging.shelflife.field.supply/login', { failOnStatusCode: false })
  
      // Select the element you want to check for spilling out
      cy.get('.container').then((container) => {
        // Check if the container has overflow
        const computedStyles = window.getComputedStyle(container[0])
        const hasOverflow = computedStyles.overflow !== 'visible'
  
        // Assert if the container has overflow
        expect(hasOverflow).to.be.false
  
        // Check if any child elements are spilling out
        cy.get('.container > *').each((child) => {
          const childRect = child[0].getBoundingClientRect()
          const containerRect = container[0].getBoundingClientRect()
  
          // Assert if the child element is completely within the container
          expect(childRect.left).to.be.at.least(containerRect.left)
          expect(childRect.right).to.be.at.most(containerRect.right)
          expect(childRect.top).to.be.at.least(containerRect.top)
          expect(childRect.bottom).to.be.at.most(containerRect.bottom)
        })
      })
    })
  })
  