const inquirer = require('inquirer');
const iMaxLength = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

const circleShape = new shapes.Circle;

inquirer.registerPrompt('maxlength-input', iMaxLength)
inquirer
  .prompt([
    {
      type: 'maxlength-input',
      message: 'Enter up to 3 characters.',
      name: 'logoTitle',
      maxLength: 3,
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
            let squareSvg = shape.Circle(response.logoTitle, response.titleColor, response.userShape, response.shapeColor).render();
            fs.writeFile('./examples/logo.svg', squareSvg, (err) =>
                err ? console.error(err) : console.log('Generated logo.svg'))
            break;
        case 'Circle':
            console.log('circle is true');
            let circleSvg = circleShape(response.logoTitle, response.titleColor, response.userShape, response.shapeColor).render();
            fs.writeFile('./examples/logo.svg', circleSvg, (err) =>
                err ? console.error(err) : console.log('Generated logo.svg'))
            break;
        case 'Triangle':
            console.log('triangle is true');
            let triangleSvg = shape.Circle(response.logoTitle, response.titleColor, response.userShape, response.shapeColor).render();
            fs.writeFile('./examples/logo.svg', triangleSvg, (err) =>
                err ? console.error(err) : console.log('Generated logo.svg'))
    }

  });
    

    

  
   
    

    
 