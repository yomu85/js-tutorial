let user = {
  name: "John",
  age: 30
}

function sayHi() {
  console.log("안녕하세요");
}

user.sayHi = sayHi;

user.sayHi();

// 과거 방식
let user2 = {
  sayHi: function() {
    console.log("안녕하세요");
  }
}

// 최신 방식
let user3 = {
  name: "석지성",
  sayHi() {
    console.log(`${this.name}님, 안녕하세요`);
  }
}

user3.sayHi()

// 에러 유형

let user4 = {
  name: "석지성",
  age: 40,

  sayHi() {
    console.log(`${this.name}님, 안녕하세요`);
  }
}

let admin4 = user4;
user4 = null;

admin4.sayHi();

let user10 = { name: "John" };
let admin10 = { name: "Admin" };

function sayHi10() {
  console.log(this.name);
}

// 별개의 객체에서 동일한 함수를 사용함
user10.f = sayHi10;
admin10.f = sayHi10;

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// this 값이 달라짐
user10.f(); // John  (this == user)
admin10.f(); // Admin  (this == admin)

admin10['f'](); // Admin (점과 대괄호는 동일하게 동작함)