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

console.log( NaN === NaN ); // false

// toString(base)
// num.toString(base) 메서드는 base진법으로 num을 표현한 후, 이를 문자형으로 변환해 반환합니다.
// base는 2에서 36까지 쓸 수 있는데, 기본값은 10입니다.
let num20 = 255;

console.log(num20.toString(16));

// Number 래퍼 객체 메서드들
(123).toString();      // "123"
(123.456).toFixed(2);  // "123.46"
(123.456).toPrecision(4);  // "123.5"
(123).toExponential(2);    // "1.23e+2"

// String 래퍼 객체 메서드들
"hello".toUpperCase();     // "HELLO"
"hello".charAt(0);         // "h"
"hello".slice(1, 3);       // "el"

// 모두 임시 래퍼 객체를 통해 호출됨

// alert( 0.1 + 0.2 ); // 0.30000000000000004

console.log(typeof (123.456).toFixed(2));

// ✅ 실제 용도 (계산 + 반올림)
let rounded = Number(num20.toFixed(2));  // 이렇게 씀

// 단순 단항 형변환이 아닌  실무에선 CSS 등에서 '100px', '12pt'와 같이 숫자와 단위를 함께 쓰는 경우가 흔합니다. 대다수 국가에서 '19€'처럼 금액 뒤에 통화 기호를 붙여 표시하기도 하죠. 숫자만 추출하는 방법이 필요해 보이네요.
// parseInt는 정수, parseFloat는 부동 소수점 숫자를 반환합니다.
console.log(parseInt('100px'));
console.log(parseFloat('12.51231rem'));
console.log(parseInt('12.3'));
console.log(parseFloat('12.3.4')); // 12.3, 두 번째 점에서 숫자 읽기를 멈춥니다.
console.log(parseInt('a123'));
console.log(typeof parseFloat('12.51231rem'));
console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));

console.log(Math.random());

console.log(Math.max(3, 5, -10, 0, 1));
console.log(Math.min(1, 2));
console.log(Math.pow(2, 4));

console.log(typeof 123e6);

// 요약
// parseInt(str, base)를 사용하면 str을 base진수로 바꿔줍니다(단, 2 ≤ base ≤ 36).
// num.toString(base)는 숫자를 base진수로 바꾸고, 이를 문자열 형태로 반환합니다.

// 과제 1
class twoNumbers {
  constructor() {
    this.firstNum = +prompt('첫번째 값:')
    this.secondNum = +prompt('두번째 값:')
  }
  sum() {
    return this.firstNum + this.secondNum
  }
}

// const twoNum = new twoNumbers();
// console.log(twoNum.sum());

// 과제 2
console.log((1.35).toFixed(1));
console.log((1.35).toPrecision(20));
console.log((6.35).toFixed(1));
console.log(6.35.toPrecision(20)); 

// toFixed 안 씀! 정수 연산만
function roundPrice(price, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(price * factor) / factor;
}

console.log('roundPrice(6.35, 1):', roundPrice(6.35, 1));

// 과제 3
function readNumber() {
  let num;
  
  do {
    num = prompt("숫자를 입력하세요.")

    // isFinite는 문자열이 일반 숫자인지 검증하는데 사용한다.
  } while(!isFinite(num))

  if (num === null || num === '') return null

  return +num
}

// alert(`Read: ${readNumber()}`)

// 과제 4
let i = 0;
while (i < 11) {
  i += 0.2;
  // if (i > 9.8 && i < 10.2) alert( i );
}

//어떤 경우에도 i는 10이 될 수 없습니다.
// 이런 일이 발생하는 이유는 0.2와 같은 분수를 더할 때 정밀도 손실이 발생하기 때문입니다.
// 그러므로 소수나 분수를 대상으로 작업 할 땐 등호 비교를 피하세요.

// 과제 5
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525