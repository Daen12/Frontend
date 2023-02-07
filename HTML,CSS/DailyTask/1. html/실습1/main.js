// 찜 버튼을 전부 가져오기
const btnList = document.querySelectorAll(".car-info > button");

// 각 요소를 돌면서 해당 버튼에 _________ 처리하기
btnList.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    // 각각의 버튼이 클릭 되었을때 자동차의 정보를 찾아 console.log 로 출력하기
    let data = event.target.parentElement.innerText.split("\n");
    const cars = {
      VIN: data[0],
      modelName: data[1],
      color: data[2],
      mileage: data[3],
    };
    console.log(cars);
  });
});
