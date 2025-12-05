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

// 과제8
function formatDate(date) {
  let diff = new Date() - date; // 차이(ms)

  if (diff < 1000) {
    return "현재";
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return sec + "초 전";
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + "분 전";
  }

  // 날짜의 포맷을 변경
  // 일, 월, 시, 분이 숫자 하나로 구성되어있는 경우, 앞에 0을 추가해줌
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(), // 숫자를 문자열로 변환해서 slice() 문자열 메서드를 쓰기 위함
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((num) => num.slice(-2)); //  모든 num의 마지막 숫자 2개를 가져옴

  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

// 현재날짜 재포맷 2025-12-05 표기
const today10 = new Date();
const dateString = today10.toLocaleDateString("en-CA");
console.log(dateString);

// JSON과 메서드
let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  },
};

// JSON.stringify 호출 시 무시(안나옴)되는 프로퍼티는 아래와 같습니다.
// 1.함수 프로퍼티 (메서드)
// 2.심볼형 프로퍼티 (키가 심볼인 프로퍼티)
// 3.값이 undefined인 프로퍼티
let jsonUser = JSON.stringify(user, ["name"], 3);
console.log("jsonUser:", jsonUser);
let oldUser = JSON.parse(jsonUser);
console.log(oldUser);

let room = {
  number: 23,
  occupiedBy: "Conference",
};

// 1. 값만 null/undefined로 변경 (키는 남음)
room.occupiedBy = null;
console.log(room);
// { number: 23, occupiedBy: null }  ← 키는 존재

// 2. delete로 속성 자체 제거 (키도 사라짐)
delete room.occupiedBy;
console.log(room);

let room2 = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room2, // meetup은 room2 참조합니다.
};

room2.occupiedBy = meetup; // room2 references meetup

console.log(JSON.stringify(meetup, ["title", "participants"]));
// {"title":"Conference","participants":[{},{}]}

// 2. 배열만
let arr = [1, 2, 3];
console.log(typeof arr);
let strArr = JSON.stringify(arr);
console.log(typeof JSON.stringify(arr));

let numbers = JSON.parse(strArr);

console.log(numbers[1]); // 1

let userDa = {
  title: "Conference",
  date: new Date(2017, 0, 1),
  room,
};

let userData = JSON.stringify(userDa);

let user33 = JSON.parse(userData);

console.log(user33);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup44 = JSON.parse(str, function (key, value) {
  if (key === "date") return new Date(value);
  return value;
});

console.log(meetup44);

// 과제1
let user1 = {
  name: "JOHN Smith",
  age: 35,
};

let jsonUser1 = JSON.stringify(user1);
console.log(jsonUser1);

let parseUser1 = JSON.parse(jsonUser1);
console.log(parseUser1);

// 과제2
let room02 = {
  number: 23,
};

let meetup02 = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room02,
};

room02.occupiedBy = meetup02;
meetup02.self = meetup02;

console.log(room02);
console.log(
  JSON.stringify(meetup02, function replacer(key, value) {
    return key !== "" && value === meetup02 ? undefined : value;
  })
);

// 객체에서 undefined 반환
// { a: 1, b: undefined, c: 3 }
// → '{"a":1,"c":3}'  // 키-값 쌍 전체 제거

// 배열에서 undefined 반환
// [1, undefined, 3]
// → '[1,null,3]'  // null로 변환 (인덱스 유지)
