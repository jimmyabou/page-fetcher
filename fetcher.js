// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
const request = require('request');
const fs = require('fs');
request('http://www.example.edu/index.html', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`the file ./index.html is downloaded and saved to your ./index.html with ${body.length} bytes`);
  });
});
