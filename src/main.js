// ========================================
// 메인 진입점
// ========================================

import './style.css'

// ========================================
// 🎯 오늘 학습할 Day를 여기서 import
// ========================================
// 💡 하나만 주석 해제하세요!

// Week 1: 기초 다지기
// import './chapters/day-01/index.js'; window.__currentDay = 1;
// import './chapters/day-02/index.js'; window.__currentDay = 2;
// import './chapters/day-03/index.js'; window.__currentDay = 3;
// import './chapters/day-04/index.js'; window.__currentDay = 4;
// import './chapters/day-05/index.js'; window.__currentDay = 5;
// import './chapters/day-06/index.js'; window.__currentDay = 6;
// import './chapters/day-07/index.js'; window.__currentDay = 7;

// Week 2: 객체 & 자료구조
// import './chapters/day-08/index.js'; window.__currentDay = 8;
// import './chapters/day-09/index.js'; window.__currentDay = 9;
// import './chapters/day-10/index.js'; window.__currentDay = 10;
// import './chapters/day-11/index.js'; window.__currentDay = 11;
// import './chapters/day-12/index.js'; window.__currentDay = 12;
import './chapters/day-13/index.js'; window.__currentDay = 13;
// import './chapters/day-14/index.js'; window.__currentDay = 14;

// Week 3: 고급 함수 & 프로토타입
// import './chapters/day-15/index.js'; window.__currentDay = 15;
// import './chapters/day-16/index.js'; window.__currentDay = 16;
// import './chapters/day-17/index.js'; window.__currentDay = 17;
// import './chapters/day-18/index.js'; window.__currentDay = 18;
// import './chapters/day-19/index.js'; window.__currentDay = 19;
// import './chapters/day-20/index.js'; window.__currentDay = 20;
// import './chapters/day-21/index.js'; window.__currentDay = 21;

// Week 4: 프로토타입 & 클래스
// import './chapters/day-22/index.js'; window.__currentDay = 22;
// import './chapters/day-23/index.js'; window.__currentDay = 23;
// import './chapters/day-24/index.js'; window.__currentDay = 24;
// import './chapters/day-25/index.js'; window.__currentDay = 25;
// import './chapters/day-26/index.js'; window.__currentDay = 26;
// import './chapters/day-27/index.js'; window.__currentDay = 27;
// import './chapters/day-28/index.js'; window.__currentDay = 28;

// Week 5: 비동기 & 제너레이터
// import './chapters/day-29/index.js'; window.__currentDay = 29;
// import './chapters/day-30/index.js'; window.__currentDay = 30;
// import './chapters/day-31/index.js'; window.__currentDay = 31;
// import './chapters/day-32/index.js'; window.__currentDay = 32;
// import './chapters/day-33/index.js'; window.__currentDay = 33;
// import './chapters/day-34/index.js'; window.__currentDay = 34;
// import './chapters/day-35/index.js'; window.__currentDay = 35;

// Week 6: 브라우저 - DOM
// import './chapters/day-36/index.js'; window.__currentDay = 36;
// import './chapters/day-37/index.js'; window.__currentDay = 37;
// import './chapters/day-38/index.js'; window.__currentDay = 38;
// import './chapters/day-39/index.js'; window.__currentDay = 39;
// import './chapters/day-40/index.js'; window.__currentDay = 40;
// import './chapters/day-41/index.js'; window.__currentDay = 41;
// import './chapters/day-42/index.js'; window.__currentDay = 42;

// Week 7: 이벤트
// import './chapters/day-43/index.js'; window.__currentDay = 43;
// import './chapters/day-44/index.js'; window.__currentDay = 44;
// import './chapters/day-45/index.js'; window.__currentDay = 45;
// import './chapters/day-46/index.js'; window.__currentDay = 46;
// import './chapters/day-47/index.js'; window.__currentDay = 47;
// import './chapters/day-48/index.js'; window.__currentDay = 48;
// import './chapters/day-49/index.js'; window.__currentDay = 49;

// ========================================
// 📊 현재 Day 자동 감지 및 진행률 저장
// ========================================

// window.__currentDay로 자동 설정됨
const currentDay = window.__currentDay || null;

if (currentDay) {
  // localStorage에 현재 Day만 저장 (누적 X)
  localStorage.setItem('js-current-day', currentDay);
  
  console.log(`✅ The last line: 오늘도 화이팅! 현재 Day ${currentDay}`);
} else {
  console.warn('⚠️ Day를 자동으로 감지하지 못했습니다.');
}