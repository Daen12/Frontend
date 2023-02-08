window.onload = () => {
    // json의 영화정보와 영화이미지 불러와서 화면에 쏘기
    let movieList = document.querySelector(".content-movie");
    if (!movieList) return;

    const xhr = new XMLHttpRequest();
    let method = "GET";
    let url = "./data/movie.json";

    xhr.open(method, url);

    xhr.setRequestHeader("Content-Type", "application/text");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const resJson = JSON.parse(xhr.responseText);
            const movieData = resJson.movies;
            for (let i = 0; i < movieData.length; i++) {
                let movieItem = `
        <li>
        <div>
          <div>
            <img src=${movieData[i]["img"]} alt="" />
          </div>
          <div class="movie-info">
            <div>
              <div>${movieData[i]["title"]}</div>
              <hr />
              <div>${movieData[i]["genre"]}</div>
              <div>${movieData[i]["director"]}</div>
              <div>${movieData[i]["runningTime"]}</div>
            </div>
            <div>
              <button class="zzim-button">찜</button>
            </div>
          </div>
        </div>
      </li>`;

                movieList.innerHTML += movieItem;
            }

            // 방법2. 여기서! for문 돌고 이후에 zzim-button 클래스 생성되었을때 바로 이벤트 적용
            let likes = document.querySelectorAll(".zzim-button");

            likes.forEach((btn) => {
                btn.addEventListener("click", getInfo);
            });
        }
    };

    xhr.send();

    //찜리스트에 로컬스토리지의 정보 불러와서 paint
    let movies = localStorage.getItem("movies");
    let likedMovies = document.getElementById("like-movie-list"); //찜리스트의 형제div

    if (!likedMovies) return;

    if (!movies) {
        likedMovies.innerText = "아직 찜한 영화가 없습니다...";
    } else {
        movies = JSON.parse(movies);
        const likeMovieList = document.createElement("ul");

        for (let i = 0; i < movies.length; i++) {
            likeMovieList.innerHTML += `<li>${movies[i]["title"]} | ${movies[i]["genre"]} | ${movies[i]["director"]} | ${movies[i]["duration"]} </li>`;
        }
        likedMovies.appendChild(likeMovieList);

        //이후에 찜버튼이 생김.
    }
};

//찜 버튼을 누르면
//해당 영화의 정보가 로컬스토리지에 배열 형태로 저장됨.

//1. 찜버튼에 바로 이벤트 추가시, 없는 클래스에 이벤트를 추가하는것이 되므로 부모한테 위임을 해서 작동하도록 함.
// const likes = document.querySelectorAll(".zzim-button");
// const likes = document.querySelector(".content-movie");

function getInfo(e) {
    if (e.target.className !== "zzim-button") {
        return;
    } else {
        let data = e.target.parentElement.parentElement.innerText.split("\n");
        let movies = localStorage.getItem("movies");

        const infos = {
            title: data[0],
            genre: data[1],
            director: data[2],
            duration: data[3],
        };

        //만약 기존 배열이 없다면
        //infos를 문자열 형태로 바꾸어서 로컬스토리지에 저장
        //만약 있다면
        //기존 배열을 파싱해서 가져온다음 새로운 info를 push하기.
        if (!movies) {
            movies = [infos];
        } else {
            movies = JSON.parse(movies);
            movies.push(infos);
        }
        localStorage.setItem("movies", JSON.stringify(movies));

        location.reload("index.html");
    }
}

// likes.addEventListener("click", getInfo);
// likes.forEach((like) => {
//     like.addEventListener("click", getInfo);
// });
