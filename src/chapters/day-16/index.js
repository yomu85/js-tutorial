let arr = [1, 0, false];

console.log(arr.indexOf(0));
console.log(arr.indexOf(false));
console.log(arr.indexOf(null));
console.log(arr.indexOf(1));
console.log(arr.includes(1));

const arr2 = [NaN];
console.log(arr2.indexOf(NaN)); // -1 NaN 처리안됨
console.log(arr2.includes(NaN)); // true NaN 처리됨x

let result = arr.find(function (item, index, array) {
  // true 반환되면 반복이 멈추고 해당 요소를 반환합니다.
  // 조건에 해당하는 요소가 없으면 undefined 반환합니다.
  // item - 함수를 호출할 요소가
  // index - 요소의 인덱스
  // array - 배열 자기 자신
});

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id === 1);

console.log(user);

let userIndex = users.findIndex((item) => item.name === "John");

console.log(userIndex);

let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers.length);

// 배열을 변형하는 메서드
// map
let resut = arr.map(function (item, index, array) {
  // 요소 대신 새로운 값을 반환합니다.
});

let lengths = ["Bilbo", "Gandalf", "Nagul"].map((item) => item.length);
console.log(lengths);

let arr3 = [1, 2, 15];

arr3.sort();

console.log(arr3);

// 결론: sort()는 반환값의 부호(양수/0/음수)만 보고, 양수면 swap, 음수나 0이면 유지합니다!
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

let arr4 = [1, 2, 15];

arr4.sort(compareNumeric);

console.log(arr4);

// arr5.sort(function(a, b) {
//   return a - b
// })
// arr5.sort((a, b) => {return a - b})

// 숫자 sorting
let arr5 = [1, -2, 15, 2, 1, 8].sort((a, b) => a - b);

// 정렬후 reverse 패턴
arr5.sort((a, b) => a - b).reverse();

console.log(arr5);

// 영문, 한글 sorting
let korean = ["하늘", "가을", "나무", "다람쥐"];

korean.sort();
//string.localeCompare(compareString, locales, options)
korean.sort((a, b) => a.localeCompare(b, "ko"));

console.log(korean);

// String 메서드: 문자열을 배열로
let names = "Bilbo, Gandalf, Nazgul";

let arr6 = names.split(", ");

console.log(arr6);

for (let name of arr6) {
  console.log(`${name}에게 보내는 메시지`);
}
let str1 = "test";
console.log(str1.split(""));

// Array 메서드: 배열을 문자열로
let arr7 = ["apple", "banana", "cherry"];

let str7 = arr7.join(", ");

console.log(str7);

// reduce 실전
// 합계 계산
let prices = [100, 200, 300];
let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);

// 배열을 객체로 변환
let users2 = [
  { id: 1, name: "Kim" },
  { id: 2, name: "Lee" },
];
let userMap = users2.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

console.log(userMap);

// 그룹핑
let products = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "veg", name: "carrot" },
];

let grouped = products.reduce((acc, item) => {
  // Falsy 값 false, 0, '', null, undefined, NaN
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  // push 메서드를 쓰기 위해 undefined 체크
  acc[item.category].push(item.name);
  return acc;
}, {});

console.log(grouped);

console.log(Array.isArray(grouped.fruit));

let obj = {
  arr: [1, 2, 3], // 배열
  num: 123, // 숫자
  str: "hello", // 문자열
  obj: { a: 1 }, // 객체
};

// 각각 개별 체크
// console.log(Array.isArray(obj.arr));  // true ✅ (배열)
// console.log(Array.isArray(obj.num));  // false (숫자)
// console.log(Array.isArray(obj.str));  // false (문자열)
// console.log(Array.isArray(obj.obj));  // false (객체)
// console.log(Array.isArray(obj));      // false (객체 전체)

//some() 하나라도 조건 만족
console.log([1, 2, 3, 4, 5].some((num) => num > 5)); // false

let fruitProducts = [
  { name: "사과", stock: 0 },
  { name: "바나나", stock: 5 },
  { name: "오랜지", stock: 0 },
];

// 재고가 있는 상품이 하나라도 있나?
let hasStock = fruitProducts.some((fruit) => fruit.stock > 0);
console.log(hasStock); //true

// every() 모두 조건이 만족
console.log([2, 4, 6, 8].every((num) => num % 2 === 0)); //true

// 요소를 더하거나 지우기
// push(...items) – 맨 끝에 요소 추가하기
// pop() – 맨 끝 요소 추출하기
// splice(pos, deleteCount, ...items) – pos부터 deleteCount개의 요소를 지우고, items 추가하기
// slice(start, end) – start부터 end 바로 앞까지의 요소를 복사해 새로운 배열을 만듦

// indexOf/lastIndexOf(item, pos) – pos부터 원하는 item을 찾음. 찾게 되면 해당 요소의 인덱스를, 아니면 -1을 반환함
// includes(value) – 배열에 value가 있으면 true를, 그렇지 않으면 false를 반환함
// find/filter(func) – func의 반환 값을 true로 만드는 첫 번째/전체 요소를 반환함
// findIndex는 find와 유사함. 다만 요소 대신 인덱스를 반환함

