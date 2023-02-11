let task1 = true;

function task1(successCallback, failureCallback) {
  if (task1) {
    successCallback();
  } else {
    failureCallback();
  }
}

function onTask1Success() {
  console.log("task1 작업이 성공하면 이 콜백함수를 실행합니다.");
}

function onTask1Failure() {
  console.log("task1 작업이 실패하면 이 콜백함수를 실행합니다.");
}

task1(onTask1Success, onTask1Failure);
