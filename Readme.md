# 🚀 JavaScript 학습 프로젝트 세팅 가이드

## 📁 최종 폴더 구조

```
js-tutorial/
├── README.md                   # 학습 계획서
├── index.html                  # 대시보드 (루트)
├── package.json
├── vite.config.js             # (선택사항)
└── src/
    ├── main.js                # 메인 진입점
    ├── style.css              # 전역 스타일
    └── chapters/
        ├── day-01/
        │   ├── index.js       # Day 1 학습 코드
        │   └── README.md      # (선택) Day 1 노트
        ├── day-02/
        │   └── index.js
        ├── day-03/
        │   └── index.js
        └── ... (day-49까지)
```

---

## 🛠️ 1단계: 프로젝트 생성

### 터미널에서 실행:

```bash
# Vite 프로젝트 생성
npm create vite@latest js-tutorial -- --template vanilla

# 프로젝트 폴더로 이동
cd js-tutorial

# 의존성 설치
npm install
```

---

## 📝 2단계: 파일 생성 및 수정

### 1) `index.html` (루트) - 대시보드

루트에 있는 기본 `index.html`을 앞서 만든 대시보드 코드로 교체하세요.

### 2) `src/main.js`

앞서 만든 main.js 코드로 교체하세요.

### 3) `src/style.css`

앞서 만든 style.css 코드로 교체하세요.

### 4) `README.md`

루트에 학습 계획 README.md를 생성하세요.

---

## 📂 3단계: chapters 폴더 생성

### 수동으로 폴더 만들기:

```bash
# src 폴더 안에 chapters 폴더 생성
mkdir -p src/chapters/day-01
mkdir -p src/chapters/day-02
mkdir -p src/chapters/day-03
# ... 필요한 만큼 생성
```

### 또는 스크립트로 한번에 생성:

`create-days.js` 파일을 루트에 만들고:

```javascript
import fs from 'fs';
import path from 'path';

const TOTAL_DAYS = 49;

for (let i = 1; i <= TOTAL_DAYS; i++) {
  const dayNum = i.toString().padStart(2, '0');
  const dayPath = path.join('src', 'chapters', `day-${dayNum}`);
  
  // 폴더 생성
  if (!fs.existsSync(dayPath)) {
    fs.mkdirSync(dayPath, { recursive: true });
    console.log(`✓ Created ${dayPath}`);
  }
  
  // index.js 파일 생성
  const indexPath = path.join(dayPath, 'index.js');
  if (!fs.existsSync(indexPath)) {
    const template = `// ========================================
// Day ${i}: 제목을 입력하세요
// ========================================

console.log('📚 Day ${i} 학습 시작!');
console.log('='.repeat(50));

// 여기에 학습 코드를 작성하세요!

console.log('\\n✅ Day ${i} 학습 완료!');
`;
    fs.writeFileSync(indexPath, template);
    console.log(`✓ Created ${indexPath}`);
  }
}

console.log('\\n🎉 모든 Day 폴더가 생성되었습니다!');
```

실행:
```bash
node create-days.js
```

---

## 🚀 4단계: 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 열기

---

## 📖 5단계: 학습 시작!

### 일일 학습 루틴:

1. **`src/main.js` 열기**
2. **오늘 학습할 Day의 import 주석 해제**
   ```javascript
   // 어제 것은 주석 처리
   // import './chapters/day-01/index.js'
   
   // 오늘 것만 활성화
   import './chapters/day-02/index.js'
   ```
3. **저장 (Ctrl+S / Cmd+S)**
4. **브라우저 자동 새로고침됨**
5. **개발자 도구 Console 확인 (F12)**
6. **`src/chapters/day-XX/index.js` 파일에서 학습 코드 작성**

---

## 🎯 학습 팁

### 콘솔에서 사용할 수 있는 명령어:

```javascript
// 진행 상황 확인
showMyProgress()

// Day 완료 표시
completeDay(1)

// 진행 상황 리셋
resetProgress()

// 도움말
help()
```

### 효율적인 학습 방법:

1. **ko.javascript.info 웹사이트 열기**
2. **해당 챕터 읽기 (30분)**
3. **예제 코드를 `day-XX/index.js`에 직접 타이핑 (1.5시간)**
4. **콘솔 결과 확인하며 실험하기**
5. **완료 후 `completeDay(숫자)` 실행**

---

## 🔥 추가 기능 (선택사항)

### Day별 노트 추가:

각 Day 폴더에 `README.md` 파일을 만들어 학습 내용 정리:

```markdown
# Day 1: JavaScript 기초

## 배운 내용
- let과 const의 차이
- 8가지 자료형
- 템플릿 리터럴

## 핵심 요약
...

## 어려웠던 점
...

## 실습 코드
\`\`\`javascript
// 여기에 코드
\`\`\`
```

---

## 🐛 트러블슈팅

### 문제 1: import 오류
```
Failed to resolve module
```
**해결**: 파일 경로가 정확한지 확인하세요. `src/chapters/day-01/index.js`

### 문제 2: 화면에 아무것도 안 보임
**해결**: 
1. `npm run dev` 실행 중인지 확인
2. 브라우저 콘솔(F12)을 확인하세요
3. `index.html`이 루트에 있는지 확인

### 문제 3: Hot reload가 안 됨
**해결**: 
1. 파일 저장했는지 확인 (Ctrl+S)
2. Vite 서버 재시작: `npm run dev` 종료 후 다시 실행

---

## 📦 package.json 예시

```json
{
  "name": "js-tutorial",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.0.8"
  }
}
```

---

## 🎓 학습 완료 후

