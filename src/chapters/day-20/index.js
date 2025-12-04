// let a = 10;
// let b = 20;
// // ❌ 새로운 값으로 재할당 - 불필요하게 복잡
// [a, b] = [100, 200];

// 구조 분해를 쓰는 이유
// [a, b] = [b, a]; // ✅ swap - 임시 변수 없이 교환
// const [x, y] = getData(); // ✅ 다중 반환값 받기
// const { name } = user; // ✅ 객체에서 추출

// 구조 분해를 안 쓰는 이유
// [a, b] = [1, 2]; // ❌ 단순 할당 - 불필요하게 복잡
// a = 1; // ✅ 이게 더 빠르고 명확
// b = 2;

// ------------------------ //
let [firstName, surname] = "Bora Lee".split(" ");
console.log(firstName);
console.log(surname);

// 두 번째 요소는 필요하지 않음
let [first, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title);

let [a, b, c] = "abc";
console.log(a, b, c);
let [one, two, three] = new Set([1, 2, 3]);
let four = new EventTarget(4);
console.log(typeof one);
console.log(typeof four);

let user = {
  name: "John",
  age: 30,
};

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name: John, age:30이 차례대로 출력
}
let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`);

let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
console.log(name1, name2);
console.log(rest[0]);

let [firstName2 = "Guest", surname2 = "Guest", surname22] = ["Julius"];

console.log(firstName2); // Julius
console.log(surname2); // Guest
console.log(surname22); // undefined

// name의 prompt만 실행됨
let [
  surname3 = prompt("성을 입력하세요."),
  name3 = prompt("이름을 입력하세요."), // 취소 시 null 입력
] = ["김"];

console.log(surname3); // 김 (배열에서 받아온 값)
console.log(name3); // prompt에서 받아온 값

let options = {
  titleOption: "Menu",
  width: 100,
  height: 200,
};

// { 객체 프로퍼티: 목표 변수 }
let { titleOption: t, width, height } = options;

console.log(t); // titleOption -> t
console.log(width);
console.log(height);

let optionMenu = {
  titleMenu: "Menu",
};

let { widthMenu: w = 300, heightMenu: h = 1200, titleMenu } = optionMenu;
console.log(w);
console.log(h);
console.log(titleMenu);

let optionsA = {
  titleA: "Menu",
  widthA: 100,
  heightA: 300,
};

let { titleA, ...restA } = optionsA;

console.log(titleA);
console.log(restA.heightA);

let titleB, widthB, heightB;

({ titleB, widthB, heightB } = { titleB: "Menu", widthB: 200, heightB: 100 });

let optionsExtra = {
  size: {
    width: 1000,
    height: 2000,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

let {
  size: { width: widthExtra, height: heightExtra },
  items: [item1, item2],
  titleExtra = "Menu",
} = optionsExtra;

// console.log("size:", size); 에러 발생
console.log(widthExtra);
console.log(width);
console.log("heightExtra:", heightExtra);
console.log(height);
console.log(item1);
console.log(item2);
console.log(titleExtra);

// 함수에 전달할 객체
let optionsAA = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  console.log(`${title} ${width} ${height}`);
  console.log(`${items}`);
}

showMenu(optionsAA);

let optionsBB = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

function showMenuBB({
  title = "Untitled",
  width: w = 100,
  height: h = 300,
  items = [],
} = {}) {
  console.log(`${title} ${w} ${h}`);
  console.log(`${items}`);
}

showMenuBB(optionsBB);

let optionsCC = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

let { title: varName = "default", ...restCC } = optionsCC;

console.log(varName);
console.log(restCC);

let arrAlpha = ["a", "b", "c", "d", "e"];

let [alpha1 = "A", alpha2, ...restAlpha] = arrAlpha;

console.log(alpha1);
console.log(restAlpha);

// 과제1
let user10 = {
  name10: "John",
  years10: 30,
};

let { name10, years10: age10, isAdmin = false } = user10;

console.log(name10);
console.log(age10);
console.log(isAdmin);

// 과제2
function topSalary(obj) {
  if (Object.keys(obj).length === 0) return null;
  let max = 0;
  let maxName = "";

  for (const [name, salary] of Object.entries(obj)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}
let salaries = {
  Jon: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));
