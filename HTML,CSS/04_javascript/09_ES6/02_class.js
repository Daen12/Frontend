class Shape {
  constructor(id, x, y) {
    //이때 멤버변수가 만들어짐.
    this.id = id;
    this.move(x, y);
  }
  //클래스로 만들면 메서드가 프로토타입으로 만들어짐. 메모리효율적
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}
let shape = new Shape(1, 100, 100);
console.log(typeof Shape); //클래스의 타입
console.log(shape);
shape.move(150, 150);
console.log(shape); //변수의 타입
console.log(typeof shape);
console.log(shape instanceof Shape);

/////// Syntax sugar = 문법적으로 보다 편리하게 사용가능하도록 함.
//클래스 안 메서드는 프로토타입 메서드.
//객체를 생성해도 객체안에 있는게 아니라 프로토타입에 있는걸 꺼내쓰는 개념.
//이것은 생성자함수로 만들기 까다롭다 = syntax sugar
/////////////////////////////////////////////////////////

console.log("----------------");
var Shape2 = function (id, x, y) {
  //표현식으로 생성자함수 만듦.
  this.id = id;
  this.move(x, y);
};
Shape2.prototype.move = function (x, y) {
  //프로토타입에 move 대입
  this.x = x;
  this.y = y;
};

//표현식으로 안만들어도 play함수 추가 안되고 prototype으로만 추가됨..?
Shape.play = function (x) {
  this.x = x;
  return `play with ${this.x}`;
};

let shape3 = new Shape(1, 2, 3);

let shape2 = new Shape2(1, 200, 200);
console.log(typeof Shape2);
console.log(shape2);
shape2.move(250, 250);
console.log(shape2);
console.log(typeof shape2);
console.log(shape2 instanceof Shape2);

console.log(shape3);
console.log(shape3.play(4));
