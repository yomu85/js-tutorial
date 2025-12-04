// 이터러블의 종류:
// 1. 배열
// 2. 문자열
// 3. Set
// 4. Map
// 5. TypedArray
// 6. arguments
// 7. NodeList
// 8. 기타 [Symbol.iterator]를 구현한 객체

// 핵심 차이: "이전 값 기억"
// 고유 ID 생성
function* uniqueId(prefix = "id") {
  let id = 1;
  while (true) {
    yield `${prefix}-${id++}`;
  }
}

let userIds = uniqueId("user");
let postIds = uniqueId("post");

console.log(userIds.next().value); // user-1
console.log(userIds.next().value); // user-2
console.log(postIds.next().value); // post-1
console.log(postIds.next().value); // post-2
// 각각 독립적으로 증가!

// 애니메이션 프레임
function* frameGenerator() {
  let frame = 0;
  while (true) {
    yield frame++;
  }
}

let frames = frameGenerator();

function animate() {
  let currentFrame = frames.next().value;
  console.log(`Frame: ${currentFrame}`);
  requestAnimationFrame(animate);
}

// 랜덤 색상 일반 함수
// 이게 더 간단하고 좋음!
function randomColor() {
  return `rgb(${(Math.random() * 256) | 0}, ${(Math.random() * 256) | 0}, ${
    (Math.random() * 256) | 0
  })`;
}

setInterval(() => {
  document.body.style.backgroundColor = randomColor();
}, 1000);

// // 상태 유지 불필요 → 일반 함수 ✅
// function randomColor() { }

// // 상태 유지 필요 → Generator ✅
// function* counter() { }
// function* fibonacci() { }
// function* idGenerator() { }

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arr = Array.from(arrayLike); // (*)
console.log(arr);

let range = [1, 2, 3, 4, 5];
let arr2 = Array.from(range, (num) => num * num);

console.log(arr2);

// Map Set
// 객체 – 키가 있는 컬렉션을 저장함
// 배열 – 순서가 있는 컬렉션을 저장함
// 맵은 키가 있는 값이 저장된 컬렉션입니다.
// 셋은 중복이 없는 값을 저장할 때 쓰이는 컬렉션입니다.

// 과제1
function unique(arr) {
  let setArr = new Set(arr);
  return [...setArr];
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

// 과제2
// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // 단어를 글자 단위로 쪼갠 후, 알파벳 순으로 정렬한 다음에 다시 합칩니다.
//     let sorted = word.toLowerCase().split("").sort().join("");
//     map.set(sorted, word);
//   }
//   console.log(map);

//   return Array.from(map.values());
// }

// let arr22 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr22));

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr22 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr22));

// 과제3
let map = new Map();

map.set("name", "John");

let keys = [...map.keys()];

// Error: keys.push is not a function
keys.push("more");
console.log(keys);
