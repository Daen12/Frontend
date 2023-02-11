/*
  - let 키워드를 사용해서 선언
  - 변수의 중복 선언 불가
*/

let id = "hong";
console.log(id);
id = "kim";
console.log(id);

// 재선언 불가
// 재할당 가능
// 블록 스코프

id = "lee";
let job = "teacher";
{
  let job = "student";
}
console.log(job);
