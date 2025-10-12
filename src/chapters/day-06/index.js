let i = 2;

while (i) { // i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춘다.
  console.log("while", i);
  i--;
}

let j = 0;

do {
  console.log("do while", j);
  j++;
} while (j < 2); // 조건이 거짓이어도 한 번은 실행된다.

for (let i = 0; i < 2; i++) {
  console.log("for1", i);
}

let k = 0;

for (; k < 2;) {
  console.log("for2", k);
  k++;
}

// 끊임 없이 반복되기에 무한 루프에 빠진다.
// for (;;) {
//   console.log("for3");
// }123

let sum = 0;

// break 사용 가능한 곳 : for, while, switch, do-while, for...in, for...of
while (true) {
  //단항 + (변환): 문자열을 숫자로 변환
  let value = +prompt("숫자를 입력하세요.", '');

  if (!value) break;

  sum += value;
}

alert( '합계: ' + sum );