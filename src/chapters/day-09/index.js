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

console.log(`1. Javascript는 엔진 내의 가비지 컬렉터(Garbage Colloector)에서 메모리 관리를 수행한다.
2. 이때 GC 기준은 도달가능성(Reachability)라는 개념이 사용된다.
3. 루트(Root) : 태생부터 도달이 가능하여 명백한 이유없이는 삭제된지 않는 값
- 현재 함수의 지역변수와 매개변수
- 중첩 함수의 체인에 잇는 함수에서 사용되는 변수와 매개변수
- 전역 변수와
- 기타 등등
4. 루트가 참조하는 값이나 체이닝으로 루트에서 참조할 수 있는 값은 도달 가능한 값이다.
5. GC가 자동하는 내부 알고리즘은 "mark-and-sweep"이다.
- 루트(Root)에 접근하여 Mark한다.
- 루트 참조하는 객체에 접근하여 Mark한다.
- 더이상 참조하는 객체가 없을 때까지 객체가 참조하는 객체에 접근하여 Mark한다.
- 더이상 접근할 객체가 없으면, Mark되지 않은 객체를 메모리에서 삭제(Sweep)한다.
※ 중요한 점은, 루트를 출발지로해서 참조가 되어 도달 가능한 객체여야 삭제가 안된다는 점이다. 루트가 접근할 수 없고 루트 없이 서로 참조하는 객체 덩어리를 "도달할 수 없는 섬(Unreachable Island)"이라고 한다.
6. GC 최적화 기법
- generational collection(세대별 수집) : 오래된 객체와 새로운 객체를 구분하여, 새로운 객체는 엄격하게 감시하여 제거하고 오래된 객체는 덜 감시함.
- incremental collection(점진적 수집) : 방문해야할 객체가 많으면 부하가 높아진다. 모든 객체를 한번 다 방문하지말고, 여러부분으로 나누어 점진적으로 GC를 진행한다. 그 차이로 인한 변경사항을 추적하는데 추가작업이 필요하다.
- idle-time collection(유휴 시간 수집) : CPU 부하를 덜 주기위하여, idle 상태에서만 GC를 실행함.`);