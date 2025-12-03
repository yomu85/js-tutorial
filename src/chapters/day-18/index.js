// ============================================
// WeakMap 예제: 캐싱과 자동 메모리 관리
// ============================================

// WeakMap의 특징:
// 1. 키는 반드시 객체여야 함 (원시값 불가)
// 2. 키로 사용된 객체가 참조를 잃으면 자동으로 가비지 컬렉션됨
// 3. size 프로퍼티나 keys(), values() 같은 반복 메서드가 없음

// 예제 1: 캐싱 시스템
console.log("=== 예제 1: 캐싱 시스템 ===");
let cache = new WeakMap();

function calculateExpensiveOperation(obj) {
  if (cache.has(obj)) {
    console.log("캐시에서 결과 반환!");
    return cache.get(obj);
  }

  console.log("연산 수행 중...");
  // 무거운 연산 시뮬레이션
  let result = Object.keys(obj).reduce((sum, key) => sum + obj[key], 0);
  
  cache.set(obj, result);
  return result;
}

let product1 = { apple: 5000, banana: 1000, orange: 3000 };
let product2 = { laptop: 1500000, mouse: 30000 };

console.log("첫 번째 호출:", calculateExpensiveOperation(product1)); // 연산 수행
console.log("두 번째 호출:", calculateExpensiveOperation(product1)); // 캐시 사용
console.log("다른 객체:", calculateExpensiveOperation(product2)); // 연산 수행

// 예제 2: 사용자 방문 횟수 추적(실용적이진 않지만 쉬운 예제)
console.log("\n=== 예제 2: 방문 횟수 추적 ===");
let visitCountMap = new WeakMap();

function countVisit(user) {
  let count = visitCountMap.get(user) || 0;
  visitCountMap.set(user, count + 1);
  return count + 1;
}

let user1 = { name: "홍길동", id: 1 };
let user2 = { name: "김철수", id: 2 };

console.log(`${user1.name} 방문:`, countVisit(user1)); // 1
console.log(`${user1.name} 방문:`, countVisit(user1)); // 2
console.log(`${user2.name} 방문:`, countVisit(user2)); // 1
console.log(`${user1.name} 방문:`, countVisit(user1)); // 3


console.log("\n💡 WeakMap 사용 시기:");
console.log("- 객체에 대한 부가 정보를 저장할 때");
console.log("- 캐싱이 필요하지만 메모리 누수를 방지하고 싶을 때");
console.log("- 객체가 사라지면 관련 데이터도 자동으로 정리되길 원할 때");
