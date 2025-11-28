function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User('보라');

console.log(user.name); // 보라
console.log(user.isAdmin); // false

// 과제1
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A;
let b = new B;

console.log( a == b )

// 과제2
function Calculator() {
  this.read = () => {
    this.firstNum = +prompt('첫 번째 값:', 0);
    this.secondNum = +prompt('두 번째 값:', 0);
  }
  this.sum = () => {
    return this.firstNum + this.secondNum;
  }
  this.mul = () => {
    return this.firstNum * this.secondNum;
  }
}
let calculator = new Calculator();
// calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

// 과제3: 누산기 만들기