// let id = Symbol("id");

// console.log(id.description);

let user10 = {
  name: "John"
}

let id = Symbol("id")

user10[id] = 1;

console.log( user10[id] );

let user2 = { name: "John" };

// 문자열 "id"를 사용해 식별자를 만들었습니다.
user2.id = "스크립트 id 값";

// 만약 제3의 스크립트가 우리 스크립트와 동일하게 문자열 "id"를 이용해 식별자를 만들었다면...

user2.id = "제3 스크립트 id 값"
// 의도치 않게 값이 덮어 쓰여서 우리가 만든 식별자는 무의미해집니다.

// Simbol 사용처 불분명해서 배움 중지


let user3 = {name: "John"};

console.log(user3); // [object Object]
console.log(user3.valueOf() === user3); // true

let user4 = {
  name: "John",
  money: 1000,

  // hint가 "string"인 경우
  toString() {
    return `{name: "${this.name}"}`;
  },

  // hint가 "number"나 "default"인 경우
  valueOf() {
    return this.money;
  }

};

console.log(user4.toString); // toString -> {name: "John"}
console.log(+user4); // valueOf -> 1000
console.log(user4 + 500); // valueOf -> 1500

let user5 = {
  name: "John",
  money: 1000,
  
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    // hint 값에 따라 다른 값을 반환
    return hint == "string" ? this.name : this.money;
  }
};

console.log(user5);      // hint: string → "John"
console.log(+user5);     // hint: number → 1000
console.log(user5 + 1);  // hint: default → 1001

let obj = { name: "John", age: 30 };

// 1. 명시적으로 문자열 변환할 때
let str = 1000;  // "[object Object]"

// 2. 디버깅할 때
console.log(typeof str.toString());

// 3. 커스텀 toString 구현했을 때
let user = {
  name: "John",
  toString() {
    return `User: ${this.name}`;
  }
};
console.log(user.toString());  // "User: John"

// 실무에서 쓰이는 패턴
// 날짜 객체
let date = new Date();
console.log("date:", date);  // "Fri Nov 28 2025 ..."
console.log(date.toString());  // "Fri Nov 28 2025 ..."

// 배열
console.log("[1, 2, 3]:", [1, 2, 3]);
console.log([1, 2, 3].toString());  // "1,2,3"

// 커스텀 객체 - 디버깅용
class Person {
  constructor(name) {
    this.name = name;
  }
  
  toString() {
    return `Person(${this.name})`;
  }
}

let person = new Person("John");
console.log(person);  // "Person(John)"
console.log(person.toString());  // "Person(John)"
console.log(person + "");  // "Person(John)"

