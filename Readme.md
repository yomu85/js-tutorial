# 🚀 JavaScript 학습 프로젝트 - 49일 완주 챌린지

> 📚 학습 자료: [ko.javascript.info](https://ko.javascript.info/)  
> ⚡ 학습 방식: 이론 + 실습 중심  
> 🎯 목표: 49일간 체계적으로 JavaScript 마스터하기

---

## 📁 프로젝트 구조

```
js-tutorial/
├── README.md                   # 이 파일
├── index.html                  # 학습 대시보드 (메인)
├── package.json
├── vite.config.js             # (선택사항)
└── src/
    ├── main.js                # 메인 진입점
    ├── style.css              # 전역 스타일
    └── chapters/
        ├── day-01/
        │   └── index.js       # Day 1 학습 코드
        ├── day-02/
        │   └── index.js
        └── ... (day-49까지)
```

---

## 🛠️ 빠른 시작

### 1단계: 프로젝트 생성

```bash
# Vite 프로젝트 생성
pnpm create vite@latest js-tutorial -- --template vanilla

# 프로젝트 폴더로 이동
cd js-tutorial

# 의존성 설치
pnpm install
```

### 2단계: 폴더 및 파일 생성

#### 자동 생성 스크립트 (권장)

루트에 `create-days.js` 파일 생성:

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

### 3단계: 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 `http://localhost:5173` 접속 🎉

---

## 📖 학습 방법

### 일일 학습 루틴 (2시간)

1. **ko.javascript.info 웹사이트에서 해당 챕터 읽기** (30분)
2. **`src/main.js`에서 오늘 학습할 Day의 import 활성화**
   ```javascript
   // 어제 것은 주석 처리
   // import './chapters/day-01/index.js'; window.__currentDay = 1;
   
   // 오늘 것만 활성화
   import './chapters/day-02/index.js'; window.__currentDay = 2;
   ```
3. **파일 저장 (Ctrl+S / Cmd+S)** - 브라우저 자동 새로고침됨
4. **개발자 도구 Console 확인 (F12)**
5. **`src/chapters/day-XX/index.js`에서 학습 코드 직접 타이핑** (1.5시간)
6. **결과 확인하며 실험하기**

---

## 📅 49일 커리큘럼 상세

### 🗓️ Week 1: 자바스크립트 기본 (7일)

| Day | 주제 | 내용 |
|-----|------|------|
| 1 | 시작하기 | 소개, Hello world, 코드 구조, 엄격 모드 |
| 2 | 변수와 자료형 | 변수, 상수, 자료형, typeof |
| 3 | 상호작용과 형변환 | alert/prompt/confirm, 형 변환 |
| 4 | 연산자 | 기본 연산자, 비교 연산자 |
| 5 | 조건문과 논리 연산 | if/else, 논리 연산자, nullish 병합 |
| 6 | 반복문 | while, for, switch문 |
| 7 | 함수 기본 | 함수 선언, 함수 표현식, 화살표 함수 |

### 🗓️ Week 2: 객체 기본 (7일)

| Day | 주제 | 내용 |
|-----|------|------|
| 8 | 객체 | 객체 기본, 참조에 의한 복사 |
| 9 | 가비지 컬렉션 | 메모리 관리, 가비지 컬렉션 |
| 10 | 메서드와 this | 메서드, this, 체이닝 |
| 11 | 생성자와 옵셔널 체이닝 | new 연산자, 옵셔널 체이닝 |
| 12 | 심볼과 형 변환 | Symbol, 객체를 원시형으로 변환 |
| 13 | 원시값 메서드 | 원시값 메서드, 숫자형 |
| 14 | 문자열 | 문자열 메서드 |

### 🗓️ Week 3: 자료구조와 Date (7일)

| Day | 주제 | 내용 |
|-----|------|------|
| 15 | 배열 기본 | 배열, 배열 메서드 기초 |
| 16 | 배열 메서드 | map, filter, reduce 등 |
| 17 | iterable 객체 | iterable, Map, Set |
| 18 | WeakMap과 WeakSet | WeakMap, WeakSet |
| 19 | Object 메서드 | Object.keys/values/entries |
| 20 | 구조 분해 할당 | 배열/객체 구조 분해 |
| 21 | Date와 JSON | Date 객체, JSON 메서드 |

### 🗓️ Week 4: 함수 심화 (7일)

| Day | 주제 | 내용 |
|-----|------|------|
| 22 | 재귀와 스택 | 재귀, 실행 컨텍스트 |
| 23 | 나머지 매개변수 | rest, spread 문법 |
| 24 | 변수 스코프 | 클로저, 렉시컬 환경 |
| 25 | var와 전역 객체 | var, 전역 객체 |
| 26 | 함수 객체 | NFE, new Function |
| 27 | 스케줄링 | setTimeout, setInterval |
| 28 | call/apply/bind | 데코레이터, 함수 바인딩 |

### 🗓️ Week 5: 프로토타입과 클래스 (7일)

| Day | 주제 | 내용 |
|-----|------|------|
| 29 | 프로토타입 상속 | 프로토타입 체이닝 |
| 30 | 프로토타입 심화 | F.prototype, 네이티브 프로토타입 |
| 31 | 프로토타입 메서드 | 프로토타입 메서드 |
| 32 | 클래스 기본 | class 문법 |
| 33 | 클래스 상속 | extends, super |
| 34 | 정적 프로퍼티 | static, private/protected |
| 35 | 클래스 확장 | instanceof, 믹스인 |

### 🗓️ Week 6: 에러 핸들링과 비동기 (7일)

| Day | 주제 | 내용 |
|-----|------|------|
| 36 | 에러 핸들링 | try-catch, 커스텀 에러 |
| 37 | 콜백과 프라미스 | 콜백, Promise 기본 |
| 38 | 프라미스 체이닝 | then, catch, finally |
| 39 | 프라미스 API | Promise.all/race/allSettled |
| 40 | async/await | async 함수, await |
| 41 | 제너레이터 | function*, yield |
| 42 | async 이터레이터 | async 제너레이터, for await |

### 🗓️ Week 7: 브라우저와 DOM (7일)

| Day | 주제 | 내용 |
|-----|------|------|
| 43 | 브라우저 환경과 DOM | 브라우저 환경, DOM 트리 |
| 44 | DOM 탐색 | DOM 탐색, querySelector |
| 45 | 노드 프로퍼티 | 노드 타입, 속성과 프로퍼티 |
| 46 | 문서 수정 | 요소 생성, 삽입, 삭제 |
| 47 | 스타일과 클래스 | className, classList, style |
| 48 | 요소 사이즈와 스크롤 | offsetWidth, scrollTop, 좌표 |
| 49 | 이벤트 기본 | 이벤트 핸들러, 버블링, 캡처링 |

---

## 🎯 학습 팁

### ✨ 효과적인 학습 전략

1. **타이핑으로 배우기**: 예제 코드를 복사하지 말고 직접 타이핑하세요
2. **실험하기**: 코드를 수정해보고 결과를 관찰하세요
3. **주석 달기**: 이해한 내용을 한글로 주석으로 남기세요
4. **복습하기**: 일주일에 한 번씩 이전 내용을 복습하세요
5. **응용하기**: 배운 내용으로 작은 프로젝트를 만들어보세요

### 📝 선택사항: Day별 노트 작성

각 Day 폴더에 `README.md` 파일 생성:

```markdown
# Day X: 제목

## 🎯 학습 목표
- 목표 1
- 목표 2

## 📚 핵심 개념
### 개념 1
설명...

### 개념 2
설명...

## 💡 새로 배운 내용
- 내용 1
- 내용 2

## 🤔 어려웠던 점
- 어려웠던 점과 해결 방법

## 💻 실습 코드
\`\`\`javascript
// 중요한 코드
\`\`\`

## 🔗 참고 자료
- [ko.javascript.info 링크](https://ko.javascript.info/...)
```

---

## 🐛 트러블슈팅

### 문제 1: import 오류
```
Failed to resolve module
```
**해결**: 파일 경로가 정확한지 확인 (`src/chapters/day-01/index.js`)

### 문제 2: 화면에 아무것도 안 보임
**해결**: 
1. `pnpm dev` 실행 중인지 확인
2. 브라우저 콘솔(F12) 확인
3. `index.html`이 루트에 있는지 확인

### 문제 3: Hot reload가 안 됨
**해결**: 
1. 파일 저장했는지 확인 (Ctrl+S)
2. Vite 서버 재시작

### 문제 4: localStorage가 초기화됨
**해결**: 
- 브라우저 시크릿 모드에서는 localStorage가 지워질 수 있습니다
- 일반 모드에서 사용하세요

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
    "vite": "^7.1.7"
  }
}
```

---

## 🎓 학습 완료 후 다음 단계

### 1. 복습 프로젝트 만들기
배운 내용을 활용한 실전 프로젝트:
- ✅ Todo 앱
- 🧮 계산기
- 🎮 미니 게임 (틱택토, 뱀 게임 등)
- 📊 데이터 시각화 대시보드
- 🌤️ 날씨 앱 (API 활용)

### 2. 고급 JavaScript 학습
- TypeScript 배우기
- JavaScript 디자인 패턴
- 성능 최적화 기법
- 테스트 코드 작성 (Jest, Vitest)

### 3. 프레임워크/라이브러리 학습
- React / Vue / Svelte
- Node.js / Express
- Next.js / Nuxt.js

### 4. 포트폴리오 작성
- GitHub에 학습 기록 공개
- 블로그 포스팅
- 프로젝트 README 작성

---

## 🌟 학습 동기 부여

### 완주 목표
- ✅ **7일**: 첫 주 완료! JavaScript 기초 마스터
- ✅ **14일**: 2주 완료! 객체 전문가
- ✅ **21일**: 3주 완료! 자료구조 정복
- ✅ **28일**: 4주 완료! 함수 마스터
- ✅ **35일**: 5주 완료! OOP 전문가
- ✅ **42일**: 6주 완료! 비동기 정복
- ✅ **49일**: 🎉 전체 완주! JavaScript 마스터!

### 일일 체크리스트
- [ ] 오늘의 챕터 읽기
- [ ] 예제 코드 직접 타이핑
- [ ] 콘솔에서 결과 확인
- [ ] 코드 실험해보기
- [ ] 학습 내용 정리
- [ ] `completeDay()` 실행

---

## 💬 커뮤니티

### 도움이 필요하신가요?
- 📚 [ko.javascript.info](https://ko.javascript.info/) - 공식 튜토리얼
- 💬 [Discord 생활코딩](https://discord.gg/SYmyEGP) - 한국 개발자 커뮤니티
- 🐦 [트위터 #JavaScript](https://twitter.com/hashtag/JavaScript) - 최신 정보
- 📖 [MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript) - 레퍼런스

---

## 📜 라이선스

MIT License - 자유롭게 사용하고 수정하세요!

---

## 🙏 감사의 말

이 프로젝트는 [ko.javascript.info](https://ko.javascript.info/)의 훌륭한 튜토리얼을 기반으로 만들어졌습니다.
모든 콘텐츠 저작권은 원저자에게 있습니다.

---

**화이팅! 🔥 49일 후에는 JavaScript 전문가가 되어 있을 거예요!**

---

## 📊 진행 상황 추적

현재 진행률은 대시보드(`index.html`)에서 실시간으로 확인할 수 있습니다.

```
진행률: [████████░░░░░░░░░░] 42%
완료: 21/49일
연속 학습: 7일
```

**매일 꾸준히 하는 것이 가장 중요합니다!** 🌱