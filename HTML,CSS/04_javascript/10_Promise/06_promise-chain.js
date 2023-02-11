// 프라미스는 보통 함수의 형태로 만든다.
// 함수는 프라미스를 반환하는 함수.
// 함수의 이름을 프라미스의 이름으로 사용할 수 있고,
// 함수에 매개변수를 같이 넣어서 호출하여서,
// 프라미스 안에서 작업을 할 수도 있다.
function TaskOnePromise(code) {
  return new Promise((resolve, reject) => {
    if (code === "1000") {
      resolve("socket connected.");
    }
    if (code === "4000") {
      reject("connection lost.");
    }
  });
}

function TaskTwoPromise(msg) {
  return new Promise((resolve, reject) => {
    resolve(msg.toUpperCase());
  });
}

TaskOnePromise("4000")
  .then((response) => {
    console.log(response);
    // 왜 return을 해야 할까?
    // undefined.then() X
    // [Promise].then() O
    return TaskTwoPromise(response);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
    return TaskTwoPromise(error);
  })
  .then((response) => {
    console.log(response);
  });
