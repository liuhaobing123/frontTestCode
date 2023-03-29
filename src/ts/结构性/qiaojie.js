class Color {
  constructor(name) {
    this.name = name;
  }
}
class Shape {
  constructor(name, color) {
    (this.name = name), (this.color = color);
  }
  draw() {
    console.log(this.color + "的" + this.name);
  }
}
let red = new Color("red");
let circle = new Shape("circle", red);
circle.draw();

export { circle };
