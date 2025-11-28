let str2 = "Hello";

console.log(str2.toUpperCase());


let n = 1.234565;

console.log(n.toFixed(2));

console.log(typeof 0);

console.log(typeof new Number(0));

let num = Number("1")
console.log(num);

let zero = new Number(0)
if (zero) { // 변수 zero는 객체이므로, 조건문이 참이됩니다.
  console.log("그런데 여러분 zero가 참이라는 것에 동의하시나요?!");
}

// null/undefined는 메서드가 없습니다.
// 특수 자료형인 null과 undefined의 원시값(null/undefined)은 위와 같은 법칙을 따르지 않습니다. 이 자료형과 연관되는 "래퍼 객체"도 없고, 메서드도 제공하지 않습니다. 어떤 의미에서는 두 자료형이 "가장 원시적"이라 할 수 있을 것 같습니다.
// 두 자료형에 속한 값의 프로퍼티에 접근하려 하면 에러가 발생합니다.
// alert(null.test); // error

// let str = "Hello";

// str.test = 5;

// alert(str.test);

// strict mode: TypeError 발생
// "use strict" 또는 모듈 환경에서는 원시값에 프로퍼티 할당 시 에러 발생
// Cannot create property 'test' on string 'Hello'
// 핵심: 원시값(string, number 등)은 프로퍼티를 가질 수 없습니다. 객체만 프로퍼티를 가질 수 있습니다.

// 원시타입 문자열
let str = "한글";

//메서드 호출하는 순간...
str.charCodeAt(0);

// 내부 동작:
// 1. 임시로 String 객체 생성 (래퍼 객체)
// 2. 그 객체의 메서드 호출
// 3. 결과 반환
// 4. 임시 객체 즉시 삭제

// 실제로는 이렇게 동작:
// new String("한글").charCodeAt(0);  // 임시 객체
// → 결과 반환
// → 임시 객체 삭제

let billion = 1e9;
console.log(billion);

console.log(1e-3 === 1 / 1000);

// 16진수는 0x를 사용해 표현할 수 있습니다.
console.log( 0xff ); // 255
console.log( 0xFF ); // 255 (대·소문자를 가리지 않으므로 둘 다 같은 값을 나타냅니다.)

// 색상 코드
let color = "#FF5733";  // 16진법
// FF = 255 (Red)
// 57 = 87  (Green)  
// 33 = 51  (Blue)

console.log(Math.floor(3.1)); // 내림 3
console.log(Math.floor(-3.1)); // 내림 -4
console.log(Math.ceil(3.1)); // 올림 4
console.log(Math.ceil(-3.1)); // 올림 -3
console.log(Math.round(3.1)); // 반올림 3
console.log(Math.round(-3.1)); // 반올림 -3
console.log(Math.round(3.6)); // 반올림 4

let num10 = 1.23456;

console.log( Math.floor(num10 * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
console.log(num10.toFixed(2)); // 반올림

// 숫자 정밀도 한계치에 대한 안전한 정수의 마지막
// "약 9000조 이상은 위험하다"
Number.MAX_SAFE_INTEGER;  // 9,007,199,254,740,991


console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true
console.log( isNaN(3) ); // false is Not a Number

alert( NaN === NaN ); // false