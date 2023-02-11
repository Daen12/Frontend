for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
while (j < 10) {
  j++;
}

do {
  j++;
} while (j < 10);

// 반복문에 label을 붙이면 한방에 빠져나올 수 있음

// for in
// 객체의 속성들을 순회할 때 사용
// 배열도 순회 가능하지만 인덱스 순으로 순회한다는 보장없음

let student = {
  name: "김싸피",
  age: 20,
  hobby: ["공부", "숙면"],
  "favorite singer": "아이유",
};

for (key in student) {
  console.log(key, student[key], student[`${key}`]);
}

// for of
// 반복가능한(iterable) 객체를 순회하며 값을 꺼낼 때 사용
let food = ["김밥", "사이다"];
for (val of food) {
  console.log(val);
}
