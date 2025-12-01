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