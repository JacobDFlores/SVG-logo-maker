const { Square, Circle, Triangle} = require('../shapes');


// A testing suite for Shapes is created.
describe('Shapes', () => {
  // A test is created to check that square.render correctly builds the svg code.
  describe('square.render()', () => {
    it('should take 4 responses from the user, build and return the svg code using the user responses', () => {
      const userResponse = {
        title: "FUR",
        titleColor: "white",
        shape: "Square",
        shapeColor: "orange",
      }

      const expectedOutput = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="80" y="30" width="140" height="140" fill="${userResponse.shapeColor}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userResponse.titleColor}">${userResponse.title}</text>
        
        </svg>`

      const square = new Square(userResponse.title, userResponse.titleColor, userResponse.shape, userResponse.shapeColor);
      expect(square.render()).toEqual(expectedOutput);
    });
  });

  describe('circle.render()', () => {
    it('should take 4 responses from the user, build and return the svg code using the user responses', () => {
      const userResponse = {
        title: "FUR",
        titleColor: "white",
        shape: "Circle",
        shapeColor: "orange",
      }

      const expectedOutput = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${userResponse.shapeColor}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userResponse.titleColor}">${userResponse.title}</text>
        
        </svg>`

      const circle = new Circle(userResponse.title, userResponse.titleColor, userResponse.shape, userResponse.shapeColor);
      expect(circle.render()).toEqual(expectedOutput);
    });
  });

  describe('triangle.render()', () => {
    it('should take 4 responses from the user, build and return the svg code using the user responses', () => {
      const userResponse = {
        title: "FUR",
        titleColor: "white",
        shape: "Triangle",
        shapeColor: "orange",
      }

      const expectedOutput = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,15 45,185 255,185" fill="${userResponse.shapeColor}" />
        
        <text x="150" y="165" font-size="60" text-anchor="middle" fill="${userResponse.titleColor}">${userResponse.title}</text>
        
        </svg>`

      const triangle = new Triangle(userResponse.title, userResponse.titleColor, userResponse.shape, userResponse.shapeColor);
      expect(triangle.render()).toEqual(expectedOutput);
    });
  });
});