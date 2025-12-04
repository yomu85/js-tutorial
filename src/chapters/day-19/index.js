let user = {
  name: "Violet",
  age: 30,
};

// 값을 순회합니다.
for (let value of Object.values(user)) {
  console.log(value);
}

let prices = {
  banana: 1,
  orage: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 객체로 변환
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices);

// 과제1
function sumSalaries(obj) {
  let sum = 0;
  // Object.values(obj).forEach((value) => {
  //   sum += value;
  // });
  for (let value of Object.values(obj)) {
    sum += value;
  }
  return sum;
}
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));

// 과제2
function count(obj) {
  return Object.keys(obj).length;
}
let user2 = {
  name: "John",
  age: 30,
};

console.log(count(user2));
