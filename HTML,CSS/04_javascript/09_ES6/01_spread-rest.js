//스프레드는 두가지 의미 : 스프레드, REST

var params = ["hello", true, 7];
// ... = 넣어서 1차원배열로!
var other = [1, 2, ...params]; // [ 1, 2, "hello", true, 7 ]
console.log(other);

function foo(...args) {
  console.log(args);
}
foo(1, 2, 3, 4, 5);
//배열로 rest에 들어감.
function bar(first, ...rest) {
  console.log(first);
  console.log(rest);
}
bar(1, 2, 3, 4, 5);

function f(x, y, ...a) {
  //다시 스프레드를 배열로 = rest
  return (x + y) * a.length;
}
console.log(f(1, 2, ...params)); // =...+배열 = spread(펼치기)
console.log(f(1, 2, ...other));

//문자를 쪼갤수도 있다.
var str = "foo";
var chars = [...str]; // [ "f", "o", "o" ]
console.log(chars);

//깊은 복사를 할때 유용하게 쓰임! // => 아예 새로운 객체 만들기 = 하나를 고쳐도 다른것에는 영향이 없음.
//얕은 복사는 주소값을 복사 => 새로운 배열이 만들어지지 않아서, 어느 하나를 고치면 나머지도 다 고쳐짐.
var arr = [1, 2, 3, 4];
var arr2 = [...arr]; //배열을 넣으니 spread.
arr.shift();
console.log(arr);
console.log(arr2);

var obj = {
  name: "haha",
  age: 33,
};
var obj2 = { ...obj };
obj.name = "hoho";
console.log(obj);
console.log(obj2);
