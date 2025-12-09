(function f() {
  let message = "Hello";
  console.log(message);
})()

function sayHiBye(firstName, lastName) {
  function getFullName() {
    return firstName + ' ' + lastName;
  }
  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}

sayHiBye('John', 'Doe');

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  }
}

let counter = makeCounter();
console.log('counter(): 1번째 시도', counter());
console.log('counter(): 2번째 시도', counter());
console.log('counter(): 3번째 시도', counter());

function outer() {
  let x = 10;
  
  function inner() {
    let y = 20;  // outer는 y를 모름!
    console.log(x + y);  // x와 y를 찾을 수 있을까?
  }
  inner();
}

outer();

console.log(typeof func1);  // "function" ✅
console.log(func1());  // func1
function func1() { return 'func1'; }