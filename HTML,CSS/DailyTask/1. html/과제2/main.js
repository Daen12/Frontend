const likes = document.querySelectorAll(".zzim-button");

function getInfo(e) {
  let data = e.target.parentElement.parentElement.innerText.split("\n");

  const infos = {
    title: data[0],
    genre: data[1],
    director: data[2],
    duration: data[3],
  };

  console.log(infos);
}

likes.forEach((like) => {
  like.addEventListener("click", getInfo);
});
