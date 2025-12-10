function sayHi() {
  alert("Hi");
}
console.log(sayHi.name); // sayHi
sayHi.counter = 0;
sayHi.customProp = "test";

console.log(sayHi.counter);     // 0
console.log(sayHi.customProp);  //

let sayHi2 = function() {
  alert("Hi");
};

console.log(sayHi2.name); // sayHi (익명 함수이지만 이름이 있네요!)

console.log(typeof sayHi); // 특별취급이나 본질은 객체

function checkType(value) {
  return Object.prototype.toString.call(value);
}

console.log(checkType(function() {}));  // "[object Function]"
console.log(checkType({}));             // "[object Object]"
console.log(checkType([]));             // "[object Array]"
console.log(checkType(null));           // "[object Null]"

function f(sayHi10 = function() {}) {
  console.log(sayHi10.name); // sayHi (이름이 있네요!)
}

f();

let user = {

  sayHi() {
    // ...
  },

  sayBye: function() {
    // ...
  }

}

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

// 배열 안에서 함수를 생성함
let arr = [function myFunc() {}];

console.log(arr[0].name);  // "myFunc" ✅

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2, 나머지매개변수는 포함되지않는다.

function ask(question, ...handlers) {
  let isYes = confirm(question);

  console.log(handlers);

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

// ask("질문 있으신가요?", () => console.log('ok를 하셨습니다.'), result => console.log(result));

function sayCall() {
  console.log('called');
  sayCall.counter++;
}

sayCall.counter = 0;
sayCall();
sayCall();
console.log(`호출 횟수: ${sayCall.counter}회`);

function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  return counter;
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1

counter.count = 10;
console.log(counter()); // 10

// 기명 함수 표현식
let sayHello = function func(who) {
  if (who) {
    console.log(`Hello ${who}`);
  } else {
    func("Guest"); // TypeError: sayHi is not a function
  }
}

sayHello("John");
sayHello();

// 기명 함수 실용적인 패턴 1 : 재귀 함수 배열 평탄화

// 방법 2: 전개 연산자 사용
function flattenArray2(arr) {
  return arr.reduce(function faltten(acc, item) {
    if (Array.isArray(item)) {
      return [...acc, ...item.reduce(faltten, [])]
    }
    return [...acc, item]
  }, [])
}

const nested = [1, 2, [3, 4], 5, [6, 7]];
console.log('중첩 배열 평탄화 (전개연산자):', flattenArray2(nested));
const deepNested = [1, [2, [3, [4, [5]]]]];
console.log('깊은 중첩 테스트 (전개연산자):', flattenArray2(deepNested));

// 과제1
function MakeCounter1() {
  let count = 0;
  this.set = function(value) {
    console.log(value);
    count = value;
    return count;
  }
  this.increase = function() {
    return ++count;
  }
  this.decrease = function() {
    return --count;
  }
}

let counter1 = new MakeCounter1();
console.log(counter1);
counter1.set(10);
console.log(counter1.increase());

// 과제2
function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  // alert()은 toString() 호출
  f.toString = function() {
    return currentSum;
  };

  // console.log()는 valueOf() 호출
  f.valueOf = function() {
    return currentSum;
  };

  return f;
}

console.log( +sum(1)(2) ); // 3
console.log( +sum(5)(-1)(2) ); // 6
console.log( +sum(6)(-1)(-2)(-3) ); // 0
console.log( +sum(0)(1)(2)(3)(4)(5) ); // 15

// alert('alert: ' + sum(10)(20));                  // toString() 호출 → "alert: 30"
console.log('연산:', sum(5)(5) + 100);           // valueOf() 호출 → 110
console.log('문자열 결합:', '결과는 ' + sum(3)(7)); // toString() 호출 → "결과는 10"

// 생성자 함수
// function User(name) {
//   // this = {}; (빈 객체가 암시적으로 만들어짐)
//   this.name = name;
//   this.isAdmin = false;

//   //return this; (this가 암시적으로 반환됨)
// }

// let userBora = new User("보라");

// console.log(userBora.name);
// console.log(userBora.isAdmin);

// new Function 문법
// let func = new Function ([arg1, arg2, ...argN], functionBody);

let newSum = new Function('a', 'b', 'return a + b');
console.log(newSum(1, 2));

let sayHelloAlert = new Function('console.log("Hello")');
sayHelloAlert();

function getFunc() {
  let value = "test";

  let func = function() { alert(value); };

  return func;
}

// getFunc()(); // getFunc의 렉시컬 환경에 있는 값 "test"가 출력됩니다.

let newSum2 = new Function('a', 'b', 'return a + b');
console.log(newSum2(1, 2));

let newSum3 = new Function('a,b', 'return a + b');
console.log(newSum3(1, 2));

let newSum4 = new Function('a , b', 'return a + b');
console.log(newSum4(1, 2));


// new Function의 내부 동작 (의사 코드)
function newFunction(...args) {
  // 1. 마지막 인자 = 함수 본문
  let functionBody = args[args.length - 1] || '';
  
  // 2. 나머지 = 매개변수
  let parameters = args.slice(0, -1);
  
  // 3. 함수 생성
  return `function(${parameters.join(', ')}) { ${functionBody} }`;
}

// 인수가 3개면 마지막 인수가 functionBody가 됨
// 인수가 1개면 매개변수없이 바로 그 인수가 functionBody가 됨