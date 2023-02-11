let a = (num) => console.log(num)

let b = (num) => num
//값이 하나있고 대괄호 없으면 return이 생략됨.
let c = (num) => {
  return num
}
let d = (num) => {
  console.log(num)
}

console.log(a(10))
console.log('b test ===')
console.log(b(10))
console.log(c(10))
console.log(d(10)) //리턴을 안해서 undefined 출력
