let arrNew = new Array();
let arrNew2 = [];
let fruits = ["사과", "오랜지", "자두"]
fruits[3] = '레몬'
console.log(fruits.length)

let arr = ["사과", { name: "이보라"}, true, function() { alert("안녕하세요.")}]
console.log(arr[1].name);
arr.push("바나나")
arr.unshift("나노바나나")
console.log(arr.shift());
arr.push("4k")
console.log(arr.pop())

let fruits2 = ["바나나"]
let arr2 =fruits2;
console.log( arr2 === fruits2);
arr2.push("배");
console.log(fruits2)

let fruits3 = [];
fruits3[99999] = 5;
fruits3.age = 25;
console.log(fruits3.length)
// 잘못된 방법 예시
// arr.test = 5 같이 숫자가 아닌 값을 프로퍼티 키로 사용하는 경우
// arr[0]과 arr[1000]만 추가하고 그사이에 아무런 요소도 없는 경우
// arr[1000], arr[999]같이 요소를 역순으로 채우는 경우

// push와 pop은 빠르지만 shift와 unshift는 느립니다.

let arr3 = ["사과", "오랜지", "배"];

// for (let i=0; i<arr.length; i++) – 가장 빠른 방법이고 오래된 브라우저와도 호환됩니다.
// for (let item of arr) – 배열 요소에만 사용되는 모던한 문법입니다.
// 인덱스 필요한 경우
for(let i = 0; i < arr3.length; i++) {
  // console.log(arr3[i])
}

// 인덱스 필요없는 경우
for (let fruit of fruits) {
  console.log(fruit);
}

//‘length’ 프로퍼티
// length 프로퍼티는 배열 내 요소의 개수가 아니라 가장 큰 인덱스에 1을 더한 값입니다.
// 배열 비울 때 사용 arr.length = 0;

// new Array()
// 예시를 통해 new Array()의 이런 특징이 어떻게 실수를 유발 new Array() 대신 리터럴로 선언
let arr4 = new Array(2);
// new Array(number)을 호출하면 길이가 number인 배열이 만들어지는데, 이 때 요소는 비어있습니다.
console.log(arr4.length);

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, 중심에 있는 요소

let arr5 = [1,2,3]

console.log(arr5);
console.log(String(arr5) === '1,2,3');

// 문자열로의 형 변환
console.log([] + 1);
console.log([1] + 1);
console.log([1, 2] + 1 === '1,21');

// 과제1
let fruits1 = ["사과", "배", "오렌지"];

let shoppingCart = fruits1;
shoppingCart.push("바나나")

console.log(fruits1.length);

// 과제2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);

// 과제3
let arr6 = ["a", "b"];

arr6.push(function() {
  console.log(this);
})
arr6[2]();

// 과제4
function sumInput() {
  let numbers = [];
  while(true) {
    let value = prompt('숫자를 입력해주세요.', 0);

    if(value === null || value === '' || !isFinite(value)) break;
    numbers.push(+value);
  };

  let sum = 0;
  for (let number of numbers) {
    sum += number
  }
  console.log(sum);
}
sumInput()

