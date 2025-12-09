// (function f() {
//   let message = "Hello";
//   console.log(message);
// })()

function sayHiBye(firstName, lastName) {
  function getFullName() {
    return firstName + ' ' + lastName;
  }
  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}

sayHiBye('John', 'Doe');

// 클로저 없이 (불가능)
function makeCounter() {
  let count = 0;
  return count++;  // ❌ 값만 반환 (항상 0)
}

let result1 = makeCounter(); // 0
let result2 = makeCounter(); // 0  ← 매번 새로 실행

console.log('result1:', result1);
console.log('result2:', result2);


// 클로저 사용 (가능)
function makeCounter2() {
  let count = 0;
  return function() {  // ✅ 함수 반환
    return count++;    // 같은 count 참조
  };
}

let counter = makeCounter2();  // 한 번만 실행
console.log('counter():', counter()); // 0
console.log('counter():', counter()); // 1  ← 같은 count 계속 사용
console.log('counter():', counter()); // 2  ← 같은 count 계속 사용

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

function f() {
  let value = Math.random();
  let result = Math.round(value * 10) / 10;

  return function() { console.log(result); return result; };
}

// 배열 안의 세 함수는 각각 f()를 호출할 때 생성된
// 렉시컬 환경과 연관 관계를 맺습니다.
let arr = [f(), f(), f()];

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());

function f2() {
  let value = 123;
  return function() {
    return value;
  }
}

let g = f2();

g = null

// function f3() {
//   let value = Math.random();
//   function g() {
//     // debugger
//     // console.log(value);  // ← value 사용!
//   }
//   return g;
// }

// let g3 =f3();

// g3();

let value = "이름이 같은 다른 변수";

function f4() {
  let value = "가장 가까운 변수";

  function g() {
    // debugger;
    console.log(value);  // ← value 사용!
  }

  return g;
}

let g4 = f4();
g4();

// 디버거 사용 예시1
function sum(a, b) {
  console.log('함수 시작');
  // debugger;  // ← 여기서 멈춤
  let result = a + b;
  console.log('결과:', result);
  return result;
}

sum(5, 3);

// 디버거 사용 예시2
function processArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      // debugger;  // ← 음수일 때만 멈춤!
    }
    console.log(arr[i]);
  }
}

processArray([1, 2, -5, 3, -1]);
// -5와 -1에서만 멈춤

// 디버거 사용 예시3
function complexFunction() {
  let result = { error: true, code: 500 };
  
  // 특정 조건에서만 디버깅
  if (result.error && result.code === 500) {
    // debugger;  // ← 에러 코드 500일 때만 멈춤
  }
  
  return result;
}
complexFunction();

// 과제1
let name = "보라"

function sayHi() {
  console.log(name + "님, 안녕하세요");
}

name = "지성" // 함수는 외부 변수의 현재 값 즉, 가장 최신의 값을 사용합니다.
// 이전 값은 어디에도 저장되지 않습니다. 함수에서 변숫값을 사용할 땐 해당 함수의 렉시컬 환경 또는 외부 렉시컬 환경에서 해당 변숫값을 찾습니다.
sayHi();


// 과제2
function makeCounter10() {
  let name10 = "Pete";

  return function() {
    console.log(name10);
  }
}

let name10 = "John";

let work = makeCounter10();
work();

// 과제3
function makeCounter3() {
  let count = 0;
  return function() {
    return count++;
  }
}

let counter3 = makeCounter3();
let counter33 = makeCounter3();

console.log(counter3());
console.log(counter3());
console.log(counter33());
console.log(counter33());

// 과제4
function Counter() {
  let count = 0; // ← 외부에서 접근 불가! (private)

  this.up = function() {
    return ++count;
  }
  this.down = function() {
    return --count;
  }
}

const count4 = new Counter();

console.log(count4.up());
console.log(count4.up());
console.log(count4.down());

// 과제5
// let phrase = "Hello";

// if (true) {
//   let user = "John";
//   function sayHi2() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
// sayHi2();

let phrase5 = "Hello";
let sayHi5;

if (true) {
  let user = "John";
  sayHi5 = function() {
    console.log(`${phrase5}, ${user}`);
  }
}
sayHi5();

// 과제6
function sum6(x) {
  return function(y) {
    return x / y;
  }
}

console.log(sum6(10)(2));

// URL 생성기
const makeUrl = protocol => domain => path =>
  `${protocol}://${domain}/${path}`

console.log(makeUrl('https')('www.example.com')('index.html'));

const sm6 = (a) => { // 첫 번째 화살표
  return (b) => { // 두 번째 화살표
    return (c) => { // 세 번째 화살표
      return a + b + c; // return 값
    }
  }
}

console.log(sm6(1)(2)(3));
const su6 = a => b => c => a + b + c;
//          ↑    ↑    ↑    ↑
//          │    │    │    └─ return 값
//          │    │    └────── 세 번째 매개변수
//          │    └─────────── 두 번째 매개변수
//          └──────────────── 첫 번째 매개변수
console.log(su6(1)(2)(3));