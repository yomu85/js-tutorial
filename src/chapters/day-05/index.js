'use strict';

let a = 1;
let b = 2;

let result = a + b < 4 ? '미만' : '이상';

console.log(result);

// let value = prompt("자바스크립트의 '공식' 이름은 무엇일까요?", 'ECMAScript')

// if (value === 'ECMAScript') {
//   alert( '정답입니다!' );
// } else {
//   alert( '오답입니다!' );
// }

if (0) console.log( '0 정답입니다!' );
if (1) console.log( '1정답입니다!' );

// let accessAllowed = age > 18 ? true : false;

if ("0") {
  console.log( "'0'은 빈문자열이 아니기에 실행된다." );
}


console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

if (1 || 0) { // if( true || false ) 와 동일하게 동작합니다.
  console.log( 'truthy!' );
}

let hour = 9;

if (hour < 9 || hour > 18) {
  console.log( '영업시간이 아닙니다.' );
} else {
  console.log( '영업시간입니다.' );
}

console.log( 1 || 0 ); // 1 (1은 truthy임)

console.log( null || 1 ); // 1 (1은 truthy임)
console.log( null || 0 || 1 ); // 1 (1은 truthy임)

console.log( undefined || null || 0 ); // 0 (모두 falsy이므로, 마지막 값을 반환함)

true || console.log("not printed");
false || console.log("printed");

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

let hour1 = 12;
let minute = 30;

if (hour1 == 12 && minute == 30) {
  console.log( '현재 시각은 12시 30분입니다.' );
} else {
  console.log( '현재 시각은 12시 30분이 아닙니다.' );
}

console.log( "||는 첫 번째 truthy값을 찾는다. &&는 첫 번째 falsy값을 찾는다." ); // true

console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
console.log( null && 5 ); // null
console.log( 0 && "아무거나 와도 상관없습니다." ); // 0 

console.log( 1 && 2 && null && 3 ); // null