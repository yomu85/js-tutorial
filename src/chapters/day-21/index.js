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
// getDay(): 일요일을 나타내는 0부터 토요일을 나타내는 6까지의 숫자 중 하나를 반환합니다.
// 몇몇 나라에서 요일의 첫날이 일요일이 아니긴 하지만, getDay에선 항상 0이 일요일을 나타냅니다. 이를 변경할 방법은 없습니다.
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

// let start = Date.now();

// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now();

// console.log(`반복문을 모두 도는데 ${end - start} 밀리초가 걸렷습니다.`);

let start = new Date();
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date();

console.log(`반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.`);

// 간단한 벤치마크 3단계:

// 1. 시간 측정 시작
const start2 = performance.now();
// 2. 테스트 실행
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
// 3. 시간 측정 종료
const elapsed = performance.now() - start2;

console.log(`${elapsed}ms`);

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");

console.log(ms); // 1327611110417  (타임스탬프)

let date22 = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));
console.log(date22);

// 과제1
const DATE_201202200312 = new Date(2012, 1, 20, 3, 12);
console.log(DATE_201202200312);

// 과제2
function getWeekDay(date) {
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}
let date20 = new Date(2025, 11, 4);
console.log(getWeekDay(date20));

// 과제3
function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }
  return day;
}
let date30 = new Date(2019, 11, 5); // 2019년 11월 5일 x
console.log(getLocalDay(date30));
console.log(date30.toLocaleDateString("ko-KR")); // 2019년 12월 5일

// 과제4
function getDateAgo(date, days) {
  // 원본 날짜 복사 (원본 변경 방지!)
  const dateCopy = new Date(date);

  console.log(dateCopy.getDate());

  // days일 빼기
  dateCopy.setDate(dateCopy.getDate() - days);

  // 일만 반환
  return dateCopy.getDate();
}
let date40 = new Date(2015, 0, 2);
console.log(getDateAgo(new Date(), 1));
console.log(getDateAgo(date40, 2));
console.log(getDateAgo(date40, 365));

// 과제5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1);
  date.setDate(0); // 일의 최솟값은 1이므로 0을 입력하면 전 달의 마지막 날을 설정한 것과 같은 효과를 봅니다.
  return date.getDate();
}
console.log(getLastDayOfMonth(2024, 1));

// 과제6
function getSecondsToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const now = new Date();

  return `오늘 기준 ${Math.round(
    (now.getTime() - today.getTime()) / 1000
  )}초가 지났습니다`;
}

console.log(getSecondsToday());

// 다른 방법
// function getSecondsToday() {
//   let d = new Date();
//   return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
// }

// console.log( getSecondsToday() );

// 과제7
function getSecondsToTomorrow() {
  const nextDay = new Date();
  nextDay.setHours(0, 0, 0, 0);
  nextDay.setDate(nextDay.getDate() + 1);
  // let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)
  const now = new Date();
  let gap = Math.round((nextDay.getTime() - now.getTime()) / 1000);

  return `내일까지 ${gap}초가 남았습니다`;
}
console.log(getSecondsToTomorrow());
