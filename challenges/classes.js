// 1. Copy and paste your prototype in here and refactor into class syntax.
/*
function CuboidMaker(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
}
CuboidMaker.prototype.volume = function() {
  return (this.length * this.width * this.height)  ;
}
CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}
*/

class CuboidMakerClass {
    constructor(l, w, h) {
        this.length = l;
        this.width = w;
        this.height = h;
    }

    volume() {
        return (this.length * this.width * this.height);
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
// Test your volume and surfaceArea methods by uncommenting the logs below:

const cuboidClass = new CuboidMakerClass(4, 5, 5);
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(side) {
        super(side, side, side);
    }
    volume() {
        return Math.pow(this.length, 3);
    }
    surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
}

const cube = new CubeMaker(4);
console.log(cube.volume());
console.log(cube.surfaceArea());