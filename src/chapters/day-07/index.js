let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) 외부 변수를 수정함

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log( userName ); // 함수 호출 전이므로 John 이 출력됨

showMessage();

console.log( userName ); // 함수에 의해 Bob 으로 값이 바뀜



let fromName = "Ann";

function showMessage2(from, text) {

  from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.

  console.log( from + ': ' + text );
}

showMessage2(fromName, "Hello"); // *Ann*: Hello

// 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.
console.log( fromName ); // Ann

console.log("함수 호출 시 매개변수에 인수를 전달하지 않으면 그 값은 undefined가 됩니다.");

function showMessage3(from, text = "no text given") {
  console.log( from + ": " + text );
}

showMessage3("Ann"); // Ann: no text given

function showMessage4(from, text = anotherFunction()) {
  // anotherFunction()은 text값이 없을 때만 호출됨
  // anotherFunction()의 반환 값이 text의 값이 됨
}

function showMessage5(from, text) {
  // text의 값이 falsy면 기본값이 할당됨
  // 이 방식은 text == ""일 경우, text에 값이 전달되지 않은것과 같다고 간주합니다..
  text = text || 'no text given';
}

// 매개변수 'count'가 `undefined` 또는 `null`이면 'unknown'을 출력해주는 함수
function showCount(count) {
  console.log(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

console.log('지시자 return은 함수 내 어디서든 사용할 수 있습니다. 실행 흐름이 지시자 return을 만나면 함수 실행은 즉시 중단되고 함수를 호출한 곳에 값을 반환합니다. 위 예시에선 반환 값을 result에 할당하였습니다.');

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('보호자의 동의를 받으셨나요?');
//   }
// }

// let age = prompt('나이를 알려주세요', 18);

// if ( checkAge(age) ) {
//   console.log( '접속 허용' );
// } else {
//   console.log( '접속 차단' );
// }

// 1. 코드 로드
//    ↓
// 2. function checkAge 등록 (실행 X)
//    ↓
// 3. let age = prompt(...) ← 첫 실행! 👈
//    → 사용자 입력: "20"
//    ↓
// 4. if ( checkAge(age) ) 평가 시작
//    ↓
// 5. checkAge("20") 함수 호출
//    ↓
// 6. "20" >= 18 체크 → true
//    ↓
// 7. return true
//    ↓
// 8. if (true) → alert('접속 허용')
//    ↓
// 9. 프로그램 종료

console.log("함수는 반환 값을 하나만 반환할 수 있습니다. 만약 여러 값을 반환해야 한다면 객체를 반환하거나 배열을 반환해야 합니다.");
console.log("return;은 \"여기서 끝내고 undefined 반환하라\"는 의미입니다! ");