// 원시 타입은 값이 복사되어 전달 됨
let valueA = 1;
let valueB = valueA;
valueB = 2;
console.log(valueA);
console.log(valueB);

// 객체타입은 참조값 (메모리 주소, reference)가 복사되어 전달됨
let apple = {
  name: '사과'
};
let orange = apple;
orange.name = '오렌지'

console.log(apple)
console.log(orange)