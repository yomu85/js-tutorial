// 배열은 객체입니다
const arr = [1, 2, 3];
const obj = {};  // '객체 리터럴' 문법

console.log(typeof arr);  // "object" ✅
console.log(Array.isArray(arr));  // true (배열 확인용)

console.log(Array.isArray(obj));  // true (배열 확인용)

let user = {     // 객체
  name: "John",  // 키: "name",  값: "John"
  age: 30,        // 키: "age", 값: 30
  "likes birds": true,  // 복수의 단어는 따옴표로 묶어야 합니다.
};

delete user.name
console.log(user.name);  // John

const user2 = {
  name: "John"
};

user2.name = "Pete"; // (*)

console.log(user2.name); // Pete

// 키가 유효한 변수 식별자가 아닌 경우엔 점 표기법 대신에 '대괄호 표기법(square bracket notation)'이라 불리는 방법을 사용할 수 있습니다. 대괄호 표기법은 키에 어떤 문자열이 있던지 상관없이 동작합니다.

let user3 = {};

// set
user3["likes birds"] = true;

// get
console.log(user3["likes birds"]); // true

// delete
delete user["likes birds"];

// let user4 = {
//   name: "John",
//   age: 30
// };

// let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");

// // 변수로 접근
// console.log( user4[key] ); // John (프롬프트 창에 "name"을 입력한 경우)

// let user5 = {
//   name: "John",
//   age: 30
// };

// let key2 = "name";
// console.log( user5.key2 ) // undefined

// let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

// let bag = {
//   [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
// };

// console.log( bag.apple ); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.

function makeUser6(name, age) {
  return {
    name: name,
    age: age,
    // ...등등
  };
}

let user6 = makeUser6("John", 30);
console.log(user6.name); // John

let user7 = {
  name,  // name: name 과 같음
  age: 30
};

console.log(user7.name); // John

let obj2 = {
  0: "test" // "0": "test"와 동일합니다.
};

// 숫자 0은 문자열 "0"으로 변환되기 때문에 두 얼럿 창은 같은 프로퍼티에 접근합니다,
console.log( obj2["0"] ); // test
console.log( obj2[0] ); // test (동일한 프로퍼티)

let obj3 = {};
obj3.__proto__ = 5; // 숫자를 할당합니다.
console.log(obj3.__proto__);

// ‘in’ 연산자로 프로퍼티 존재 여부 확인하기
// 자바스크립트 객체의 중요한 특징 중 하나는 다른 언어와는 달리, 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환한다는 것입니다.
// 이런 특징을 응용하면 프로퍼티 존재 여부를 쉽게 확인할 수 있습니다.

let user8 = {};

console.log( user8.noSuchProperty === undefined );

let arong = { name: "아롱이", age: 36 };

console.log("아롱이의 나이가 존재하는가?", "age" in arong );

let key = "zipcode";
console.log("아롱이의 주소가 존재하는가?", key in arong );

let obj4 = {
  test: undefined
};

console.log( obj4.test ); // 값이 `undefined`이므로, 얼럿 창엔 undefined가 출력됩니다. 그런데 프로퍼티 test는 존재합니다.

console.log( "test" in obj4 ); // `in`을 사용하면 프로퍼티 유무를 제대로 확인할 수 있습니다(true가 출력됨).

let user5 = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user5) {
  // 키
  console.log( key );  // name, age, isAdmin
  // 키에 해당하는 값
  console.log( user5[key] ); // John, 30, true
}

// 빈 객체 user를 만듭니다.
//  const object2 = new Object();
const object = {};
// user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
 object.name = "John";
 
// user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
 object.surname = "Smith";
// name의 값을 Pete로 수정해보세요.
 object.name = "Pete";
// user에서 프로퍼티 name을 삭제하세요.
 delete object.name;

console.log(object);

const schedule = {}

// schedule["8:30"] = "get up";

// 객체가 비어있는지 확인하는 함수
function isEmpty(obj) {
  for (let key in obj) {
    console.log("실행됨");  // 🚫 실행 안 됨!
    return false;
  }
  return true;
}

console.log("schedule is empty?", isEmpty(schedule));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
function calcTotalSalary(values) {
  for (let key in values) {
    sum += values[key];
  }
  return sum;
}

console.log(calcTotalSalary(salaries));


// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiplyNumeric(menu));