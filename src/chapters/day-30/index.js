let animal = {
  eats: true
}

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("흰 토끼");
console.log(rabbit.eats);

function Rabbit2() {
  // 디폴트 prototype:
  // Rabbit.prototype = { constructor: Rabbit }

  let rabbit2 = new Rabbit2();
  console.log(rabbit2.constructor == Rabbit2);
}

function Rabbit3(name) {
  this.name = name;
  console.log(name);
}

let rabbit3 = new Rabbit3("흰 토끼");

console.log(Rabbit3 === Rabbit3.prototype.constructor);  // false

let rabbit3Clone = new rabbit3.constructor("검은 토끼");