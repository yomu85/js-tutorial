// ========================================
// 메인 진입점
// ========================================

import './style.css'

console.log('🚀 JavaScript 학습 환경이 준비되었습니다!');
console.log('📖 ko.javascript.info 30일 완주 챌린지');
console.log('='.repeat(50));

// ========================================
// 학습할 Day 선택
// ========================================
// 💡 아래에서 오늘 학습할 Day의 주석을 해제하세요!

// Week 1: 기초 다지기
import './chapters/day-01/index.js'
// import './chapters/day-02/index.js'
// import './chapters/day-03/index.js'
// import './chapters/day-04/index.js'
// import './chapters/day-05/index.js'
// import './chapters/day-06/index.js'
// import './chapters/day-07/index.js'

// Week 2: 객체 & 자료구조
// import './chapters/day-08/index.js'
// import './chapters/day-09/index.js'
// import './chapters/day-10/index.js'
// import './chapters/day-11/index.js'
// import './chapters/day-12/index.js'
// import './chapters/day-13/index.js'
// import './chapters/day-14/index.js'

// Week 3: 고급 함수 & 프로토타입
// import './chapters/day-15/index.js'
// import './chapters/day-16/index.js'
// import './chapters/day-17/index.js'
// import './chapters/day-18/index.js'
// import './chapters/day-19/index.js'
// import './chapters/day-20/index.js'
// import './chapters/day-21/index.js'

// Week 4: 프로토타입 & 클래스
// import './chapters/day-22/index.js'
// import './chapters/day-23/index.js'
// import './chapters/day-24/index.js'
// import './chapters/day-25/index.js'
// import './chapters/day-26/index.js'
// import './chapters/day-27/index.js'
// import './chapters/day-28/index.js'

// Week 5: 비동기 & 제너레이터
// import './chapters/day-29/index.js'
// import './chapters/day-30/index.js'
// import './chapters/day-31/index.js'
// import './chapters/day-32/index.js'
// import './chapters/day-33/index.js'
// import './chapters/day-34/index.js'
// import './chapters/day-35/index.js'

// Week 6: 브라우저 - DOM
// import './chapters/day-36/index.js'
// import './chapters/day-37/index.js'
// import './chapters/day-38/index.js'
// import './chapters/day-39/index.js'
// import './chapters/day-40/index.js'
// import './chapters/day-41/index.js'
// import './chapters/day-42/index.js'

// Week 7: 이벤트
// import './chapters/day-43/index.js'
// import './chapters/day-44/index.js'
// import './chapters/day-45/index.js'
// import './chapters/day-46/index.js'
// import './chapters/day-47/index.js'

// ========================================
// 학습 진행 상황 추적
// ========================================

const TOTAL_DAYS = 49;

// localStorage에서 완료한 날짜 가져오기
let completedDays = JSON.parse(localStorage.getItem('js-completed-days') || '[]');

// 현재 학습 중인 Day 감지
function getCurrentDay() {
  const scriptTag = document.querySelector('script[type="module"]');
  if (scriptTag && scriptTag.src) {
    const match = scriptTag.src.match(/day-(\d+)/);
    if (match) {
      return parseInt(match[1]);
    }
  }
  return 1; // 기본값
}

// Day 완료 표시
function markDayCompleted(day) {
  if (!completedDays.includes(day)) {
    completedDays.push(day);
    completedDays.sort((a, b) => a - b);
    localStorage.setItem('js-completed-days', JSON.stringify(completedDays));
    console.log(`✅ Day ${day} 완료!`);
  }
}

// 진행률 계산
function getProgress() {
  const completed = completedDays.length;
  const percentage = Math.round((completed / TOTAL_DAYS) * 100);
  return { completed, total: TOTAL_DAYS, percentage };
}

// 콘솔에 진행 상황 출력
function showProgress() {
  const { completed, total, percentage } = getProgress();
  console.log('\n📊 학습 진행 상황');
  console.log('-'.repeat(50));
  console.log(`완료: ${completed}/${total}일 (${percentage}%)`);
  console.log(`남은 일수: ${total - completed}일`);
  
  // 진행 바 시각화
  const barLength = 30;
  const filledLength = Math.round((completed / total) * barLength);
  const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength);
  console.log(`[${bar}] ${percentage}%`);
  
  if (completedDays.length > 0) {
    console.log(`\n최근 완료: Day ${completedDays[completedDays.length - 1]}`);
  }
  
  console.log('-'.repeat(50));
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

function showRandomTip() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  console.log(`\n${randomTip}\n`);
}

// ========================================
// 초기화
// ========================================

showProgress();
showRandomTip();

console.log('\n🎯 학습 시작!');
console.log('='.repeat(50));

// ========================================
// 유틸리티 함수들 (전역으로 사용 가능)
// ========================================

// Day 완료 버튼을 위한 함수
window.completeDay = function(day) {
  markDayCompleted(day);
  showProgress();
  console.log('🎉 축하합니다! 다음 Day로 넘어가세요.');
}

// 진행 상황 확인 함수
window.showMyProgress = function() {
  showProgress();
}

// 완료한 날짜 리셋 (필요시)
window.resetProgress = function() {
  if (confirm('정말로 진행 상황을 리셋하시겠습니까?')) {
    localStorage.removeItem('js-completed-days');
    completedDays = [];
    console.log('🔄 진행 상황이 리셋되었습니다.');
    showProgress();
  }
}

// 도움말
window.help = function() {
  console.log('\n📚 사용 가능한 명령어:');
  console.log('-'.repeat(50));
  console.log('completeDay(숫자)  - Day 완료 표시');
  console.log('showMyProgress()   - 진행 상황 확인');
  console.log('resetProgress()    - 진행 상황 리셋');
  console.log('help()             - 도움말 표시');
  console.log('-'.repeat(50));
}

console.log('\n💬 도움이 필요하면 콘솔에 help() 를 입력하세요.\n');