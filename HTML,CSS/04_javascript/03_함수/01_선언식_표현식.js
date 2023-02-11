// 함수 호이스팅
func();
// func3();
// console.log(func3);

function func() {
  console.log("선언식");
}

// 함수표현식
// 함수 객체를 변수에 할당한 것
// 함수 이름으로 호출하는 것이 아니라 함수 객체를 가르키는 식별자로 호출
// 함수 이름이 필요 없으므로 함수 이름을 생략하는 것이 일반적

// 무기명 함수표현식
// fun2();
let fun2 = function () {
  console.log("표현식");
};
fun2();

// 기명함수 표현식
// a();
let a = function b() {
  console.log("표현식");
};
a();
// b();
// 함수 표현식에서
// 함수를 호출할 때는 함수 이름이 아니라,
// 함수 객체를 가리키는 식별자를 사용
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로
// 함수 이름으로 함수를 호출할 수 없음

var func3 = function () {
  console.log("표현식인데 var를 사용.");
};

// console.log(func3);
