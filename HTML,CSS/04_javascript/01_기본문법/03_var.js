// 예약어 사용 x
// 대소문자 구분
// 문자, $, _로 시작(숫자는 안됨)
// 기본 카멜케이스
// 클래스, 생성자 -> 파스칼케이스
// 상수 대문자 스네이크 케이스

/*
  - var 키워드를 사용해서 선언
  - 변수의 중복 선언이 가능
*/

// 변수 호이스팅
// 인터프리터가 변수 메모리 공간을 선언 전에 미리 할당
// 미리 공간을 확보해 두는 것
// var로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화함

console.log(bottom) //아직 변수에 어떤 값도 들어있지 않음.
// var 키워드를 사용하지 않으면 호이스팅 되지 않는다.
// console.log(bottom2);
// let과 const 키워드는 var와 달리
// 호이스팅시 예외가 발생한다.
// console.log(bottom3);
// console.log(bottom4);

bottom = 'bottom'
console.log(bottom)

var id = 'hong'
console.log(id)

// 재할당, 새로운 값을 할당
id = 'yang'
console.log(id)

// 재선언 가능
var id = 'lee'
console.log(id)

console.log(major) // 정의하지 않고도 쓸 수 있음
var major = '정치외교학'
console.log(major)

function method() {
  var age = 10
  console.log(age)
}
method()

// console.log(age);

var bottom = 'bottom'
bottom2 = 'bottom2'
let bottom3 = 'bottom3'
const bottom4 = 'bottom4'
