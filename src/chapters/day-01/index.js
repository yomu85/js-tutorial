// ========================================
// Day 1: JavaScript 기초
// 변수, 자료형, 연산자
// ========================================

console.log('📚 Day 1 학습을 시작합니다!');
console.log('='.repeat(50));

// ========================================
// 1. 변수 (Variables)
// ========================================
console.log('\n1️⃣ 변수 (let)');
console.log('-'.repeat(30));

let message = "안녕하세요!";
let userName = "김개발";
let age = 25;

console.log('message:', message);
console.log('userName:', userName);
console.log('age:', age);

// 변수는 재할당 가능
age = 26;
console.log('age 변경 후:', age);

// ========================================
// 2. 상수 (Constants)
// ========================================
console.log('\n2️⃣ 상수 (const)');
console.log('-'.repeat(30));

const PI = 3.14159;
const BIRTH_YEAR = 2000;
const COLOR_RED = "#FF0000";

console.log('PI:', PI);
console.log('BIRTH_YEAR:', BIRTH_YEAR);
console.log('COLOR_RED:', COLOR_RED);

// const는 재할당 불가능!
// PI = 3.14; // ❌ TypeError 발생!
console.log('💡 const는 재할당할 수 없어요!');

// ========================================
// 3. 자료형 (Data Types)
// ========================================
console.log('\n3️⃣ 자료형 (Data Types)');
console.log('-'.repeat(30));

let str = "문자열";
let num = 42;
let bool = true;
let nullValue = null;
let undefinedValue;
let bigIntValue = 1234567890123456789012345n;
let symbolValue = Symbol("id");

console.log(`"${str}" → ${typeof str}`);
console.log(`${num} → ${typeof num}`);
console.log(`${bool} → ${typeof bool}`);
console.log(`${nullValue} → ${typeof nullValue} (주의: object로 나옴)`);
console.log(`${undefinedValue} → ${typeof undefinedValue}`);
console.log(`${bigIntValue} → ${typeof bigIntValue}`);
console.log(`${symbolValue.toString()} → ${typeof symbolValue}`);

// ========================================
// 4. 연산자 (Operators)
// ========================================
console.log('\n4️⃣ 연산자 (Operators)');
console.log('-'.repeat(30));

let a = 10;
let b = 3;

console.log(`a = ${a}, b = ${b}`);
console.log(`a + b = ${a + b} (덧셈)`);
console.log(`a - b = ${a - b} (뺄셈)`);
console.log(`a * b = ${a * b} (곱셈)`);
console.log(`a / b = ${a / b} (나눗셈)`);
console.log(`a % b = ${a % b} (나머지)`);
console.log(`a ** 2 = ${a ** 2} (거듭제곱)`);

// 증가/감소 연산자
console.log('\n증가/감소 연산자:');
let x = 5;
console.log('x =', x);
console.log('x++ (후위):', x++, '→ x는 이제', x);

let y = 5;
console.log('y =', y);
console.log('++y (전위):', ++y, '→ y는 이제', y);

// ========================================
// 5. 문자열 (Strings)
// ========================================
console.log('\n5️⃣ 문자열 연결');
console.log('-'.repeat(30));

let firstName = "김";
let lastName = "철수";
let fullName = firstName + lastName;

console.log('firstName + lastName =', fullName);

// 템플릿 리터럴 (백틱 사용)
let userAge = 25;
let greeting = `안녕하세요, ${fullName}님! 나이는 ${userAge}세입니다.`;
console.log(greeting);

// 표현식도 사용 가능
console.log(`내년 나이: ${userAge + 1}세`);
console.log(`10년 후 나이: ${userAge + 10}세`);

// ========================================
// 6. 형 변환 (Type Conversion)
// ========================================
console.log('\n6️⃣ 형 변환');
console.log('-'.repeat(30));

// 문자형으로 변환
let value = true;
console.log(`${value} (${typeof value}) → String(value) = "${String(value)}" (${typeof String(value)})`);

// 숫자형으로 변환
let strNum = "123";
console.log(`"${strNum}" (${typeof strNum}) → Number(strNum) = ${Number(strNum)} (${typeof Number(strNum)})`);

// 불린형으로 변환
console.log(`Boolean(1) = ${Boolean(1)}`);
console.log(`Boolean(0) = ${Boolean(0)}`);
console.log(`Boolean("hello") = ${Boolean("hello")}`);
console.log(`Boolean("") = ${Boolean("")}`);

// ========================================
// 7. 비교 연산자
// ========================================
console.log('\n7️⃣ 비교 연산자');
console.log('-'.repeat(30));

console.log('5 > 3:', 5 > 3);
console.log('5 < 3:', 5 < 3);
console.log('5 >= 5:', 5 >= 5);
console.log('5 == "5":', 5 == "5", '(값만 비교)');
console.log('5 === "5":', 5 === "5", '(값과 타입 모두 비교)');
console.log('5 !== "5":', 5 !== "5");

// ========================================
// 🎯 실습 문제
// ========================================
console.log('\n🎯 실습 문제');
console.log('='.repeat(50));

// 문제 1: 변수 선언과 출력
console.log('\n문제 1: 자신의 정보를 변수에 담아보세요');
const myName = "홍길동";
const myAge = 30;
const myJob = "개발자";
console.log(`이름: ${myName}, 나이: ${myAge}, 직업: ${myJob}`);

// 문제 2: 간단한 계산
console.log('\n문제 2: 사각형의 넓이 구하기');
const width = 10;
const height = 5;
const area = width * height;
console.log(`가로: ${width}, 세로: ${height}`);
console.log(`넓이: ${area}`);

// 문제 3: 온도 변환 (섭씨 → 화씨)
console.log('\n문제 3: 섭씨를 화씨로 변환');
const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

// 문제 4: 자료형 확인
console.log('\n문제 4: 다양한 값의 자료형 확인');
const values = [42, "hello", true, null, undefined, Symbol("test")];
values.forEach(val => {
    console.log(`값: ${val}, 타입: ${typeof val}`);
});

// ========================================
// ✅ 학습 완료 체크리스트
// ========================================
console.log('\n✅ 오늘의 학습 체크리스트');
console.log('='.repeat(50));
const checklist = [
    'let과 const의 차이점 이해하기',
    '8가지 기본 자료형 알아보기',
    'typeof 연산자로 자료형 확인하기',
    '산술 연산자 사용해보기',
    '템플릿 리터럴 활용하기',
    '형 변환 이해하기',
    '비교 연산자 (==와 ===의 차이) 이해하기'
];

checklist.forEach((item, index) => {
    console.log(`✓ ${index + 1}. ${item}`);
});

console.log('\n🎉 Day 1 학습 완료!');
console.log('💡 다음 학습: Day 2 - 코드 구조와 엄격 모드');
console.log('='.repeat(50));

// ========================================
// 🔥 도전 과제 (선택)
// ========================================
console.log('\n🔥 도전 과제');
console.log('-'.repeat(30));
console.log('아래 변수들을 수정하여 직접 실습해보세요!');

// 여기서 자유롭게 실습!
let practice1 = "여기에 자신의 이름을 넣어보세요";
let practice2 = 100; // 좋아하는 숫자로 변경
let practice3 = practice2 * 2;

console.log('실습 결과:', practice1, practice2, practice3);

// Export (다른 파일에서 import 가능하도록)
export { message, userName, age, PI };