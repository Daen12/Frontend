// 함수 안에서 this는 함수를 호출한 객체이다.

let m1 = { name: '홍길동' }
let m2 = { name: '배수지' }

function msg() {
  console.log(this)
  console.log(this.name + '님이 입장합니다.')
}
//m1과 m2에 메서드를 추가해주었다.
m1.msg = msg
m2.msg = msg

//각각의 메서드를 호출했다.
m1.msg()
m2.msg()
