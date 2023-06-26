const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter up to 3 characters.',
      name: 'logoTitle',
    },
    {
      type: 'input',
      message: 'What is the color of the TITLE?',
      name: 'titleColor',
    },
    {
      type: 'list',
      message: 'Please select a shape for the logo.',
      name: 'userShape',
      choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        message: 'What is the color of the SHAPE?',
        name: 'shapeColor',
      },
  ])
  .then((response) => {

    switch(response.userShape){
        case 'Square':
            console.log('square is true');
            break;
        case 'Circle':
            console.log('circle is true');

            break;
        case 'Triangle':
            console.log('triangle is true');

    }

  });
    

    

  
   
    

    
 