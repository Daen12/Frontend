//내용 작성 후 투표 생성

//답변항목 추가, 삭제
const addBtn = document.getElementById("addBtn");

function deleteList(e) {
    e.target.parentNode.remove();
}
function paintList() {
    let parent = document.querySelector(".answerTab");
    let answers = document.createElement("div");
    answers.className = "answers";

    let answerBox = document.createElement("input");
    answerBox.setAttribute("class", "answer");
    answerBox.setAttribute("id", "answer");
    answerBox.setAttribute("type", "text");

    let deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "삭제");

    parent.appendChild(answers);
    answers.appendChild(answerBox);
    answers.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteList);
}
addBtn.addEventListener("click", paintList);

//투표지에 올리기
const submitBtn = document.querySelector(".submitBtn");

function dataLoad() {
    const question = document.querySelector(".questionBox").value;
    const answers = document.querySelectorAll("#answer");
    const answerList = [];
    answers.forEach((ans) => {
        answerList.push(ans.value);
    });
    console.log(question);
    console.log(answerList);

    window.localStorage.setItem("question", question);
    window.localStorage.setItem("answerList", answerList);
}
submitBtn.addEventListener("click", dataLoad);
