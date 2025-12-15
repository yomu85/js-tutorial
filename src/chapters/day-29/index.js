let animal = {
  eats: true,
  walk() {
    console.log("동물이 걷습니다.");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
}

rabbit.walk = function() {
  console.log("토끼가 깡충깡충 뜁니다.");
}

rabbit.walk();

let longEar = {
  earLength: 10,
  __proto__: rabbit
}

// rabbit.__proto__ = animal;

// 메서드 walk는 프로토타입 체인을 통해 상속받았습니다.
longEar.walk(); // 동물이 걷습니다.
console.log(longEar.jumps); // true (rabbit에서 상속받음)

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// setter 함수가 실행됩니다!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, setter에 의해 추가된 admin의 프로퍼티(name, surname)에서 값을 가져옴
console.log(user.fullName); // John Smith, 본래 user에 있었던 프로퍼티 값

let zootopia = {
  walk() {
    if(!this.isSleeping) {
      console.log(`동물이 걸어갑니다.`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
}

let judy = {
  name: "토끼",
  __proto__: zootopia
}

judy.sleep();

console.log(judy.isSleeping); // true - judy 객체에 직접 설정됨
judy.walk()
console.log(zootopia.isSleeping); // undefined - 프로토타입에는 설정되지 않음
zootopia.walk();

let animal2 = {
  eats: true
};

let rabbit2 = {
  jumps: true,
  __proto__: animal
};

// Object.keys는 객체 자신의 키만 반환합니다.
console.log(Object.keys(rabbit2)); // jumps

// for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
for(let prop in rabbit2) console.log(prop); // jumps, eats


// javascript 메소드 사용 빈도
let obj = {
  name: "John",
  age: 30
};

// 🟢 매우 자주 (90%)
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
obj.prop !== undefined

// 🟡 가끔 (9%)
Object.hasOwn(obj, 'prop')  // 최신 코드베이스
'prop' in obj

// 🔴 거의 안 씀 (1%)
obj.hasOwnProperty('prop')  // 레거시 코드에만 존재

// 과제1
let animal1 = {
  jumps: null
}

let rabbit1 = {
  __proto__: animal1,
  jumps: true
}

console.log(rabbit1.jumps); // true

delete rabbit1.jumps;

console.log(rabbit1.jumps); // null

delete animal1.jumps;

console.log(animal1.jumps); // undefined

// 과제2
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
}

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
}

let pockets = {
  money: 2000,
  __proto__: bed
}

console.log(pockets.pen);
console.log(bed.glasses);

console.time('pockets.glasses 벤치 마크:')
console.log(pockets.glasses); // 0.01904296875 ms
console.timeEnd('pockets.glasses 벤치 마크:')

console.time('head.glasses 벤치 마크:')
console.log(head.glasses); // 0.02001953125 ms 성능 속도는 비슷하다.
console.timeEnd('head.glasses 벤치 마크:')

// 과제3
let animal02 = {
  eat() {
    this.full = true;
  }
}

let rabbit02 = {
  __proto__: animal02
}

rabbit02.eat();

// 과제4
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach = [food];
  }
}

let speedy = {
  __proto__: hamster
}

let lazy = {
  __proto__: hamster
}

speedy.eat("apple");
console.log(speedy.stomach); // apple

// 햄스터 lazy는 먹지 않았기 때문에 빈 배열이 출력된다.
console.log(lazy.stomach);

//프로토타입 체이닝엔 두 가지 제약사항이 있습니다.
// 순환 참조(circular reference)는 허용되지 않습니다. 
// __proto__를 이용해 닫힌 형태로 다른 객체를 참조하면 에러가 발생합니다.
// __proto__의 값은 객체나 null만 가능합니다. 다른 자료형은 무시됩니다.
//여기에 더하여 객체엔 오직 하나의 [[Prototype]]만 있을 수 있다는 
// 당연한 제약도 있습니다. 객체는 두 개의 객체를 상속받지 못합니다.