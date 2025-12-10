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
    console.log(`안녕, 나는 ${this.name}이야!`);
  }
};

let admin = { name: "관리자" };

// admin은 sayHi 메서드가 없지만, user의 메서드를 빌려씀
user.sayHi.call(admin);  // "안녕, 나는 관리자야!"

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

let person = { name: "철수" };

// 1. call() - 인수를 개별적으로 전달
greet.call(person, "안녕", "!");  // "안녕, 철수!"

// 2. apply() - 인수를 배열로 전달
greet.apply(person, ["안녕", "!"]);  // "안녕, 철수!"

// 3. bind() - 새로운 함수를 반환 (즉시 실행 안 됨)
let boundGreet = greet.bind(person);
boundGreet("안녕", "!");  // "안녕, 철수!"