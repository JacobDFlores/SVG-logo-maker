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

        <rect cx="150" cy="100" fill=${shapeColor} />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${titleColor}>${title}</text>
        
        </svg>`
    }
}

class Circle extends Shape{
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill=${shapeColor} />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${titleColor}>${title}</text>
        
        </svg>`
    }
}


class Triangle extends Shape{
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect cx="150" cy="100" r="80" fill=${shapeColor} />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${titleColor}>${title}</text>
        
        </svg>`
    }
}


module.exports = Square, Circle, Triangle;