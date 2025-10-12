console.log( 5 % 2 ); // 5를 2로 나눈 후의 나머지인 1을 출력
console.log( 8 % 3 ); // 8을 3으로 나눈 후의 나머지인 2를 출력

console.log( 2 ** 2 ); // 4  (2 * 2)
console.log( 2 ** 3 ); // 8  (2 * 2 * 2)
console.log( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

let s = "my" + "string";
console.log(s); // mystring

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"


console.log(2 + 2 + '1' ); // '221'이 아니라 '41'이 출력됩니다.

console.log( 6 - '2' ); // 4, '2'를 숫자로 바꾼 후 연산이 진행됩니다.
console.log( '6' / '2' ); // 3, 두 피연산자가 숫자로 바뀐 후 연산이 진행됩니다.

let apples = "2";
let oranges = "3";

let fruit = +apples + +oranges;
// 이항 덧셈 연산자가 적용되기 전에, 두 피연산자는 숫자형으로 변화합니다.
console.log(fruit); // 5

console.log(typeof fruit); // number

let a, b, c;

a = b = c = 2 + 2;
// 할당 연산자 체이닝
console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

let n = 2;
n += 5; // n은 7이 됩니다(n = n + 5와 동일).
n *= 2; // n은 14가 됩니다(n = n * 2와 동일).
console.log(n); // 14

// 증감 연산자
// 증가·감소 연산자는 변수에만 쓸 수 있습니다. 5++와 같이 값에 사용하려고 하면 에러가 발생합니다.
let counter = 2;
counter++;      // counter = counter + 1과 동일하게 동작합니다. 하지만 식은 더 짧습니다.
console.log( counter ); // 3

let counter2 = 2;
counter2--;      // counter2 = counter2 - 1과 동일하게 동작합니다. 하지만 식은 더 짧습니다.
console.log( counter2 ); // 1


let counter3 = 1;
let acount = counter3++; // 후위형 counter++는 counter를 증가시키긴 하지만, 증가 전의 기존 값을 반환합니다. 따라서 alert는 1을 표시합니다.

console.log(acount); // 1


let bc = (1 + 2, 3 + 4);

console.log( bc ); // 7 (3 + 4의 결과)


console.log(typeof("" + 1 + 0)); // "10" 문자열
console.log(typeof("" - 1 + 0)); // -1 숫자 자동타입 변환 "" = 0
console.log(typeof(true + false)); //  1 숫자 자동타입 변환 true = 1, false = 0
console.log(typeof(6 / "3")); // 2 숫자 자동타입 변환 "3" = 3
console.log(typeof("2" * "3")); // 6 숫자 자동타입 변환 "2" = 2, "3" = 3
console.log(typeof(4 + 5 + "px")); // string
console.log(typeof("$" + 4 + 5)); // string
console.log(typeof("4" - 2)); // 2 숫자 자동타입 변환 "4" = 4, "2" = 2
console.log(typeof("4px" - 2)); // NaN 숫자형
console.log("4px" - 2); // NaN 숫자형
console.log("7 / 0", typeof(7 / 0)); // NaN 숫자형
console.log(typeof("  -9  " + 5)); // string
console.log(typeof("  -9  " - 5)); // 숫자
console.log("  -9  " - 5); // -14 숫자
console.log(typeof(null + 1)); // 1
console.log(typeof(undefined + 1)); // NaN
console.log(typeof(" \t \n" - 2)); // -2


// ===== 핵심 정리 =====

console.log("\n=== 핵심 정리 ===");
console.log("┌──── ────┬──────────┬────────┐");
console.log("│ 값              │ Number() │ 의미   │");
console.log("├────── ──┼──────────┼────────┤");
console.log("│ null            │ 0        │ 값없음 │");
console.log("│ undefined       │ NaN      │ 미할당 │");
console.log("│ '' (빈 문자열)  │ 0        │ 빈값   │");
console.log("│ ' ' (공백)      │ 0        │ 공백   │");
console.log("│ '\\t\\n' (탭,줄)  │ 0        │ 공백   │");
console.log("└───── ───┴──────────┴────────┘");

let result = 5 > 4; // 비교 결과를 변수에 할당
console.log( result ); // true

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

console.log( '2' > 1 ); // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행됩니다.
console.log( '01' == 1 ); // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행됩니다.

let aa = 0;
console.log( Boolean(aa) ); // false

let bb = "0";
console.log( Boolean(bb) ); // true

console.log(aa == bb); // true!

console.log( 0 === false ); // false, 피연산자의 형이 다르기 때문입니다.

console.log( 5 > 4 ); // true
console.log( "apple" > "pineapple" ); // false
console.log( "2" > "12" ); // true
console.log( undefined == null ); // true
console.log( undefined === null ); // false
console.log( null == "\n0\n" ); // false null은 오로지 undefined와 비교할 때만 true가 됩니다.
console.log( null === +"\n0\n" ); // false

console.log( "1: ", " " < "" ); // false