/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// import { input } from '@inquirer/prompts';
// var qr = require('qr-image');


// const url = await input({ message: 'Enter your the URL you want us to use to create your QR Code.' });
// var qr_svg = qr.image( `${url}`, { type: 'svg' });


// Lecture answer
import inquirer from "inquirer";
// var qr = require('qr-image');
import qr from "qr-image";
import fs, { writeFile }  from "fs";


inquirer
  .prompt([
    /* Pass your questions in here */
    {message : "Enter your URL",
        name : "url"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log('answers');
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('my_qr_image.png'));

    writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved to url.txt");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });