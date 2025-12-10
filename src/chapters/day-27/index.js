let obj = {
  get propName() {
    // getter, obj.propName을 실행할 때 실행되는 코드
  },
  set propName(value) {
    // setter, obj.propName = value를 실행할 때 실행되는 코드
  }
}

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

user.fullName = "Pete Smith";
console.log(user.fullName); // John Smith

// let user = {
//   get name() {
//     return this._name;
//   },

//   set name(value) {
//     if (value.length < 4) {
//       alert("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
//       return;
//     }
//     this._name = value;
//   }
// };

// user.name = "Pete";
// alert(user.name); // Pete

// user.name = ""; // 너무 짧은 이름을 할당하려 함

function sayHi() {
  console.log('안녕하세요.');
}
setTimeout(sayHi, 1000);

function sayHi2(who, phrase) {
  console.log(`${who} 님, ${phrase}`);
}
setTimeout(sayHi2, 500, "John", "Hello");

setTimeout(() => {console.log('화살표함수')}, 1000);

// 잘못된 코드: 함수를 실행하면 return: undefined가 반환되어 코드가 제대로 동작 안함
setTimeout(sayHi(), 1000);

// let timerId = setTimeout(() => alert("아무런 일도 일어나지 않습니다."), 1000);
// alert(timerId); // 타이머 식별자

// clearTimeout(timerId);
// alert(timerId); // 위 타이머 식별자와 동일함 (취소 후에도 식별자의 값은 null이 되지 않습니다.)

let timerId = setInterval(() => console.log('째깍'), 2000);

setTimeout(() => {clearInterval(timerId); console.log('정지')}, 5000);

// 불필요해보이는 중첩 setTimeout
// let timerId2 = setTimeout(function tick() {
//   alert('째깍');
//   timerId2 = setTimeout(tick, 2000);
// }, 2000)

let start = Date.now();
let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); // 이전 호출이 끝난 시점과 현재 호출이 시작된 시점의 시차를 기록

//   if (start + 100 < Date.now()) alert(times); // 지연 간격이 100ms를 넘어가면, array를 얼럿창에 띄워줌
//   else setTimeout(run); // 지연 간격이 100ms를 넘어가지 않으면 재스케줄링함
// });

// 1~3번: "일단 빠르게 실행해보자" (테스트)
//    ↓
// 4번: "어? 이거 무한루프 아냐?" (경고!)
//    ↓
//    → 강제로 긴 대기 시간 부여 (30~50ms)
//    ↓
// 5번~: "아, 제어되는구나" (정상 모드)
//    ↓
//    → 정상적인 4~5ms 간격 적용

// [1, 2, 2, 41, 47, 48, 53, 58, 63, 68, 73, 78, ...]
//  ↑  ↑  ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑
// 빠름 빠름 빠름 경고! 4ms 빠름 4ms 4ms 4ms 4ms 4ms 4ms

// 과제1
function printNumbers(from, to) {
  let current = from;
  let intervalId = setInterval(() => {
    console.log(current); // 1. 출력
    current++; // 2. 증가

    if (current > to) {        // 3. 다음 값 체크
      clearInterval(intervalId);
    }
  }, 1000)
}

printNumbers(1, 10)

let i = 0;

setTimeout(() => console.log(i), 100);

for(let j = 0; j < 100000000; j++) {
  i++;
}

// setTimeout은 현재 실행 중인 코드의 실행이 종료되었을 때 실행됩니다.
// 반복문 실행이 종료되고 난 후 i는 100000000이 되므로, 얼럿창엔 100000000이 출력됩니다.