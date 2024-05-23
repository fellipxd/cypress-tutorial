describe('File Upload Functionality', () => {
    beforeEach(() => {
      cy.visit('/upload'); // Navigate to the upload page
    });
  
    it('Uploads a file and verifies processing', () => {
      // Upload file
      const fileName = 'test-file.txt'; // Replace with the name of your test file
      cy.fixture(fileName).then((fileContent) => {
        cy.get('input[type="file"]').attachFile({
          fileContent: fileContent.toString(),
          fileName: fileName,
          mimeType: 'text/plain'
        });
      });
  
      // Verify processing
      cy.get('.upload-success-message').should('be.visible'); // Adjust selector as needed
      cy.get('.processed-file').should('contain', fileName); // Verify that the uploaded file is processed correctly
    });
  });
  


  describe('File Download Functionality', () => {
    it('Downloads a file and verifies content', () => {
      // Trigger file download
      cy.get('.download-button').click(); // Adjust selector as needed
  
      // Wait for the file to be downloaded
      cy.wait(5000); // Adjust wait time as needed
  
      // Read and verify file content
      cy.readFile('downloaded-file.txt').then((fileContent) => {
        expect(fileContent).to.include('Expected content'); // Verify that the downloaded file content is as expected
      });
    });
  });
  