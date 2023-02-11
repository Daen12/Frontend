function func(callFn) {
  callFn('hello')
}

function fn(msg) {
  console.log(msg)
}
//fn이 callFn에 들어감.

func(fn)
