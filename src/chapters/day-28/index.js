function deco(num) {
  return num;
}

function cachingDecorator(func) {
  let cache = new Map();
  return function(num) {
    if (cache.has(num)) {
      console.log(`✅ 캐시에서 꺼냄: ${num}`);
      return cache.get(num);
    }
    let result = func(num);
    cache.set(num, result);
    return result;
  }
}

deco = cachingDecorator(deco);

console.log(deco(1));
console.log(deco(1));
console.log(deco(2));
console.log(deco(2));

let worker = {
  someMethod() {
    return 2;
  },
  deco(num) {
    return num * this.someMethod();
  }
}

function cachingDecoratorObj (func) {
  let cache = new Map();
  return function(num) {
    if (cache.has(num)) {
      return cache.get(num)
    }
    let result = func.call(this, num);
    cache.set(num, result);
    return result;
  }
}

worker.deco = cachingDecoratorObj(worker.deco);

console.log(worker.deco(2));

function greet2(greeting) {
  console.log(`${greeting}, 제 이름은 ${this.name}입니다.`);
}

let person1 = { name: "철수" };
let person2 = { name: "영희" };

// call()로 this 지정
greet2.call(person1, "안녕하세요");  // "안녕하세요, 제 이름은 철수입니다."
greet2.call(person2, "반갑습니다");  // "반갑습니다, 제 이름은 영희입니다."

// 일반 호출 (this는 undefined 또는 window)
// greet("안녕하세요");  // "안녕하세요, 제 이름은 undefined입니다."


// 메서드 빌려쓰기
let user = {
  name: "철수",
  sayHi() {
    console.log(`안녕, 나는 ${this.name}야!`);
    return this.name;
  }
}

let admin = {
  name: "백수"
}

console.log(user.sayHi());
console.log(user.sayHi.call(admin));


function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
let person = {
  name: "철수"
}
// 1. call() - 인수를 개별적으로 전달
greet.call(person, "안녕", "!") // "안녕, 철수!"

// 2. apply() - 인수를 배열로 전달
greet.apply(person, ["안녕", "!"])// "안녕, 철수!"

// 3. bind() - 새로운 함수를 반환 (즉시 실행 안 됨)
let bindGreet = greet.bind(person);
bindGreet("안녕", "!");  // "안녕, 철수!"

let workers = {
  slow(min, max) {
    return min + max;
  }
}

function cachingDecorators(func) {
  let cache = new Map();
  return function(...args) {
    let key = JSON.stringify(args); // 문자열로 변환 후 key로 사용

    if (cache.has(key)) {
      console.log(`✅ 캐시에서 꺼냄: ${key}`);
      return cache.get(key);
    }
    let result = func.apply(this, arguments);

    cache.set(key, result);
    return result;
  }
}

workers.slow = cachingDecorators(workers.slow);

console.log(workers.slow(1, 2));
console.log(workers.slow(1, 2));

// 과제1
function work(a, b) {
  console.log(a + b);
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  console.log('call:' + args.join());
}

// 과제2
function f(...args) {
  for (let arg of args) {
    console.log(arg);
  }
}

function delay(func, ms) {
  return function(...args) {
    setTimeout(() => {
      func.apply(this, args);
    }, ms)
  }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test1000", "!");
f1500("test1500", "!");

// 과제3
function debounce(f, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => f.apply(this, arguments), ms);
  }
}

// 과제4
function f4(a) {
  console.log(a);
}

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let f4000 = throttle(f4, 2000);

f4000("1 throttle", 1);
f4000("2 throttle", 2);
f4000("3 throttle", 3);

let userJohn = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
}

let sayHi = userJohn.sayHi.bind(userJohn);

sayHi();

setTimeout(sayHi, 1000);

userJohn = { sayHi() { console.log(`또다른 사용자, ${this.firstName}!`); } };

// setTimeout(() => user.sayHi(), 1000);
// // 1초가 지나기 전에 user의 값이 바뀜

function mul(a, b) {
  return a * b;
}

let triple = mul.bind(null, 3);

console.log( triple(4) );
console.log( triple(5) );
console.log( triple(6) );

// 요새는 bind 대신 화살표 함수

const tripleArrow = (x) => mul(3, x);
console.log(tripleArrow(4));
console.log(tripleArrow(5));
console.log(tripleArrow(6));

// 과제1
function f1() {
  console.log(this)
}

let user1 = {
  g: f1.bind(null)
}

user1.g();

// 과제2
function sayHi2() {
  console.log(this.name)
}
sayHi2.test = 5;

let bound = sayHi2.bind({ name: "John" });

console.log("과제2", bound.test);

// 과제3
function askPassword(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", '');
  if (password == "rockstar") ok();
  else fail();
}

let user3 = {
  name: 'John',

  loginOk() {
    console.log(`${this.name}님이 로그인하였습니다.`);
  },

  loginFail() {
    console.log(`${this.name}님이 로그인에 실패하였습니다.`);
  },

};

askPassword(user3.loginOk.bind(user3), user3.loginFail.bind(user3));

// 과제4
function askPassword4(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", '');
  if (password == "rockstar") ok();
  else fail();
}

let user4 = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' 로그인 성공' : ' 로그인 실패') );
  }
};

askPassword4(() => user4.login(true), () => user4.login(false));

let group = {
  title: "1모둠",
  students: ["보라", "호진", "지민"],

  showList() {
    this.students.forEach(student => {
      // 화살표 함수는 new와 함께 실행할 수 없습니다.
      // 화살표 함수엔 'arguments’가 없습니다
      // 화살표 함수엔 this가 없ㅅ브니다.
      console.log(this.title + ": " + student);
    });
  }
}

group.showList();

// let group2 = {
//   title: "1모둠",
//   students: ["보라", "호진", "지민"],

//   showList() {
//     this.students.forEach(function(student) {
//        // TypeError: Cannot read property 'title' of undefined
//        // 에러는 forEach에 전달되는 함수의 this가 undefined 이어서 발생했습니다. 
//       console.log(this.title + ": " + student);
//     });
//   }
// }

// group2.showList();

// 화살표 함수 없이는.. 아래와 같이 한다.
// function defer(f, ms) {
//   return function(...args) {
//     let ctx = this;
//     setTimeout(function() {
//       return f.apply(ctx, args)
//     }, ms);
//   }
// }

// function sayHi(who) {
//   console.log(`Hello, ${who}!`);
// }

// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John");

// 화살표 함수
function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}

function sayHiArrow(who) {
  console.log(`Hello, ${who}!`);
}

let sayHiDeferred = defer(sayHiArrow, 2000);
sayHiDeferred("John");
