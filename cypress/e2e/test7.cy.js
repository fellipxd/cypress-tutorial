// api_spec.js
describe('API Endpoint Tests', () => {
    it('Returns list of users with correct status code and response body', () => {
      cy.request('/api/users')
        .then((response) => {
          // Assert the status code is 200 OK
          expect(response.status).to.equal(200);
  
          // Assert the response body contains an array of users
          expect(response.body).to.be.an('array');
          expect(response.body).to.have.lengthOf(2); // Assuming two users are returned
  
          // Assert the response body contains expected user properties
          expect(response.body[0]).to.have.property('id');
          expect(response.body[0]).to.have.property('name');
          expect(response.body[0]).to.have.property('email');
  
          // Assert the response headers
          expect(response.headers).to.have.property('content-type');
          expect(response.headers['content-type']).to.include('application/json');
        });
    });
  
    it('Returns error for non-existent endpoint', () => {
      cy.request({
        url: '/api/non-existent-endpoint',
        failOnStatusCode: false // Prevent Cypress from failing the test due to non-2xx response status
      }).then((response) => {
        // Assert the status code is 404 Not Found
        expect(response.status).to.equal(404);
  
        // Assert the response body contains an error message
        expect(response.body).to.have.property('error');
      });
    });
  });

  








  describe('Integration with Third-Party API', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/third-party-data', { fixture: 'third-party-data.json' }).as('thirdPartyData');
      cy.visit('/dashboard'); // Visit the page that fetches data from the third-party API
    });
  
    it('Fetches and displays data from third-party API', () => {
      // Verify that the data fetched from the third-party API is displayed correctly on the dashboard
      cy.wait('@thirdPartyData').then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
        cy.get('.data-display').should('contain', 'Third-Party Data'); // Adjust selector as needed
      });
    });
  });

  







  describe('Integration with External Service', () => {
    it('Sends data to external service and handles response', () => {
      // Mock the external service response
      cy.intercept('POST', '/api/send-data', { statusCode: 200, body: 'Success' }).as('externalService');
  
      // Simulate user interaction to send data to the external service
      cy.visit('/send-data-page'); // Visit the page to send data
      cy.get('#sendDataButton').click();
  
      // Verify that the application handles the external service response correctly
      cy.wait('@externalService').then((interception) => {
        expect(interception.response.body).to.equal('Success');
        cy.get('.success-message').should('be.visible'); // Verify success message is displayed
      });
    });
  });
  