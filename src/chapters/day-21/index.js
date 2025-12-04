let now = new Date(0);
// Unix Epoch (유닉스 시대)
// - Unix 운영체제가 시간을 표현하기 위해 정한 기준점
// - 1970-01-01 00:00:00 UTC를 0으로 정함
// - JavaScript는 Unix 시스템을 따름
console.log(now); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

//datestring
// let date = new Date("2017-01-26");
let date = new Date();
console.log(date);
console.log(date.toUTCString());
console.log(date.getTime()); // 타입스탬프
console.log(date.getTimezoneOffset()); // 분으로 표기됨

// ❌ 헷갈리는 표현
// getTimezoneOffset()은 "UTC - 현지시간"
// -540 = UTC는 한국보다 540분(9시간) 뒤

// ✅ 쉽게 이해하기
const offset = date.getTimezoneOffset();

if (offset < 0) {
  console.log(`한국이 UTC보다 ${Math.abs(offset) / 60}시간 빠름 (앞서있음)`);
  // 한국이 UTC보다 9시간 빠름
} else if (offset > 0) {
  console.log(`한국이 UTC보다 ${offset / 60}시간 느림 (뒤처짐)`);
} else {
  console.log("UTC와 같은 시간대");
}

// year는 반드시 네 자리 숫자여야 합니다. 2013은 괜찮고 98은 괜찮지 않습니다.
// month는 0(1월)부터 11(12월) 사이의 숫자여야 합니다.
// date는 일을 나타내는데, 값이 없는 경우엔 1일로 처리됩니다.
// hours/minutes/seconds/ms에 값이 없는 경우엔 0으로 처리됩니다.
let numDate = new Date(2011, 0, 1, 0, 0, 0, 457); // 2011년 1월 1일, 00시 00분 00초
let numDate2 = new Date(2011, 0, 1); // 2011년 1월 1일, 00시 00분 00초
console.log(numDate);
console.log(numDate2);

console.log(numDate.getFullYear());
console.log(numDate.getMonth());
console.log(numDate.getDate());
console.log(numDate.getMilliseconds());

let today = new Date();

today.setHours(0); // 날짜는 변경되지 않고 시만 0으로 변경됩니다.
console.log(today);

today.setHours(0, 0, 0, 0); // 날짜는 변경되지 않고 시, 분, 초가 모두 변경됩니다(00시 00분 00초).
console.log(today);

let date2 = new Date(2013, 0, 32);
console.log(date2);

let date3 = new Date(2016, 1, 28);
date3.setDate(date3.getDate() + 2);
console.log(date3); // 2016년 3월 1일

let date4 = new Date();
date4.setSeconds(date4.getSeconds() + 70);
console.log(date4);

let date5 = new Date();
console.log(+date5);

// let start = new Date();
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
// let end = new Date();

// console.log(`반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.`);

let start = Date.now();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now();

console.log(`반복문을 모두 도는데 ${end - start} 밀리초가 걸렷습니다.`);
