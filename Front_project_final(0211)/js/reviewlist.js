const createRvBtn = document.querySelector("#m-review-create");
const tBody = document.querySelector("tbody");
const hbutton = document.querySelector(".homebutton");
let reviewList = [];
const rvListKey = "reviewList";
let videoToken = "videoToken";
let videoValue;
// let videoValue = "gMaB-fG4u4g";
let count = 0;
let className = "m-review-table-title";

window.onload = () => {
  // 컴퓨터에 저장된 json 불러오기
  // fetch("/data/review.json")
  //   .then((response) => response.json())
  //   .then((arr) => {
  //     console.log(arr[0]);
  //   });

  // 현재 비디오 고유값을 불러오기
  videoValue = localStorage.getItem(videoToken);
  let videoLink = document.querySelector("iframe");
  console.dir(videoLink.src);
  videoLink.src += `${videoValue}`;
  console.log(videoLink.src);

  let list = localStorage.getItem(rvListKey);
  // 리스트가 없거나 저장된 값이 없을 때
  if (list === null || list.length === 0 || list === undefined) {
    localStorage.setItem(rvListKey, JSON.stringify(reviewList));
    console.log("111");
  } else {
    // 리스트가 있을 때
    let rvList = JSON.parse(list);
    console.log("-----");
    console.log(rvList);

    // 순서 : 아이디(비디오 고유값), 타이틀, 유저, 카운트, 시간
    let index = 1;
    console.log(videoValue);
    rvList.forEach((review) => {
      if (review.id === videoValue) {
        // console.log(review);
        tBody.innerHTML += `<tr>
          <td>${index++}</td>
          <td class=${className}>${review.title}</td>
          <td>${review.user}</td>
          <td>${review.views}</td>
          <td>${review.regTime}</td>
        </tr>`;
      }
    });
  }
  // Home 버튼 누르면 main으로 넘어감
  hbutton.addEventListener("click", (event) => {
    location.href = "index.html";
  });

  // 제목을 누르면 해당 리뷰를 저장하고 리뷰 디테일페이지로 넘어감
  tBody.addEventListener("click", (event) => {
    // 리뷰 제목 외 다른것을 클릭하면 실행 안됨
    if (event.target.className !== className) {
      return;
    }

    // 리뷰 리스트를 로컬스토리지에서 불러옴
    let list = JSON.parse(localStorage.getItem(rvListKey));

    // 리뷰 리스트에서 리뷰 제목과 일치하는 리뷰를 reviewSelected로 저장함
    list.forEach((review) => {
      if (review.title === event.target.innerText) {
        localStorage.setItem("reviewSelected", JSON.stringify(review));
        return;
      }
    });
    goDetail();
  });
};

let title, content;

// 글작성 -> 등록 버튼을 누르면
createRvBtn.addEventListener("click", () => {
  let time = new Date();
  let title = document.querySelector("#recipient-name");
  let content = document.querySelector("#message-text");

  // 저장소에 넣기 1 : 값 세팅
  let reviewId = count++;
  let user = "a";
  let timeNow = getTime(time);

  // 순서 : 아이디(비디오 고유값), 타이틀, 유저, 카운트, 시간
  let review = {
    id: videoValue,
    title: title.value,
    user: user,
    views: "0",
    regTime: timeNow,
    content: content.value,
  };

  // 저장소에 넣기 2 : 배열 불러오기 -> 값 추가 -> 배열에 다시 넣기
  let list = JSON.parse(localStorage.getItem(rvListKey));
  list.push(review);
  localStorage.setItem(rvListKey, JSON.stringify(list));
  let len = list.length;
  // html에 넣기
  tBody.innerHTML += `<tr>
  <td>${len}</td>
  <td>${title.value}</td>
  <td>a</td>
  <td>0</td>
  <td>${timeNow}</td>
  </tr>`;
  location.reload();
});

function goDetail() {
  location.href = "reviewdetail.html";
}

// 현재 시간 구하기 (댓글용)
function getTime(time) {
  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDay();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  } ${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
