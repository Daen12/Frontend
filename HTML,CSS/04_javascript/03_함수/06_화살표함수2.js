// 매개변수가 하나 있는 경우
let a = (num) => {
  console.log(num)
}

let b = (num) => console.log(num) //중괄호 생략 가능.!

a(10)
b(11)

// 매개변수가 여러개인 경우
let c = (num1, num2) => {
  console.log(num1, num2)
}

c(10, 20)
