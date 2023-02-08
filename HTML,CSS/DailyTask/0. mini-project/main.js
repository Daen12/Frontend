document.addEventListener("DOMContentLoaded", nameLater);

function nameLater() {
    const cardArray = [
        {
            name: "Dayoung",
            img: "img/Dayoung.png",
        },
        {
            name: "Hyunjung",
            img: "img/Hyunjung.png",
        },
        {
            name: "Jieun",
            img: "img/Jieun.png",
        },
        {
            name: "Jiyeon",
            img: "img/Jiyeon.png",
        },
        {
            name: "Taeheum",
            img: "img/Taeheum.png",
        },
        {
            name: "Yeongheon",
            img: "img/Yeongheon.png",
        },
        {
            name: "Dayoung",
            img: "img/Dayoung.png",
        },
        {
            name: "Hyunjung",
            img: "img/Hyunjung.png",
        },
        {
            name: "Jieun",
            img: "img/Jieun.png",
        },
        {
            name: "Jiyeon",
            img: "img/Jiyeon.png",
        },
        {
            name: "Taeheum",
            img: "img/Taeheum.png",
        },
        {
            name: "Yeongheon",
            img: "img/Yeongheon.png",
        },
    ];
    //랜덤으로 카드 설정
    cardArray.sort(() => 0.5 - Math.random());

    let grid = document.querySelector(".grid");
    let resultDisplay = document.querySelector("#result");
    let choiceName = [];
    let choiceId = [];
    let cardsWon = [];

    //보드 만들기
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement("img");
            card.setAttribute("src", "./img/ssafy.png");
            card.setAttribute("id", i);
            card.addEventListener("click", flip);
            grid.appendChild(card);
        }
    }
    //check for matches
    function matchCheck() {
        let cards = document.querySelectorAll("img");
        let optOneId = choiceName[0];
        let optTwoId = choiceName[1];
        if (choiceName[0] === choiceName[1]) {
            alert("일치하는 사진을 찾았습니다!");
            cards[optOneId].setAttribute("src", "img/black.png");
            cards[optTwoId].setAttribute("src", "img/black.png");
            cardsWon.push(choiceName);
        } else {
            //만약에 매칭되지 않는다면 다시 Tree로 바꾸기
            cards[optOneId].setAttribute("src", "img/ssafy.png");
            cards[optTwoId].setAttribute("src", "img/ssafy.png");
            alert("다시 시도해보세요");
        }
        //다시 선택한 카드정보에 대한 배열을 초기화시키기
        choiceId = [];
        choiceName = [];
        resultDisplay.textContent = cardsWon.length;
        //만약 모든 카드들을 다 찾았다면
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Game Clear!";
        }
    }

    //flip the cards
    function flip() {
        let cardId = this.getAttribute("id");
        choiceName.push(cardArray[cardId].name);
        choiceId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img);

        if (choiceName.length === 2) {
            setTimeout(matchCheck, 500);
        }
    }
    createBoard();
}
