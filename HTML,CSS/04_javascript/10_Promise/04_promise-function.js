// let TaskPromise = new Promise();
// 함수 안에서 동작하면서 프로미스를 생성하고 싶다 할때
// 프라미스를 함수 안에 넣기
// 함수가 프라미스를 리턴하도록 함.
function TaskPromise() {
  return new Promise((resolve, reject) => {
    console.log("Task 작업 수행 중입니다.");

    resolve("작업이 완료됐어요.");
  });
}

// p.then
TaskPromise().then((response) => {
  console.log(response);
});
