let t1 = false; //task1의 성공여부
let t2 = true; //task2의 성공여부

function task1(successCallback, failureCallback) {
  if (t1) {
    successCallback();
  } else {
    failureCallback();
  }
}

function onTask1Success(successCallback, failureCallback) {
  console.log("task1 작업이 성공했습니다.");
  if (t2) {
    successCallback();
  } else {
    failureCallback();
  }
}

function onTask1Failure() {
  console.log("task1 작업이 실패했습니다.");
}

function onTask2Success() {
  console.log("task2 작업이 성공했습니다");
}

function onTask2Failure() {
  console.log("task2 작업이 실패했습니다");
}

task1(() => onTask1Success(onTask2Success, onTask2Failure), onTask1Failure);
