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
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('값 입력', 0);
  }
}

let accumulator = new Accumulator(1); // 최초 1

// accumulator.read();
// accumulator.read();

// alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함

let user2 = {};
console.log( user2.address?.street);

let user3 = null;
console.log( user3?.address.street ); // undefined

let user4 = null;
let x = 0;

user4?.sayHi(x++); // 아무 일도 일어나지 않습니다.
console.log(x); // 0, x는 증가하지 않습니다.

let user5 = {
  admin() {
    console.log('관리자 계정입니다.')
  }
}

let user6 = {};

user5.admin?.();
user6.admin?.();

let user7 = {
  firstName: "Violet"
};

let user8 = null;

let key = "firstName";

console.log( user7?.[key]);
console.log( user8?.[key]);
console.log( user7?.[key]?.something?.not?.existing);

delete user7?.name;

// user?.name = "Violet";
