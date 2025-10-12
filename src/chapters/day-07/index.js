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
