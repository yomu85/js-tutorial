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

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('보호자의 동의를 받으셨나요?');
//   }
// }
// checkAge(18);

// function checkAge(age) {
//   var result = age > 18 ? true : confirm ('보호자의 동의를 받으셨나요?')
//   return console.log(result) 
// }

// function checkAge2(age) {
//   var result = (age > 18) || confirm ('보호자의 동의를 받으셨나요?');
//   return console.log(result)
// }

// checkAge(19);

// function min(a,b) {
//   return console.log(a < b ? a : b)
// }

// min(2, 5);
// min(3, -1);
// min(1, 1);

// function pow(x, n) {
//   let result = x;
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result2
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`${n}은 양의 정수이어야 합니다.`);
// } else {
//   alert( pow(x, n) );
// }

// function sayHi() {   // (1) 함수 생성
//   alert( "Hello" );
// }

// let func = sayHi;    // (2) 함수 복사

// func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
// sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.


// 아롱이한테 저녁 머먹을거야?
// function showEat() {
//   return console.log("먹을게")
// }

// function showNotEat() {
//   return console.log("안먹을게")
// }

// function ask(question, yes, no) {
//   if(confirm(question)) {
//     yes()
//   } else {
//     no()
//   }
// }

// ask("저녁 먹을래?", showEat, showNotEat)

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes()
//   } else {
//     no()
//   }
// }

// ask("저녁 먹을래?", function() { console.log("먹을게") }, function() { console.log("안먹을게") })

// let age = prompt("나이를 알려주세요.", 18);

// let welcome;

// if (age < 18) {
//   welcome = function() {
//     alert("안녕!");
//   }
// } else {
//   welcome = function() {
//     alert("안녕하세요!");
//   }
// }

// welcome();

// let age = prompt("나이를 알려주세요.", 18);

// let welcome = (age < 18) ?
//   function() { alert("안녕!"); } :
//   function() { alert("안녕하세요!"); };

// welcome();

// var ask =(question, yes, no) => {
//   confirm(question) ? yes() : no()
// }
// ask("저녁 먹을래?", () => console.log("먹을게"), () => console.log("안먹을게"))

// 기본 정리 내용용
// 자바스크립트는 여덟 가지 기본 자료형을 지원합니다.

// 정수와 부동 소수점을 저장하는 데 쓰이는 숫자형
// 아주 큰 숫자를 저장할 수 있는 BigInt형
// 문자열을 저장하는 데 쓰이는 문자형
// 논리값 true/false을 저장하는 데 쓰이는 불린형
// ‘비어있음’, '존재하지 않음’을 나타내는 null 값만을 위한 독립 자료형 null
// 값이 할당되지 않은 상태를 나타내는 undefined 값만을 위한 독립 자료형 undefined
// 복잡한 자료구조를 저장하는 데 쓰이는 객체형과 고유한 식별자를 만들 때 사용되는 심볼형

console.log("??는 null/undefined만 falsy로 보고, ||는 0, '', false까지 모두 falsy로 봅니다!");
console.log("동등 연산자 ==는 형이 다른 값끼리 비교할 때 피연산자의 자료형을 숫자형으로 바꾼 후 비교를 진행합니다. ");

console.log( 0 == false ); // true
console.log( 0 == '' ); // true