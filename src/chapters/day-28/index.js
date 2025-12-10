function slow(x) {
  // CPU 집약적인 작업이 여기에 올 수 있습니다.
  console.log(`slow(${x}) 호출함`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) { // cache에 해당 키가 있으면
      return cache.get(x); // 대응하는 값을 cache에서 읽어옵니다.
    }
    let result = func(x); // 그렇지 않으면, 원본 함수를 호출하고 결과를 기억해둡니다.

    cache.set(x, result); // 결과를 cache에 저장합니다.
    return result; // 결과를 반환합니다.
  }
}
slow = cachingDecorator(slow);

console.log(slow(1));
console.log(slow(1));
console.log(slow(2));
console.log(slow(2));