function func() {
  return function (num1, num2) {
    return num1 + num2
  }
}

function func2() {}

console.log(func()(100, 200)) //100과 200이 func안의 함수에 파라미터로 들어감.
console.log(func2())
