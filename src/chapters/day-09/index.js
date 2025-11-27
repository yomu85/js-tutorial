let a = { value: 1 };
let b = a;  // 두 변수가 같은 객체 참조

// 메모리:
// a ──┐
//     └──→ { value: 1 }
// b ──┘
a.value = 2;
a = null;  // a에 null 할당

console.log(a)
console.log(b)

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

delete family.father;
delete family.mother.husband;

console.log(family);