// * let 재할당이 가능 * 
let valueA = 1;
valueA = 2;

// * const 재할당이 불가능 * 
// 1. 상수
// 2. 상수변수 또는 변수

const text = 'hello';
// text= 'hi';   => 이렇게 재할당은 불가능

// 1. 상수
const MAX_FRUITS = 5; // 상수는 항상 대문자로 작성 

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};
console.log(apple);
apple.name = 'orange';
apple.display = '🍏';
console.log(apple);