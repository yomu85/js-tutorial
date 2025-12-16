// class MyClass {
//   constructor() {
//     console.log('MyClass 인스턴스 생성');
//   }
//   method1() {
//     console.log('method1 호출');
//   }
//   method2() {
//     console.log('method2 호출');
//   }
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }

// // 클래스는 함수입니다.
// console.log(typeof User); // function

// // 정확히는 생성자 메서드와 동일합니다.
// console.log(User === User.prototype.constructor); // true

// // 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
// console.log(User.prototype.sayHi); // console.log(this.name);

// // 현재 프로토타입에는 메서드가 두 개입니다.
// console.log(Object.getOwnPropertyNames(User.prototype)); // [ 'constructor', 'sayHi' ]

// // 사용법:
// let user = new User("John");
// user.sayHi();

// 1. 생성자 함수를 만듭니다.
// function User(name) {
//   this.name = name;
// }

// // 2. 프로토타입에 메서드를 추가합니다.
// User.prototype.sayHi = function() {
//   console.log(this.name);
// }

// // 사용법
// let user = new User("John");
// user.sayHi();

// class User {
//   constructor() {}
// }

// console.log(typeof User);
// // User();
// console.log(User);


// 기명 함수 표현식
// let User = class MyClass {
//   sayHi() {
//     console.log("Hello");
//   }
// }

// new User().sayHi();

// console.log(MyClass); // ReferenceError: MyClass is not defined, MyClass는 클래스 밖에서 사용할 수 없습니다.

// function makeClass(phrase) {
//   // 클래스를 선언하고 이를 반환함
//   return class {
//     sayHi() {
//       alert(phrase);
//     };
//   };
// }

// // 새로운 클래스를 만듦
// let User = makeClass("안녕하세요.");

// new User().sayHi(); // 안녕하세요.

// class User {

//   constructor(name) {
//     // setter를 활성화합니다.
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 2) {
//       console.log(`${value} 이름이 너무 짧습니다.`);
//       return;
//     }
//     this._name = value;
//   }

// }

// let user = new User("보라");
// console.log(user.name);

// user = new User("a"); // a 이름이 너무 짧습니다
// console.log(user.name); // undefined

// class User {
//   ['say' + 'Hi']() {
//     console.log("Hello");
//   }
// }

// const methodName = 'sayHi';

// class User {
//   [methodName]() {  // ✅ 대괄호 필요!
//     console.log("Hi");
//   }
// }


// new User().sayHi();

// class User {
//   name = "보라";

//   sayHi() {
//     alert(`${this.name}님 안녕하세요!`);
//   }
// }

// new User().sayHi(); // 보라님 안녕하세요!


// class User {
//   name = "보라";
//   age = 25;
  
//   constructor() {
//     console.log("1. constructor 시작");
//     console.log("2. this:", this);
//   }
// }

// const user = new User();
// // 출력:
// // 1. constructor 시작
// // 2. this: User { name: "보라", age: 25 }  ← 이미 할당되어 있음!

// class User {
//   name = prompt("이름을 알려주세요.", "보라");
// }

// let user = new User();
// alert(user.name); // 보라

class User {
  // 기본값이 있는 프로퍼티 → 클래스 필드로
  country = "Korea";
  role = "user";
  
  // 인스턴스마다 다른 값 → constructor로
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("보라", 25);
console.log(user1.country);
console.log(user1.role);
console.log(user1);
// { country: "Korea", role: "user", name: "보라", age: 25 }

const user2 = new User("철수", 30);
console.log(user2);
// { country: "Korea", role: "user", name: "철수", age: 30 }

// class Button {
//   constructor(value) {
//     this.value = value;
//   }

//   click = () => {
//     console.log(this.value);
//   }
// }

// let button = new Button("안녕하세요?");

// // setTimeout(() => button.click(), 1000)
// setTimeout(button.click, 1000)

// class Button {
//   constructor(value) {
//     this.value = value;
    
//     // 상황 1: 일반 함수를 변수에 할당
//     this.normalFunc = function() {
//       console.log(this.value);
//     };
    
//     // 상황 2: 화살표 함수를 변수에 할당
//     this.arrowFunc = () => {
//       console.log(this.value);
//     };
//   }
// }

// const button = new Button("테스트");

// const f1 = button.normalFunc;
// const f2 = button.arrowFunc;

// f1();  // ❌ undefined (this 손실!)
// f2();  // ✅ "테스트" (this 유지!)

// ✅ 클래스: constructor가 스코프를 만듦
// class Button {
//   constructor() {
//     this.value = "테스트";
//     // ← 여기 this = Button 인스턴스
    
//     this.func = () => {
//       console.log(this.value);
//       // ← 이 this는 위의 this (Button 인스턴스)를 캡처!
//     };
//   }
// }

// const btn = new Button();
// btn.func();  // "테스트" ✅
// const f = btn.func;
// f();  // "테스트" ✅ (this 유지!)


class MyClass {
  prop = "초기값"; // 클래스 필드

  constructor() { // 생성자 메서드
    console.log(this.prop);
  }

  method() { // 메서드
    console.log(this.prop);
  }

  get prop() { // getter 메서드
    return this._prop;
  }
  
  set prop(value) { // setter 메서드
    this._prop = value;
  }
}

// 과제1
class Clock {
 constructor(options) {
  this.template = options.template
 }

 render() {
  const date = new Date();
  let hours = date.getHours();
  if (hours < 10)  hours = '0' + hours;
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;

  this.theMessage = this.template.replace('h', hours).replace('m', minutes).replace('s', seconds)
  console.log(this.theMessage);
 }

 start() {
  this.render()
  this.timer = setInterval(() => this.render(), 1000)
 }

 stop() {
  clearInterval(this.timer)
 }
}

const clock = new Clock({template: 'h시m분s초'});
clock.start();