//배열 전체 순회하기
// forEach(func) – 모든 요소에 func을 호출함. 결과는 반환되지 않음

// 배열 변형하기
// map(func) – 모든 요소에 func을 호출하고, 반환된 결과를 가지고 새로운 배열을 만듦
// sort(func) – 배열을 정렬하고 정렬된 배열을 반환함
// reverse() – 배열을 뒤집어 반환함
// split/join – 문자열을 배열로, 배열을 문자열로 변환함
// reduce(func, initial) – 요소를 차례로 돌면서 func을 호출함. 반환값은 다음 함수 호출에 전달함. 최종적으로 하나의 값이 도출됨

// 기타
// Array.isArray(arr) – arr이 배열인지 여부를 판단함

// 과제 1
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// 과제2
function filterRange(arr, min, max) {
  return arr.filter((num) => min <= num && num <= max);
}

let arr20 = [5, 3, 8, 1];

let filtered = filterRange(arr20, 1, 4);

console.log(filtered);
console.log(arr20);

// 과제3
// let arr21 = [5, 3, 8, 1];
// function filterRangeInPlace(arr, min, max) {
//    arr21 = arr.filter(num => (min <= num && num <= max))
// }

// filterRangeInPlace(arr21, 1, 4)

// console.log(arr21);

// 과제4
function filterRangeInPlace(arr, min, max) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // 범위 밖의 요소를 제거
    if (val < min || val > max) {
      arr.splice(i, 1);
      i--; // 조건의 만족하면 1개가 삭제되서 i-- 처리
    }
  }
}

let arr21 = [5, 3, 8, 1];
let original = arr21;

filterRangeInPlace(arr21, 1, 4);

console.log(arr21);
console.log(original);
console.log(arr21 === original);

// some()   // "혹시 나한테 관심 있는 사람 있나?" ❤️
// every()  // "모두 나를 좋아해줬으면..." 💔
// find()   // "이상형 찾기" 🔍
// filter() // "내 스타일만 모아보기" ✨

// map()     // "인생 리뉴얼" 🔄
// reduce()  // "인생 정산" 💰
// sort()    // "인생 재정비" 📊
// reverse() // "인생 역주행" ⏪

// push()    // "짐 싣기" 📦
// pop()     // "짐 빼기" 📤
// shift()   // "새치기 당하기" 😤
// unshift() // "새치기 하기" 😈
// splice()  // "수술" ✂️
// slice()   // "복사본 뜯기" 📋

// ---
// 파괴형
// push()      // 끝에 추가
// pop()       // 끝에서 제거
// splice()    // 중간 추가/제거
// sort()      // 정렬
// reverse()   // 뒤집기

// 비파괴형
// map()       // 변환
// filter()    // 필터링
// slice()     // 자르기
// concat()    // 합치기
// flat()      // 평탄화
// flatMap()   // map + flat

// 반환만 하는 애들 (배열 안 만듬)
// find()      // 요소 찾기
// findIndex() // 인덱스 찾기
// includes()  // 포함 확인
// some()      // 하나라도 true?
// every()     // 모두 true?
// reduce()    // 집계 (원하는 타입 반환)
// forEach()   // 순회 (undefined 반환)

// 과제5
let arr50 = [5, 2, 1, -10, 8];

console.log(arr50.sort((a, b) => b - a));
//console.log(arr50.sort((a, b) => a - b).reverse());

// 과제6
function copySorted(arr) {
  //return arr.slice().sort((a, b) => a.localeCompare(b, 'ko'))
  return [...arr].sort((a, b) => a.localeCompare(b, "ko"));
}
let arr51 = ["HTML", "Javascript", "CSS"];

let sorted = copySorted(arr51);

console.log("sorted:", sorted);
console.log("arr51:", arr51);

function Calculator() {
  this.calculate = function (param) {
    // 1-1 숫자 분리
    let numbers = param
      .split(/[\+\-\*\/]/)
      .map((item) => item.trim())
      .map(Number);

    // 1-2 연산자 찾기
    let operator = param.match(/[\+\-\*\/]/)[0];

    // 1-3 계산
    let [a, b] = numbers;

    if (operator === "+") {
      return a + b;
    } else if (operator === "-") {
      return a - b;
    } else if (operator === "*") {
      return a * b;
    } else if (operator === "/") {
      return a / b;
    }
  };
}
let calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10
console.log(calc.calculate("10 - 5")); // 5
console.log(calc.calculate("10 * 5")); // 50
console.log(calc.calculate("10 / 5")); // 2

// 과제7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users70 = [john, pete, mary];

let names70 = users70.map((item) => item.name);

console.log(names70); //jone. pete. mary

// 과제8
let john8 = { name: "John", surname: "Smith", id: 1 };
let pete8 = { name: "Pete", surname: "Hunt", id: 2 };
let mary8 = { name: "Mary", surname: "Key", id: 3 };

let user8 = [john8, pete8, mary8];

let usersMapped = user8.a;
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 },
// ];

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
