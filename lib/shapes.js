class Shape {
    constructor(title, titleColor, shape, shapeColor) {
      this.title = title;
      this.titleColor = titleColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
}

class Square extends Shape{
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="80" y="30" width="140" height="140" fill="${this.shapeColor}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>
        
        </svg>`
    }
}

class Circle extends Shape{
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>
        
        </svg>`
    }
}


class Triangle extends Shape{
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,15 45,185 255,185" fill="${this.shapeColor}" />
        
        <text x="150" y="165" font-size="60" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>
        
        </svg>`
    }
}


module.exports = {Square, Circle, Triangle};