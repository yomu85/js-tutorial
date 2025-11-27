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

function sayHi20() {
  console.log(`sayHi20: ${this}`);
}

// 객체 없이 호출하기: this == undefined
sayHi20(); // undefined

// ES6 모듈 (.mjs 또는 type: "module")
// ES6 모듈은 자동으로 엄격 모드로 실행됩니다
// "use strict"를 명시하지 않아도 엄격 모드가 적용됨

let user11 = {
  firstName: "보라",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
  sayHi2: () => {
    console.log(this.firstName);
  }
}

// 화살표 함수는 자신만의 this를 가지지 않는다는 점에서 독특합니다. 화살표 함수 안에서 this를 사용하면, 외부에서 this 값을 가져옵니다.
user11.sayHi()
// user11.sayHi2() // error

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user20 = makeUser();

console.log(user20.ref().name);

// 계산기 만들기 과제
let calculator = {
  read() {

  },
  sum() {

  },
  mul() {

  }
}

calculator.read();
alert(calculator.sum())
alert(calculator.mul())