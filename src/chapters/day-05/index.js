"use strict";

let a = 1;
let b = 2;

let result = a + b < 4 ? "미만" : "이상";

console.log(result);

// let value = prompt("자바스크립트의 '공식' 이름은 무엇일까요?", 'ECMAScript')

// if (value === 'ECMAScript') {
//   alert( '정답입니다!' );
// } else {
//   alert( '오답입니다!' );
// }

if (0) console.log("0 정답입니다!");
if (1) console.log("1정답입니다!");

// let accessAllowed = age > 18 ? true : false;

if ("0") {
  console.log("'0'은 빈문자열이 아니기에 실행된다.");
}

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

if (1 || 0) {
  // if( true || false ) 와 동일하게 동작합니다.
  console.log("truthy!");
}

let hour = 9;

if (hour < 9 || hour > 18) {
  console.log("영업시간이 아닙니다.");
} else {
  console.log("영업시간입니다.");
}

console.log(1 || 0); // 1 (1은 truthy임)

console.log(null || 1); // 1 (1은 truthy임)
console.log(null || 0 || 1); // 1 (1은 truthy임)

console.log(undefined || null || 0); // 0 (모두 falsy이므로, 마지막 값을 반환함)

true || console.log("not printed");
false || console.log("printed");

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

let hour1 = 12;
let minute = 30;

if (hour1 == 12 && minute == 30) {
  console.log("현재 시각은 12시 30분입니다.");
} else {
  console.log("현재 시각은 12시 30분이 아닙니다.");
}

console.log(
  "&&의 우선순위가 ||보다 높습니다.AND 연산자 &&의 우선순위는 OR 연산자 ||보다 높습니다. 따라서 a && b || c && d는 (a && b) || (c && d)와 동일하게 동작합니다."
);
console.log(
  "if를 ||나 &&로 대체하지 마세요. 어떤 개발자들은 AND 연산자 &&를 if문을 ‘짧게’ 줄이는 용도로 사용하곤 합니다"
);

console.log(
  "||는 첫 번째 truthy값을 찾는다. 계속 falsy인 경우 마지막 값을 반환한다. &&는 첫 번째 falsy값을 찾는다. 계속 thruthy인 경우 마지막 값을 반환한다."
); // true

console.log(1 && 0); // 0
console.log(1 && 5); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
console.log(null && 5); // null
console.log(0 && "아무거나 와도 상관없습니다."); // 0

console.log(1 && 2 && null && 3); // null

console.log(!true); // false
console.log(!0); // true

console.log(!!"non-empty string"); // true
console.log(!!null); // false`

console.log("NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있습니다.");

console.log(Boolean("non-empty string")); // true
console.log(Boolean(null)); // false

console.log(null || 2 || undefined); // 2

// console.log( alert(1) || 2 || alert(3) );

console.log(1 && null && 2);

// console.log( alert(1) && alert(2) );

console.log(null || (2 && 3) || 4);

/**
 * age(나이)가 14세 이상 90세 이하에 속하지 않는지를 확인하는 if문을 작성하세요.
 * 답안은 NOT ! 연산자를 사용한 답안과 사용하지 않은 답안 2가지를 제출해 주세요.
 */

const age = 10;

// if (!(age >= 14 && age <= 90)) {
//   console.log('조건에 맞습니다.');
// } else {
//   console.log('조건에 맞지 않습니다.');
// }

// if (age < 14 || age > 90) {
//   console.log('조건에 맞습니다.');
// } else {
//   console.log('조건에 맞지 않습니다.');
// }

if (-1 || 0) console.log("first");
// if (-1 || 0)은 if(-1)과 동일하게 동작합니다. -1은 truthy이므로 조건문이 실행됩니다.
if (-1 && 0) console.log("second");
// if (-1 && 0)은 if(0)과 동일하게 동작합니다. 0은 falsy이므로 조건문이 실행되지 않는다.
if (null || (-1 && 1)) console.log("third");
// &&가 먼저 계산되어야한다.
// if(1)은 truthy이므로 조건문이 실행된다.

/**
 * 프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.
 * 사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요.
 * 이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요.
 * 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
 * 비밀번호 확인 절차는 다음과 같습니다.
 * 맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
 * 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
 * 빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.
 * 순서도는 다음과 같습니다.
 */

function login() {
  const valueID = prompt("아이디를 입력해주세요.", "");

  if (!valueID?.trim()) {
    alert("취소되었습니다.");
    return;
  }

  if (valueID === "Admin") {
    const valuePassword = prompt("비밀번호를 입력해주세요.", "");
    if (!valuePassword?.trim()) {
      alert("취소되었습니다.");
      return;
    }
    if (valuePassword === "TheMaster") {
      alert("환영합니다!");
    } else {
      alert("인증에 실패하였습니다.");
    }
  } else {
    alert( "인증되지 않은 사용자입니다." );
  }
}

// login();

console.log("alert() 메소드의 리턴값이 undefined 입니다.");


let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

let height2 = null;
let width2 = null;

// 괄호를 추가!
let area = (height2 ?? 100) * (width2 ?? 50);

alert(area); // 5000
