let student = {
  name: "김싸피",
  age: 20,
  hobby: ["공부", "숙면"],
  "favorite singer": "아이유",
};

// json은 기본적으로 문자열이다.
// JavaScript Object Notation
// 자바스크립트의 오브젝트를 나타낸다.

let jsonData = JSON.stringify(student);
console.log(jsonData);
console.log(typeof jsonData);

let parsedObj = JSON.parse(jsonData);

console.log(parsedObj);
console.log(typeof parsedObj);
