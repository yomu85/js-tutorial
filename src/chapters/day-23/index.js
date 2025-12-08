function sum(a, b) {
  return a + b;
}

console.log( sum(1, 2, 3, 4, 5) );

function sumAll(...args) {
  let sum = 0;
  for( let arg of args) {
    sum += arg;
  }
  return sum
}

console.log(sumAll(1, 2, 3, 4, 5));

// 매개변수를 배열로 받기
function showName(firstName, lastName, ...argNames) {
  console.log(firstName + ' ' + lastName);
  console.log(argNames[0]);
  console.log(argNames[1]);
  console.log('argNames.length:', argNames.length);

}

showName("Bora", "Lee", "Software Engineer", "Researcher");

// function f(arg1, ...rest, arg2) { // ...rest 후에 arg2가 있으면 안 됩니다.
//   // 에러
// }

function f() {
  let showArg = () => console.log(arguments[0]);
  showArg();
}

f(1); // 1

// 앞서 배운 바와 같이 화살표 함수는 자체 this를 가지지 않습니다. 
// 여기에 더하여 위 예시를 통해 화살표 함수는 arguments 객체를 지원하지 않는다는 것을 
// 확인해 보았습니다.

console.log(Math.max(1, 2, 3, 4, 5));

let arr = [3, 5, 1];

console.log(Math.max(...arr));

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 1, -2];

console.log(Math.max(...arr1, ...arr2));
console.log(Math.max(1, ...arr1, ...arr2, 25));

let arrx1 = [3, 5, 1]
let arrx2 = [8, 9, 15]
let merged = [0, ...arrx1, ...arrx2, 100];

console.log(merged);

let str = "Hello";

console.log([...str]);
console.log(Array.from(str));

let arr3 = [1, 2, 3];
let arr3Copy = [...arr3];