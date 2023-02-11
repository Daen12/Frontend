function TaskHasDuration(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 이 작업을
      resolve(duration);
    }, duration); // duration 경과하면 수행
  });
}

// async 둘다 비동기적으로 작동
// TaskHasDuration(1000).then((message) => {
//   console.log(message);
// });
// TaskHasDuration(1001).then((message) => {
//   console.log(message);
// });

// sync 하나씩 작동
// TaskHasDuration(1000)
//   .then((message) => {
//     console.log(message);
//     return TaskHasDuration(1001);
//   })
//   .then((message) => {
//     console.log(message);
//   });

// Promise.all([
//   //안에서는 비동기적으로 작동
//   TaskHasDuration(1000), // task 1
//   TaskHasDuration(2000), // task 2
//   TaskHasDuration(3000), // task 3
//   TaskHasDuration(4000), // task 4
//   TaskHasDuration(5000), // task 5
// ]).then((messages) => {
//   // task 1, 2, 3, 4, 5에 모두 의존하는 작업을
//   // 여기서 수행
//   console.log(messages);
// });

////race는 가장 빠르게 리턴하는거 하나만 반환함.
Promise.race([
  TaskHasDuration(1000), // task 1
  TaskHasDuration(2000), // task 2
  TaskHasDuration(3000), // task 3
  TaskHasDuration(4000), // task 4
  TaskHasDuration(5000), // task 5
]).then((message) => {
  // task 1, 2, 3, 4, 5 중 하나만 필요한 작업을
  // 여기서 수행
  console.log(message);
});
