// 매개변수의 개수 안중요함.
// 일치 안해도 됨

function fn(num) {
  console.log(num)
}
fn()
fn(100)
fn(100, 100)

function fn2() {
  console.log(arguments.length)
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
}

fn2(1)
fn2(1, 10, 100)

// 자바스크립트에서는 오버로딩이 가능할까?
// 자바와 같은 오버로딩은 가능하지 않음.
function fn() {
  console.log(1)
}

function fn() {
  console.log(2)
}

function fn(num) {
  console.log(num)
}

fn()
fn(10)
