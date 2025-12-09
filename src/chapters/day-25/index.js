// var는 if, for 등의 코드 블록을 관통합니다. 
// 아주 오래전의 자바스크립트에선 블록 수준 렉시컬 환경이 만들어 지지 않았기 때문입니다. 
// var는 구식 자바스크립트의 잔재이죠.

if (true) {
  var test = true;
}

console.log(test);

for (var i = 0; i < 2; i++) {
  console.log(i);
}
console.log('outside', i);

function sayHi() {
  if (true) {
    var phrase = "Hello";
  }
  console.log(phrase);
}

sayHi();
// console.log(phrase); // 에러남

var user = "John";
var user = "Pete";
console.log(user);

function sayHi2() {
  phrase = "Hello";
  console.log(phrase);
  var phrase;
}
sayHi2();

function sayHi3() {
  phrase = "Hello3"; // (*)

  if (false) {
    var phrase;
  }

  console.log(phrase);
}
sayHi3();

function sayHi4() {
  console.log(phrase);

  var phrase = "Hello";
}

sayHi4();

function sayHi5() {
  var phrase; // 선언은 함수 시작 시 처리됩니다.

  console.log(phrase); // undefined

  phrase = "Hello"; // 할당은 실행 흐름이 해당 코드에 도달했을 때 처리됩니다.
}

sayHi5();

(function() {
  let message = "Hello25";
  console.log(message);
})();

// // 함수를 선언과 동시에 실행하려고 함
// function() { // <-- Error: Function statements require a function name

//   let message = "Hello";

//   alert(message); // Hello

// }();

// // 맨 아래의 괄호 때문에 문법 에러가 발생합니다.
// function go() {

// }(); // <-- 함수 선언문은 선언 즉시 호출할 수 없습니다.

(function() {
  console.log('함수를 괄호로 둘러싸기');
})();

(function() {
  console.log('전체를 괄호로 둘러싸기');
}())

console.log('window객체');
window.console.log('window객체의 console.log');

let gLet = 5;

console.log(window.gLet);

// 모든 스크립트에서 현재 사용자(current user)에 접근할 수 있게 이를 전역 객체에 추가함
window.currentUser = {
  name: "John"
};

// 아래와 같은 방법으로 모든 스크립트에서 currentUser에 접근할 수 있음
console.log(currentUser.name);  // John

// 지역 변수 'currentUser'가 있다면
// 지역 변수와 충돌 없이 전역 객체 window에서 이를 명시적으로 가져올 수 있음
console.log(window.currentUser.name); // John