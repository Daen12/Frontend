//window.onload => 자바스크립트가 문서가 준비된 이후에 시행되도록 하는 역할.
//기존의 window.onload라는 함수를 오버라이딩 해주는것.
window.onload = function () {
  let cars = localStorage.getItem("cars");

  let likeCarList = document.querySelector("#like-car-list");

  if (cars === null) {
    likeCarList.innerText = "아직 찜한 자동차가 없습니다...";
  } else {
    //로컬스토리지에 데이터가 있다면 가져온 cars를 JSON으로 변경하기
    cars = JSON.parse(cars);

    let likeCarListHtml = document.createElement("ul");
    for (let i = 0; i < cars.length; i++) {
      likeCarListHtml.innerHTML += `<li>${cars[i]["VIN"]} | ${cars[i]["modelName"]} | ${cars[i]["color"]} | ${cars[i]["mileage"]} </li>`;
    }
    likeCarList.appendChild(likeCarListHtml);
  }
};

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
    let localCars = localStorage.getItem("cars");

    if (!localCars) {
      localCars = [cars]; //위에서 정의한 오브젝트 cars를 배열로 저장.
    } else {
      //car가 있다면 자바스크립트 형태로 변경
      localCars = JSON.parse(localCars); //parse?
      localCars.push(cars);
    }
    //로컬스토리지에 저장하기 위해 문자열로 변환
    const carsJson = JSON.stringify(localCars);
    localStorage.setItem("cars", carsJson);
  });
});
