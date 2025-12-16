class Animal {
  constructor(name) {
    this.speed = 0; // 인스턴스에 저장
    this.name = name; // 인스턴스에 저장
  }
  run(speed) { // Animal.prototype에 저장
    this.speed = speed;
    console.log(`${this.name} 은 속도 ${this.speed}로 달립니다.`);
  }
  stop() { // Animal.prototype에 저장
    this.speed = 0;
    console.log(`${this.name}이 멈췄습니다.`);
  }
}

console.log(Animal);           // [class Animal] - 생성자 함수
console.log(Animal.prototype); // { run: f, stop: f, ... } - 메서드 저장소


let animal = new Animal("동물");

console.log(animal.__proto__ === Animal.prototype);

animal.run(10)

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name}가 숨었습니다.`);
  }
  stop() {
    super.stop(); //화살표 함수엔 super가 없습니다.
    this.hide();
  }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5);
rabbit.stop();

function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  }
}

class User extends f("Hello") {

}

new User().sayHi();