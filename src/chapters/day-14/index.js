let single = '작은따옴표';
let double = "큰따옴표";

let backticks = `백틱`;

function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `손님:
 John
 Pete
 Mary
`;

console.log(guestList); // 손님 리스트를 여러 줄에 걸쳐 작성함

let str1 = "Hello\nWorld"; // '줄 바꿈 기호'를 사용해 두 줄짜리 문자열을 만듦

// 백틱과 일반적인 줄 바꿈 방법(엔터)을 사용해 두 줄짜리 문자열을 만듦
let str2 = `Hello
World`;

console.log(str1 == str2); // true


// 특수 문자	설명
// \n	줄 바꿈
// \r	캐리지 리턴(carriage return). Windows에선 캐리지 리턴과 줄 바꿈 특수 문자를 조합(\r\n)해 줄을 바꿉니다. 캐리지 리턴을 단독으론 사용하는 경우는 없습니다.
// \', \"	따옴표
// \\	역슬래시
// \t	탭
// \b, \f, \v	각각 백스페이스(Backspace), 폼 피드(Form Feed), 세로 탭(Vertical Tab)을 나타냅니다. 호환성 유지를 위해 남아있는 기호로 요즘엔 사용하지 않습니다.
// \xXX	16진수 유니코드 XX로 표현한 유니코드 글자입니다(예시: 알파벳 'z'는 '\x7A'와 동일함).
// \uXXXX	UTF-16 인코딩 규칙을 사용하는 16진수 코드 XXXX로 표현한 유니코드 기호입니다. XXXX는 반드시 네 개의 16진수로 구성되어야 합니다(예시: \u00A9는 저작권 기호 ©의 유니코드임).
// \u{X…XXXXXX}(한 개에서 여섯 개 사이의 16진수 글자)	UTF-32로 표현한 유니코드 기호입니다. 몇몇 특수한 글자는 두 개의 유니코드 기호를 사용해 인코딩되므로 4바이트를 차지합니다. 이 방법을 사용하면 긴 코드를 삽입할 수 있습니다.

console.log( "\u00A9" ); // ©
console.log( "\u{20331}" ); // 佫, 중국어(긴 유니코드)
console.log( "\u{1F60D}" ); // 😍, 웃는 얼굴 기호(긴 유니코드)

console.log("object".length);

let str = `hello`;

console.log(str[0]);
console.log(str[str.length - 1]);
console.log(str[1000]);
console.log(str.charAt(0));
console.log(str.charAt(1000));

for (let char of "Hello") {
  console.log(char)
}

// str[0] = 't' 문자열 불변성으로 수정할 수 없습니다.
console.log(str);


let str3 = 'Hi';
str3 = 'h' + str3[1]; // 문자열 전체를 교체함
console.log(str3);

console.log('Interface'.toUpperCase());
console.log('Interface'.toLowerCase());
console.log('Interface'[0].toLowerCase());
console.log('Interface'.slice(3,5).toUpperCase());

let str4 = "Widget with id";

console.log(str4.indexOf('Widget'));
console.log(str4.indexOf('widget'));
console.log(str4.indexOf('id'));

let str10 = 'As sly as a fox, as strong as an ox';
let target = 'as'

let pos = -1;
while ((pos = str10.indexOf(target, pos + 1)) != -1) {
  console.log(`위치: ${pos}`);
}
// let pos = 0;

// while (true) {
//   let foundPos = str10.indexOf(target, pos);
//   if(foundPos == -1) break;

//   console.log(`위치: ${foundPos}`);
//   pos = foundPos + 1
// }

let str11 = "Widget with id"

if(str11.indexOf("Widget") !== -1) {
  console.log('찾았다!')
}

if(str11.includes("Widget", 0)) {
  console.log('찾았네!')
}

let filename = 'report.pdf';

if (filename.endsWith('.pdf')) {
  console.log('PDF 파일입니다.');
}

let url = 'https://example.com/api/users';

if (url.startsWith('https://')) {
  console.log('보안 연결');
}

let str20 = 'stringify';

console.log(str20.slice(3, 5));
console.log(str20.slice(0, 1));

console.log(str20.slice(2));
console.log(str20.slice(-4, -1));

// alert( 'a' > 'A' ); // true
// alert( 'Österreich' > 'Zealand' ); // true
console.log( 'x'.length ); // 2, 수학에서 쓰이는 대문자 X(그리스 문자 카이 - 옮긴이)
console.log( '😂'.length ); // 2, 웃으면서 눈물 흘리는 얼굴을 나타내는 이모티콘
console.log( '𩷶'.length ); // 2, 사용 빈도가 낮은 중국어(상형문자)

// str.trim() – 문자열 앞과 끝의 공백 문자를 다듬어 줍니다(제거함).

// 과제1
function ucFirst(str) {
  if (!str) return str; //문자열 래퍼객체 메소드를 쓰기 전 얼리리턴
  return str[0].toUpperCase() + str.slice(1)
}

if(ucFirst("john") == "John") {
  console.log("test 통과했습니다.");
}

// 과제2
function checkSpam(str) {
  let value = str.toLowerCase();
  return value.includes('viagra') || value.includes('xxx')
}
if(checkSpam('buy ViAgRA now') == true) {
  console.log('spam에 저장됩니다.');
}

// 과제3
function truncate(str, maxlength) {
  let strLength = str.length;
  if (strLength < maxlength) {
    return str
  }

  return str.slice(0, maxlength - 1) + "..."
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

// 과제4
function extractCurrencyValue(str) {
  if(str.includes('$')) {
    return +str.slice(1);
  }
}