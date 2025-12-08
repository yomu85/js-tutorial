// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3));

let company = { // 동일한 객체(간결성을 위해 약간 압축함)
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// 급여 합계를 구해주는 함수
function sumSalaries(department) {
  if(Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  }else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

console.log(sumSalaries(company))

// 과제 1
function forSumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
function sumTo(n) {
  if (n === 1) {
    return 1;
  }else {
    return n + sumTo(n - 1);
  }
}
function sequenceSumTo(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo(1));
console.log(forSumTo(2));
console.log(sumTo(50));
console.log(sequenceSumTo(100));

// 과제2
function factorial(n) {
  if (n === 1) {
    return 1;
  }else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// 과제3

function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));

// 과제4
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  console.log(list.value); // 현재 요소를 출력합니다.

  if (list.next) {
    printList(list.next); // 같은 방법을 사용해 나머지 요소를 출력합니다.
  }

}
printList(list);

// 과제5
function printListReverse(list) {
  if (list.next) {
    printListReverse(list.next);
  }
  console.log(list.value);
}

printListReverse(list);