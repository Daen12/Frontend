// 데이터
// 파일명 - 음식명을 따로 배열로 만들지 않고
// 공백을 띄고 하나의 문자열로 만들어서 나중에 쪼개서 사용하자.
let foods = [
  "cake 케이크",
  "burger 햄버거",
  "steak 스테이크",
  "sandwich 샌드위치",
];

// 제일 처음에 
function init() {
  let html = "";
  foods.forEach(function (value, index) {
    let food = value.split(" ");
    html += `<img src="./images/${food[0]}.jpg" data-index="${index}">`;
  });
  document.querySelector(".img-thumb").innerHTML = html;

  choiceImg(0);

  // 이벤트 설정
  document.querySelector("#addBtn").addEventListener("click", addImg);

  let thumbs = document.querySelectorAll(".img-thumb > img");
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", function () {
      choiceImg(this.getAttribute("data-index"));
    });
  }
}

function addImg() {
  choiceImg(parseInt(Math.random() * 4));
}

function choiceImg(index) {
  let food = foods[index].split(" ");
  document
    .querySelector(".img-view > img")
    .setAttribute("src", `./images/${food[0]}.jpg`);
  document.querySelector("#foodName").innerHTML = food[1];

  let thumbs = document.querySelectorAll(".img-thumb > img");
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].classList.remove("choice");
  }
  thumbs[index].classList.add("choice");
}

// 초기 작업 내용 정의
init();
