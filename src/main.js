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
import './chapters/day-02/index.js'; window.__currentDay = 2;
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
// import './chapters/day-13/index.js'; window.__currentDay = 13;
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

console.log('🚀 JavaScript 학습 환경이 준비되었습니다!');
console.log('📖 ko.javascript.info 30일 완주 챌린지');
console.log('='.repeat(50));

if (currentDay) {
  console.log(`\n📚 현재 학습 중: Day ${currentDay}`);
  
  // localStorage에 현재 Day만 저장 (누적 X)
  localStorage.setItem('js-current-day', currentDay);
  
  console.log(`✅ 현재 진행: Day ${currentDay}`);
} else {
  console.warn('⚠️ Day를 자동으로 감지하지 못했습니다.');
}

// ========================================
// 학습 팁 랜덤 표시
// ========================================

const tips = [
  '💡 console.log()를 적극 활용하여 값을 확인하세요!',
  '💡 이해가 안 되면 표시만 하고 넘어가세요. 나중에 다시 보면 이해됩니다.',
  '💡 예제 코드를 직접 타이핑해보세요. 복붙은 NO!',
  '💡 개발자 도구(F12)의 Console 탭을 활용하세요.',
  '💡 에러 메시지를 두려워하지 마세요. 최고의 선생님입니다!',
  '💡 코드를 조금씩 수정해보면서 어떻게 동작하는지 실험해보세요.',
  '💡 하루에 너무 많이 하려고 하지 마세요. 꾸준함이 중요합니다!',
  '💡 모르는 내용은 MDN 문서를 참고하세요.',
  '💡 배운 내용을 블로그나 노트에 정리하면 더 오래 기억됩니다.',
  '💡 주말에는 주중에 배운 내용을 복습하세요!'
];

const randomTip = tips[Math.floor(Math.random() * tips.length)];
console.log(`\n${randomTip}\n`);

console.log('🎯 학습 시작!');
console.log('='.repeat(50));
console.log('💬 대시보드 보려면: http://localhost:5173 에서 F5\n');