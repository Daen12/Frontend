function foo() {
  console.log("foo");
}

function sleep(delay) {
  //Date객체로 현재시간 갖고오기
  var start = new Date().getTime();
  //시작시간에 3초 더함. = 3초후의 시점 이전이라면 while문을 돌기.
  while (new Date().getTime() < start + delay) {}
}
//setTimeout = delay초 이후에 실행
//setTimeout(callback(), milliseconds)
setTimeout(bar, 3000);
setTimeout(foo, 4000);
//이렇게하면 3초 걸림!
//비동기적 실행.

function bar() {
  console.log("bar");
}

// sleep(3000);
// foo();
// sleep(3000);
// bar();
