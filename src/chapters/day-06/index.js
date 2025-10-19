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
// while (true) {
//   //단항 + (변환): 문자열을 숫자로 변환
//   let value = +prompt("숫자를 입력하세요.", '');

//   if (!value) break;

//   sum += value;
// }

// alert( '합계: ' + sum );

// for (let i = 0; i < 10; i++) {

//   // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
//   if (i % 2 == 0) continue;

//   alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
// }

// // 레이블 없음: 안쪽 반복문만 탈출
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (조건) break; // j 반복문만 종료, i는 계속
//   }
// }

// // 레이블 있음: 지정한 반복문까지 탈출 ✅
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (조건) break outer; // 두 반복문 모두 종료
//   }
// }

// 참고: 레이블도 continue처럼 잘 안 쓰입니다. 

// 선호 방식
// 더 선호되는 방식
// function findValue() {
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (!input) return; // 함수 자체를 종료
//     }
//   }
// }

// let l = 0;
// while (++l < 5) alert( 'l=' + l );

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let l = 0;
// while(l < 3) {
//   alert( `number ${l}!` );
//   l++;
// }

// while(true) {
//   let value = prompt("100을 초과하는 숫자를 입력하세요.", 99);
//   if (value > 100) break;
// }

// 단수 로직을 먼저 작성, 복수 로직은 단수 로직을 활용하여 작성한다.
function calcPrime(num) {
  if(num < 2) return false;

  for (let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }
  return true;
}

console.log(calcPrime(7));   // true
console.log(calcPrime(10));  // false (2, 5로 나누어떨어짐)


function calcPrims(max) {
  const primes = [];

  for (let n = 2; n <= max; n++) {
    if (calcPrime(n)) {
      primes.push(n); 
    }
  }
  return primes;
}

console.log(calcPrims(10));   // [2, 3, 5, 7]

// switch 문: 복수의 if 조건문은 switch문으로 바꿀 수 있습니다.
// let a = 2 + 2;

// switch (a) {
//   case 3: // a === 3 와 동일
//     alert( '비교하려는 값보다 작습니다.' );
//     break;
//   case 4: // a === 4 와 동일
//     alert( '비교하려는 값과 일치합니다.' );
//     break;
//   case 5: // a === 5 와 동일
//     alert( '비교하려는 값보다 큽니다.' );
//     break;
//   default: // a !== 3 && a !== 4 && a !== 5 와 동일
//     alert( "어떤 값인지 파악이 되지 않습니다." );
// }

// fall-through
// 요일 그룹핑
// const day = '토';

// switch (day) {
//   case '월':
//   case '화':
//   case '수':
//   case '목':
//   case '금':
//     console.log('평일입니다');
//     break;
  
//   case '토':
//   case '일':
//     console.log('주말입니다');
//     break;
// }

// const grade = 'C';

// // 등급별 처리
// switch (grade) {
//   case 'A':
//   case 'B':
//     console.log('우수');
//     break;
  
//   case 'C':
//   case 'D':
//     console.log('보통');
//     break;
  
//   case 'F':
//     console.log('재수강');
//     break;
// }

// let arg = prompt("값을 입력해주세요.");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( '0이나 1을 입력하셨습니다.' );
//     break;

//   case '2':
//     alert( '2를 입력하셨습니다.' );
//     break;

//   case 3:
//     alert( '이 코드는 절대 실행되지 않습니다!' );
//     break;
//   default:
//     alert( '알 수 없는 값을 입력하셨습니다.' );
// }

// browser 객체
// const browser = navigator.userAgent;

// if (browser.includes('Edge')) {
//   alert("Edge를 사용하고 계시네요!");
// }else if (browser.includes('Chrome') || browser.includes('Firefox') || browser.includes('Safari') || browser.includes('Opera')) {
//   alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
// } else {
//   alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
// }

let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2, 3');
    break;
  default:
    alert('unknown');
    break;
}