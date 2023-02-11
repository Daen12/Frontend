const videoTitles = document.querySelectorAll(".video-title");
console.log(videoTitles);
const videoImages = document.querySelectorAll("#video-img");
const videoButtons = document.querySelectorAll(".video-button");
const channelName = document.querySelectorAll("#channelName");
const videoArray = fetch("data/video.json")
    .then((response) => response.text())
    .then((text) => JSON.parse(text))
    .then((body) => {
        console.log(body);
        for (let i = 0; i < body.length; i++) {
            videoTitles[i].innerText = body[i]["title"];
            let jsonURL = body[i]["id"];
            videoImages[i].src = `https://img.youtube.com/vi/${jsonURL}/0.jpg`;
            videoImages[i].setAttribute("data-id", jsonURL);
            videoButtons[i].innerText = body[i]["part"];
            videoButtons[i].href = body[i]["url"];
            channelName[i].innerText = body[i]["channelName"];
        }
    });

/////// 비디오 클릭하면 로컬스토리지에 해당 비디오의 아이디가 저장되도록 하기
console.log(videoImages);
videoImages.forEach((each) => {
    each.addEventListener("click", addLocalStorage);
});

function addLocalStorage(e) {
    let videoId = e.target.attributes[4]["value"];
    console.log("clicked");
    localStorage.setItem("videoToken", videoId);
    console.log(videoId);
    goList();
}

function goList() {
    location.href = "reviewlist.html";
}
// $(document).ready(function () {
//   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();
//   var scrollPosition = 0;

//   $(".carousel-control-next").on("click", function () {
//     console.log("hello");
//     if (scrollPosition < carouselWidth - cardWidth * 4) {
//       //check if you can go any further
//       scrollPosition += cardWidth; //update scroll position
//       $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
//     }
//   });

//   $(".carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0) {
//       scrollPosition -= cardWidth;
//       $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//     }
//   });
// });
