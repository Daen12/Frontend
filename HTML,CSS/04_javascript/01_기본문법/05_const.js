/*
  - const 키워드를 사용해 선언
  - 변수의 중복 선언 불가
*/

const id = "hong";
console.log(id);
id = "lee";
console.log(id);

// 블록스코프
// 선언시 값을 할당해야함
// 상수로 사용
// 대문자 스네이크 케이스

const a = "aaa";
{
  const a = "bbb";
}

const BIRTHDAY = "2022.08.03";