30일 완주 후에는:

1. **포트폴리오 프로젝트 만들기**
   - 배운 내용을 활용한 실전 프로젝트
   - 예: Todo 앱, 계산기, 미니 게임 등

2. **코드 정리 및 문서화**
   - 각 Day별로 정리한 README 검토
   - 블로그 포스팅

3. **다음 단계 학습**
   - React, Vue 등 프레임워크
   - TypeScript
   - Node.js

---


# 모던 JavaScript 튜토리얼 학습 계획

> 📚 학습 자료: [ko.javascript.info](https://ko.javascript.info/)  
> ⚡ 학습 방식: 속독 + 예제 중심  
> 🎯 목표 기간: 30일

## 📅 학습 시간

- **주중**: 하루 2시간 (이론 30분 + 예제 코딩 1.5시간)
- **주말**: 하루 4시간 (이론 1시간 + 예제 코딩 3시간)

---

## 🗓️ Week 1: 파트1 기초

### Day 1 (월)
- 소개 + 자바스크립트 기본
- 변수, 자료형, 연산자

### Day 2 (화)
- Hello world
- 코드 구조
- 엄격 모드

### Day 3 (수)
- 변수와 상수
- 자료형

### Day 4 (목)
- 형 변환
- 연산자

### Day 5 (금)
- alert, prompt, confirm
- 조건문

### Day 6 (토) - 4시간
- 논리 연산자
- nullish 병합 연산자
- 반복문
- switch문

### Day 7 (일) - 4시간
- 함수 기본
- 함수 표현식
- 화살표 함수

---

## 🗓️ Week 2: 객체 & 자료구조

### Day 8 (월)
- 객체 기본
- 참조에 의한 객체 복사

### Day 9 (화)
- 가비지 컬렉션
- 메서드와 this

### Day 10 (수)
- new 연산자와 생성자 함수
- 옵셔널 체이닝

### Day 11 (목)
- 심볼형
- 객체를 원시형으로 변환하기

### Day 12 (금)
- 원시값의 메서드
- 숫자형

### Day 13 (토) - 4시간
- 문자열
- 배열

### Day 14 (일) - 4시간
- 배열 메서드
- iterable 객체

---

## 🗓️ Week 3: 고급 함수 & 프로토타입

### Day 15 (월)
- Map과 Set
- 위크맵과 위크셋

### Day 16 (화)
- Object.keys, values, entries
- 구조 분해 할당

### Day 17 (수)
- Date 객체
- JSON과 메서드

### Day 18 (목)
- 재귀와 스택
- 나머지 매개변수와 스프레드 문법

### Day 19 (금)
- 변수의 유효범위와 클로저

### Day 20 (토) - 4시간
- 오래된 var
- 전역 객체
- 함수 객체와 NFE

### Day 21 (일) - 4시간
- new Function 문법
- setTimeout과 setInterval
- call/apply와 데코레이터

---

## 🗓️ Week 4: 프로토타입 & 클래스

### Day 22 (월)
- 함수 바인딩
- 프로토타입 상속

### Day 23 (화)
- 함수의 prototype 프로퍼티
- 네이티브 프로토타입

### Day 24 (수)
- 프로토타입 메서드
- 클래스 기본 문법

### Day 25 (목)
- 클래스 상속
- 정적 메서드와 정적 프로퍼티

### Day 26 (금)
- private, protected 프로퍼티
- instanceof로 클래스 확인하기

### Day 27 (토) - 4시간
- 믹스인
- try-catch와 에러 핸들링
- 커스텀 에러

### Day 28 (일) - 4시간
- 콜백
- 프라미스

---

## 🗓️ Week 5: 비동기 & 제너레이터

### Day 29 (월)
- 프라미스 체이닝
- 프라미스와 에러 핸들링

### Day 30 (화)
- 프라미스 API
- 프라미스화

### Day 31 (수)
- async/await

### Day 32 (목)
- 제너레이터
- async 이터레이터와 제너레이터

### Day 33 (금)
- 모듈 소개
- 모듈 내보내기와 가져오기

### Day 34 (토) - 4시간
- 동적으로 모듈 가져오기
- **파트1 총정리**

### Day 35 (일) - 4시간
- **파트1 복습**

---

## 🗓️ Week 6: 브라우저 - DOM 기본

### Day 36 (월)
- 브라우저 환경과 다양한 명세서
- DOM 트리

### Day 37 (화)
- DOM 탐색하기
- getElement*, querySelector*로 요소 검색하기

### Day 38 (수)
- 노드 프로퍼티: type, tag, contents
- 속성과 프로퍼티

### Day 39 (목)
- 문서 수정하기
- 스타일과 클래스

### Day 40 (금)
- 요소 사이즈와 스크롤

### Day 41 (토) - 4시간
- Window 사이즈와 스크롤
- 좌표
- 이벤트 소개

### Day 42 (일) - 4시간
- 버블링과 캡처링
- 이벤트 위임

---

## 🗓️ Week 7: 이벤트 완성

### Day 43 (월)
- 브라우저 기본 동작
- 커스텀 이벤트 디스패치

### Day 44 (화)
- 마우스 이벤트
- 포인터 이벤트

### Day 45 (수)
- 키보드: keydown과 keyup
- 스크롤

### Day 46 (목)
- 폼 프로퍼티와 메서드
- 폼과 컨트롤 요소에 집중하기

### Day 47 (금)
- 페이지 로드 이벤트: DOMContentLoaded, load
- 스크립트: async, defer

### Day 48-49 (토-일) - 8시간
- **전체 복습 및 정리**