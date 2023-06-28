const inquirer = require('inquirer');
const iMaxLength = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const {Square, Circle, Triangle} = require('./lib/shapes.js');

const square = new Square();
const circle = new Circle();
const triangle = new Triangle();

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
            const squareSvg = new Square(response.logoTitle, response.titleColor, response.userShape, response.shapeColor)
            let squareSvgRes = squareSvg.render();
            fs.writeFile(`./examples/${response.logoTitle}.svg`, squareSvgRes, (err) =>
                err ? console.error(err) : console.log('Generated logo.svg'))
            break;
        case 'Circle':
            console.log('circle is true');
            const circleSvg = new Circle(response.logoTitle, response.titleColor, response.userShape, response.shapeColor)
            let circleSvgRes = circleSvg.render();
            fs.writeFile(`./examples/${response.logoTitle}.svg`, circleSvgRes, (err) =>
                err ? console.error(err) : console.log('Generated logo.svg'))
            break;
        case 'Triangle':
            console.log('triangle is true');
            const triangleSvg = new Triangle(response.logoTitle, response.titleColor, response.userShape, response.shapeColor)
            let triangleSvgRes = triangleSvg.render();
            fs.writeFile(`./examples/${response.logoTitle}.svg`, triangleSvgRes, (err) =>
                err ? console.error(err) : console.log('Generated logo.svg'))
    }
  });
    

    

  
   
    

    
 