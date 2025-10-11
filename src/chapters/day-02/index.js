let user = "John",
  age = 25,
  message = "Hello";
console.log("변수 선언:", user, age, message);

const BIRTHDAY = "18.04.1982";
console.log("상수 선언:", BIRTHDAY);

console.log( "숫자가 아님" / 2 ); // NaN: Not a Number 자료형은 Number입니다.

// 끝에 'n'이 붙으면 BigInt형 자료입니다.
const bigInt = 1234567890123456789012345678901234567890n;
console.log("BigInt 선언:", bigInt);

let str = "Hello";
let phrase = `can embed another ${str}`;
console.log("문자열 선언:", phrase);

let isGreater = 4 > 1;
console.log( isGreater ); // true (비교 결과: "yes")

let ageNull = null;
console.log("null 선언:", ageNull);

let ageUndefined;
console.log("undefined 선언:", ageUndefined);

console.log("------------ typeof ------------");
console.log(typeof 1011); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof "foo"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object"  (2)
console.log(typeof undefined); // "undefined"
console.log(typeof Math); // "object"  (1)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof alert); // "function"  (3)

let name = "Ilya";

console.log( `hello ${1}` ); // ?

console.log( `hello ${"name"}` ); // ?

console.log( `hello ${name}` ); // ?
