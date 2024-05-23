describe('Login API', () => {
    it('Logs in with valid credentials', () => {
      // Define the login endpoint URL
      const apiUrl = 'https://example.com/api/login'; // Replace with the actual API endpoint URL
  
      // Define the login credentials 
      const credentials = {
        username: 'yourusername',
        password: 'yourpassword'
      };
  
      // Send a POST request to the login endpoint with the credentials
      cy.request('POST', apiUrl, credentials).then((response) => {
        // Assert that the response status code is 200 (or any other expected status code)
        expect(response.status).to.eq(200);
  
        // Assert that the response body contains an authentication token or other expected data
        expect(response.body).to.have.property('token');
        // You can add more assertions to validate other aspects of the response body as needed
      });
    });
  
    it('Returns error with invalid credentials', () => {
      // Define the login endpoint URL
      const apiUrl = 'https://example.com/api/login'; // Replace with the actual API endpoint URL
  
      // Define invalid credentials
      const invalidCredentials = {
        username: 'invalidusername',
        password: 'invalidpassword'
      };
  
      // Send a POST request to the login endpoint with the invalid credentials
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: invalidCredentials,
        failOnStatusCode: false // Prevent Cypress from failing the test due to non-2xx response status
      }).then((response) => {
        // Assert that the response status code is 401 Unauthorized or another expected status code
        expect(response.status).to.eq(401);
  
        // Assert that the response body contains an error message or other expected data
        expect(response.body).to.have.property('error');
        // You can add more assertions to validate other aspects of the response body as needed
      });
    });
  });
  