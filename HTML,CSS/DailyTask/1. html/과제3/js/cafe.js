//log in -> bring prompt to enter ids and passwords.
//id = ssafy & pw = 1234
const loginBtn = document.getElementById("a-login");

function loginProcess() {
    let responseID = window.prompt("아이디 입력");
    let responsePW = prompt("비밀번호 입력");
    let signinTab = document.getElementById("sign-in");
    let loginTab = document.getElementById("a-login");
    if (responseID === "ssafy" && responsePW === "1234") {
        alert("로그인 성공!!");
        //상단의 메뉴 변경
        signinTab.remove();
        loginTab.remove();
        //프로필 이미지 변경
        document
            .querySelector(".profile_img")
            .setAttribute("src", "./img/profile.png");
    } else {
        alert("로그인에 실패했습니다.");
    }
}
//로그인 시 구현되는 기능들
loginBtn.addEventListener("click", loginProcess);

//전국 매장 접기 / 펼치기
const foldNationWide = document.querySelector("#foldNationWide");
const localStores = document.querySelectorAll(".store_item_sub");
const regionalStores = document.querySelectorAll(".store_area");

//flag 지정
let unfolded = true;

function fold() {
    if (unfolded) {
        localStores.forEach((stores) => {
            stores.style.display = "none";
        });
        foldNationWide.innerHTML = "전국매장펼치기";
        unfolded = false;
    } else {
        localStores.forEach((stores) => {
            stores.setAttribute("style", "display :");
        });
        foldNationWide.innerHTML = "전국매장접기";
        unfolded = true;
    }
}

foldNationWide.addEventListener("click", fold);

//하나의 매장에 대해 지역매장 펼치기/접기

function regionFold(e) {
    let target = e.target.parentNode.childNodes[3];
    if (target.style.display === "none") {
        target.setAttribute("style", "display:");
    } else {
        target.setAttribute("style", "display: none");
    }
}
//각각의 지역에 대해 기능 추가하기
regionalStores.forEach((store) => {
    store.addEventListener("click", regionFold);
});

//관리자메뉴 클릭 시 창 띄우기
const manageBtn = document.getElementById("manageBtn");

function makePoll() {
    let option = "width = 400px, height = 400px";
    let url = "js/pollmake.html";
    let name = "popup";
    window.open(url, name, option);
}

manageBtn.addEventListener("click", makePoll);

//로컬스토리지에서 값 받아와서 투표용지 생성
const question = window.localStorage.getItem("question");
const answerList = window.localStorage.getItem("answerList").split(",");

const vote_question = document.querySelector(".vote_question");
vote_question.innerText = question;

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");

first.innerText = answerList[0];
second.innerText = answerList[1];
third.innerText = answerList[2];
fourth.innerText = answerList[3];
