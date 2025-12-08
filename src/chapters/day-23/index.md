**실행 컨텍스트 = 함수 실행에 필요한 환경(메모리 공간)**

## 간단히

```javascript
function f() {
  let x = 10;
}

f(1);
```

**실행 컨텍스트 생성 = JavaScript가 자동으로 만드는 것:**

```
┌─────────────────────────┐
│ 실행 컨텍스트 (환경)     │
├─────────────────────────┤
│ - 지역 변수: x = 10     │
│ - arguments: [1]        │
│ - this                  │
│ - 스코프 체인           │
└─────────────────────────┘
```

## 핵심

```javascript
f(1);  // 함수 호출
  ↓
실행 컨텍스트 생성 (자동)
  ↓
- arguments 객체 생성
- 지역 변수 공간 확보
- this 바인딩
  ↓
함수 코드 실행
```

**쉽게 말하면: 함수가 실행되기 위한 "작업 공간"을 만드는 것!**


**아니요!**

## 스코프 체인

**= 변수를 찾는 순서 (안쪽 → 바깥쪽)**

```javascript
let global = '전역';

function outer() {
  let outerVar = '외부';
  
  function inner() {
    let innerVar = '내부';
    console.log(innerVar);   // 1. inner에서 찾기
    console.log(outerVar);   // 2. outer에서 찾기
    console.log(global);     // 3. 전역에서 찾기
  }
}
```

**스코프 체인 = 변수 검색 경로!**

---

## `?.` (옵셔널 체이닝)

**= 다른 개념! ES2020 문법**

```javascript
obj?.property  // obj가 null/undefined면 에러 안 남
```

**스코프 체인과 무관!**