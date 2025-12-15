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

