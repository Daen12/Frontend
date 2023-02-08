////////// 1. 예약버튼을 누르면 예약페이지로 이동
const reserveButton = document.querySelectorAll(".reserve-button");

function openReserve() {
    // let option = "width = 30, height = 30";
    let url = "./myReserve.html";
    let name = "popup";
    window.open(url, name);
    // 팝업창 사이즈 조절 작동안됨!
    window.resizeTo(300, 300);
}

reserveButton.forEach((each) => {
    each.addEventListener("click", openReserve);
});

///////// 2. 예약 내역을 로컬스토리지에 저장한다

//예약버튼 변수화, 클릭시 이벤트 발생
const reserveBtn = document.querySelector(".reserveBtn");
reserveBtn.addEventListener("click", save);

//이벤트 (로컬스토리지에 저장)
function save() {
    // const selected = document.querySelector("#restaurants");
    // const restaurant = selected.options[selected.selectedIndex].value;
    let restaurant = document.querySelector("#restaurants").value;
    let date = document.querySelector(".date").value;
    let time = document.querySelector("#time").value;

    //만약 셋다 값이 있다면,
    if (restaurant && date && time) {
        let reserveList = localStorage.getItem("reserves");
        let toAdd = {
            restName: restaurant,
            rdate: date,
            rtime: time,
        };
        //만약 로컬스토리지에 값이 있다면
        if (reserveList) {
            //파싱해서 값 가져와서 배열 뒤에 입력값 추가하기
            console.log("exists!");
            reserveList = JSON.parse(reserveList);
            reserveList.push(toAdd);
        } else {
            //없다면
            //새로 만들기
            reserveList = [toAdd];
        }
        //한꺼번에 문자열로 변환
        localStorage.setItem("reserves", JSON.stringify(reserveList));
    } else {
        window.alert("모두 필수 선택사항 입니다");
    }
}
