let arr = [1, 0, false];

console.log(arr.indexOf(0));
console.log(arr.indexOf(false));
console.log(arr.indexOf(null));
console.log(arr.indexOf(1));
console.log(arr.includes(1));

const arr2 = [NaN];
console.log(arr2.indexOf(NaN)); // -1 NaN 처리안됨
console.log(arr2.includes(NaN)); // true NaN 처리됨x

let result = arr.find(function(item, index, array) {
  // true 반환되면 반복이 멈추고 해당 요소를 반환합니다.
  // 조건에 해당하는 요소가 없으면 undefined 반환합니다.
  // item - 함수를 호출할 요소가
  // index - 요소의 인덱스
  // array - 배열 자기 자신
})

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id === 1)

console.log(user);

let userIndex = users.findIndex(item => item.name === 'John')

console.log(userIndex);

let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length);

// 배열을 변형하는 메서드
// map
let resut = arr.map(function(item, index, array) {
  // 요소 대신 새로운 값을 반환합니다.
})

let lengths = ["Bilbo", "Gandalf", "Nagul"].map(item => item.length);
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
let arr5 = [1, -2, 15, 2, 1, 8].sort((a, b) => a - b)

// 정렬후 reverse 패턴
arr5.sort((a, b) => a - b).reverse();

console.log(arr5);

// 영문, 한글 sorting
let korean = ["하늘", "가을", "나무", "다람쥐"];

korean.sort();
//string.localeCompare(compareString, locales, options)
korean.sort((a, b) => a.localeCompare(b, 'ko'))

console.log(korean);


// String 메서드: 문자열을 배열로
let names = 'Bilbo, Gandalf, Nazgul';

let arr6 = names.split(', ');

console.log(arr6);

for (let name of arr6) {
  console.log(`${name}에게 보내는 메시지`);
}
let str1 = 'test';
console.log(str1.split(''));

// Array 메서드: 배열을 문자열로
let arr7 = ['apple', 'banana', 'cherry'];

let str7 = arr7.join(', ');

console.log(str7);


// reduce 실전
// 합계 계산
let prices = [100, 200, 300]
let total = prices.reduce((sum, price) => sum + price, 0)
console.log(total);

// 배열을 객체로 변환
let users2 = [
  { id: 1, name: 'Kim'},
  { id: 2, name: 'Lee'}
]
let userMap = users2.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc
}, {})

console.log(userMap);

// 그룹핑
let products = [
  { category: 'fruit', name: 'apple' },
  { category: 'fruit', name: 'banana' },
  { category: 'veg', name: 'carrot' },
]

let grouped = products.reduce((acc, item) => {
  // Falsy 값 false, 0, '', null, undefined, NaN
  if(!acc[item.category]) {
    acc[item.category] = []
  }
  // push 메서드를 쓰기 위해 undefined 체크
  acc[item.category].push(item.name);
  return acc;
}, {})

console.log(grouped);

console.log(Array.isArray(grouped.fruit));


let obj = {
  arr: [1, 2, 3],      // 배열
  num: 123,            // 숫자
  str: 'hello',        // 문자열
  obj: { a: 1 }        // 객체
};

// 각각 개별 체크
// console.log(Array.isArray(obj.arr));  // true ✅ (배열)
// console.log(Array.isArray(obj.num));  // false (숫자)
// console.log(Array.isArray(obj.str));  // false (문자열)
// console.log(Array.isArray(obj.obj));  // false (객체)
// console.log(Array.isArray(obj));      // false (객체 전체)

//some() 하나라도 조건 만족
console.log([1, 2, 3, 4, 5].some(num => num > 5)); // false

let fruitProducts = [
  { name: '사과', stock: 0 },
  { name: '바나나', stock: 5 },
  { name: '오랜지', stock: 0 },
]

// 재고가 있는 상품이 하나라도 있나?
let hasStock = fruitProducts.some(fruit => fruit.stock > 0);
console.log(hasStock); //true


// every() 모두 조건이 만족
console.log([2, 4, 6, 8].every(num => num % 2 === 0)); //true

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



