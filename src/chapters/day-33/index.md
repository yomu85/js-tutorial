┌─────────────┐
│   Animal    │ ← 클래스 (생성자 함수)
└──────┬──────┘
       │ .prototype 프로퍼티
       ↓
┌─────────────────────┐
│ Animal.prototype    │ ← 메서드 저장소
├─────────────────────┤
│ constructor: Animal │
│ run: function       │
│ stop: function      │
└─────────────────────┘
       ↑
       │ [[Prototype]] (상속)
       │
┌─────────────────────┐
│ animal 인스턴스     │
├─────────────────────┤
│ name: "동물"        │
│ speed: 0            │
└─────────────────────┘

``` javascript
animal.run(5);
```

**검색 순서:**

1. animal 자체에 run이 있나? → 없음
2. animal.__proto__ (= Animal.prototype)에 run이 있나? → 있음! ✅
3. run 실행!

``` javascript
class Animal {
  run() { console.log("달린다"); }
}

class Rabbit extends Animal {
  hide() { console.log("숨는다"); }
}

let rabbit = new Rabbit("토끼");
```

**프로토타입 체인:**

rabbit
  ↓ [[Prototype]]
Rabbit.prototype { hide: f }
  ↓ [[Prototype]]
Animal.prototype { run: f }
  ↓ [[Prototype]]
Object.prototype
  ↓ [[Prototype]]
null
