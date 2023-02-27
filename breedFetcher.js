const request = require('request');

const commandLineArgs = process.argv.splice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + commandLineArgs[0], (error, response, body) => {
  if (error !== null) {
    console.log('error:', error); // Print the error if one occurred
  } else {
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the page.
    //console.log(typeof body)
    
    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    if (data.length === 0) {
      console.log(`Breed not found: ${commandLineArgs[0]}`);
    } else {
      console.log(data[0].description);
    }
  }
});
