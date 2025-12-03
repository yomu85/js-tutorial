// 위크맵은 부차적인 데이터를 저장할 곳이 필요할 때 그 진가를 발휘합니다.
// weakMap.set(john, "비밀문서");
// john이 사망하면, 비밀문서는 자동으로 파기됩니다.
// 위크맵은 맵과 유사한 컬렉션입니다. 위크맵을 구성하는 요소의 키는 오직 객체만 가능합니다.
// 위크맵 키로 사용된 객체가 메모리에서 삭제되면 이에 대응하는 값 역시 삭제됩니다.
// 위크셋은 셋과 유사한 컬렉션입니다. 위크셋엔 객체만 저장할 수 있습니다.
// 위크셋에 저장된 객체가 도달 불가능한 상태가 되면 해당 객체는 메모리에서 삭제됩니다.
let cache = new WeakMap();

// 연산을 수행하고 그 결과를 위크맵에 저장합니다.
function process(obj) {
  if (!cache.has(obj)) {
    let result = obj;

    cache.set(obj, result);

    return cache.get(obj);
  }
}

// 함수 process()를 호출해봅시다.
let obj = {
  apple: 5000,
  banana: 1000,
};
let result1 = process(obj);
let result2 = process(obj);
obj = null;

console.log(cache.size);
