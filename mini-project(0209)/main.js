let choiceName = [];
let choiceId = [];
let cardsWon = [];
let startTime;
let endTime;
const rankingList = [];
const grid = document.querySelector(".grid");
const score = document.querySelector("#result");

document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  const game = new MatchGame();
  game.start(this.game, this.flip);
}

class MatchGame {
  constructor() {
    this.cardArray = [
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
  }

  start(flip, cardArray, matchCheck) {
    //랜덤으로 카드 설정
    cardArray = this.cardArray;
    matchCheck = this.matchCheck;
    // this.cardArray.sort(() => 0.5 - Math.random());

    //보드 만들기, cardArray의 길이는 12.
    for (let i = 0; i < cardArray.length; i++) {
      //img 태그를 생성하고 card로 저장.
      const card = document.createElement("img");
      //이미지 링크 디폴트는 싸피사진
      card.setAttribute("src", "./img/ssafy.png");
      //이미지에 아이디를 FOR문의 갯수 순서대로
      card.setAttribute("id", i);
      card.addEventListener("click", flip);
      grid.appendChild(card);
    }

    //카드 뒤집기 함수
    function flip(e) {
      //id attribute에 저장된 i값이 cardID에 저장됨
      //this 안되면 event.target. ... 이렇게 해보기!
      let cardId = e.target.getAttribute("id");
      cardId = Number(cardId);
      choiceName.push(cardArray[cardId].name);
      choiceId.push(cardId);
      e.target.setAttribute("src", cardArray[cardId]["img"]);
      //만약에 고른 카드를 더한 길이가 2이면 두장 다 고른것.
      if (choiceName.length == 2) {
        setTimeout(matchCheck, 500);
      }
    }
  }

  // 두장의 카드가 서로 맞는지 확인한다.
  matchCheck(cardArray) {
    //이름이 같을 경우 같은 카드인지 확인할 수 없음.
    //따라서 처음에 아이디가 같은것을 클릭했을 시 동일한 카드라고 알려주어야 함.
    cardArray = this.cardArray;
    const cards = document.querySelectorAll("img");
    const firstCard = cards[choiceId[0]];
    const secondCard = cards[choiceId[1]];

    if (choiceId[0] === choiceId[1]) {
      alert("주의 : 같은 사진을 클릭했습니다.");
      //다시 디폴트 사진으로 바꾸기
      firstCard.setAttribute("src", "img/ssafy.png");
      secondCard.setAttribute("src", "img/ssafy.png");
    } else if (choiceName[0] === choiceName[1]) {
      //위의 경우가 아니고 이름이 같으면 정답임.
      setTimeout(() => {
        firstCard.setAttribute("src", "img/black.png");
        secondCard.setAttribute("src", "img/black.png");
      }, 500);

      //해당 카드에 이벤트 리스너 없애기
      //   firstCard.removeEventListener("click", this.start.flip);
      //   secondCard.removeEventListener("click", this.start.flip);

      //맞춘 카드 배열에 해당 카드이름 (D, D) push
      cardsWon.push(choiceName);
    } else {
      //위 두 경우 모두 아니면 오답.
      //다시 사진 원래대로 돌리고, 1.5초 후 원래대로
      setTimeout(() => {
        firstCard.setAttribute("src", "img/ssafy.png");
        secondCard.setAttribute("src", "img/ssafy.png");
      }, 700);
    }

    //다시 선택한 카드정보에 대한 배열을 초기화시키기
    choiceId = [];
    choiceName = [];
    //스코어보드에 기록!
    score.innerText = `${cardsWon.length} 명 / 6명`;
    //만약 모든 카드들을 다 찾았다면
    if (cardsWon.length === 6) {
      score.innerText = "Game Clear! 축하합니다 짝짝짝";
      cardsWon = [];
      //끝난시간 측정, 시작시간을 빼서 브라우저에 걸린시간 출력
      endTime = new Date().getTime();
      let duration = Math.round((endTime - startTime) / 1000);
      const clock = document.querySelectorAll("#clock");
      clock[clock.length - 1].innerText = `${duration} 초`;
      //duration obj에 이름, 걸린시간 정보 푸시
      let userHist = JSON.parse(localStorage.getItem("users"));
      rankingList.push({
        duration: duration,
        name: userHist[userHist.length - 1],
      });

      //랭킹 1위 선별하여 브라우저에 출력하기
      let leastTime = 2000;
      let rankFirst = "";
      for (let i = 0; i < rankingList.length; i++) {
        let next = rankingList[i]["duration"];
        if (leastTime > next) {
          leastTime = next;
          rankFirst = rankingList[i]["name"];
        }
      }
      let winner = document.querySelector("#rankFirst");
      winner.innerText = rankFirst;
    }
  }
}

//input value를 가져와서 브라우저에 출력하기.

const registerBtn = document.querySelector("#registerBtn");

function setUser() {
  localStorage.getItem("users");
}
registerBtn.addEventListener("click", () => {
  grid.innerHTML = null;
  let userName = document.querySelector("#registerBox");
  let users = localStorage.getItem("users");
  if (users) {
    users = JSON.parse(users);
    users.push(userName.value);
  } else {
    //유저가 없으면 새로운 유저 배열로 등록.
    users = [userName.value];
  }
  //배열을 일렬로 저장
  localStorage.setItem("users", JSON.stringify(users));

  //인풋 텍스트 초기화
  // userName.setAttribute("placeholder", "");
  // userName.textContent = "";

  //브라우저에 출력
  const parent = document.querySelector(".rankBox");
  let userHTML = `<ul class="rank-ul"><li id="name">${userName.value}</li><li id="clock"></li></ul>`;

  parent.innerHTML += userHTML;
  startGame();
  //여기서 게임 시작 (시간 재기 & )
  startTime = new Date().getTime();

  userName.value = null;
});
