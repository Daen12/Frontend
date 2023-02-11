window.onload = function () {
  let movies = localStorage.getItem("movies");
  const likeMovieEmpty = document.querySelector("#like-moive-empty");
  const likeMoviesUl = document.querySelector("#like-movie-list");
  if (movies === null) {
    likeMovieEmpty.setAttribute("style", "display: block;");
  } else {
    likeMovieEmpty.setAttribute("style", "display: None;");
    movies = JSON.parse(movies);

    let likeMovieList = "";
    for (let i = 0; i < movies.length; i++) {
      likeMovieList += `<li class="list-group-item"> ${movies[i]["title"]} | ${movies[i]["genre"]} | ${movies[i]["director"]} | ${movies[i]["runningTime"]}</li>`;
    }
    likeMoviesUl.innerHTML = likeMovieList;
  }

  // ajax 를 위한 xmlhttprequest 객체 생성
  const xhr = new XMLHttpRequest();
  // GET 방식
  const method = "GET";
  // json 파일 위치
  const url = "data/movie.json";

  // 요청 초기화
  xhr.open(method, url);
  // 헤더 정보 초기화
  xhr.setRequestHeader("Content-Type", "application/text");

  // 객체 상태 변화 이벤트 핸들러 함수 정의
  xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        const resJson = JSON.parse(xhr.responseText);
        const movieData = resJson.movies;

        let movieList = document.querySelector(".content-movie-list");
        for (let i = 0; i < movieData.length; i++) {
          let movieItem = `
            <div class="card p-3 mb-3 col-12 col-md-6 col-lg-3">
              <div>
                <img src="${movieData[i]["img"]}" class="img-thumbnail" alt="">
              </div>
              <div class="movie-info d-flex justify-content-around mt-2">
                <div class="card-text" style="font-size: 0.9rem;">
                  <div>${movieData[i]["title"]}</div>
                  <hr>
                  <div>${movieData[i]["genre"]}</div>
                  <div>${movieData[i]["director"]}</div>
                  <div>${movieData[i]["runningTime"]}분</div>
                </div>
                <div>
                  <button class="btn btn-outline-danger like-btn"><i class="bi bi-heart-fill like-btn"></i></button>
                </div>
              </div>
            </div>
            `;
          movieList.innerHTML += movieItem;
        }
      }
    }
  };

  xhr.send();

  // // ES6 fetch 를 사용한 비동기 통신
  // fetch("data/movie.json", {
  //   method: "get",
  // })
  //   .then((response) => {
  //     const resJson = response.json();
  //     console.log(resJson);
  //     return resJson;
  //   })
  //   .then((data) => {
  //     const movieData = data.movies;

  //     let movieList = document.querySelector(".content-movie-list");
  //     for (let i = 0; i < movieData.length; i++) {
  //       let movieItem = `
  //       <div class="card p-3 mb-3 col-12 col-md-6 col-lg-3">
  //         <div>
  //           <img src="${movieData[i]["img"]}" class="img-thumbnail" alt="">
  //         </div>
  //         <div class="movie-info d-flex justify-content-around mt-2">
  //           <div class="card-text" style="font-size: 0.9rem;">
  //             <div>${movieData[i]["title"]}</div>
  //             <hr>
  //             <div>${movieData[i]["genre"]}</div>
  //             <div>${movieData[i]["director"]}</div>
  //             <div>${movieData[i]["runningTime"]}분</div>
  //           </div>
  //           <div>
  //             <button class="btn btn-outline-danger like-btn"><i class="bi bi-heart-fill like-btn"></i></button>
  //           </div>
  //         </div>
  //       </div>
  //         `;
  //       movieList.innerHTML += movieItem;
  //     }
  //   })
  //   .catch((exception) => {
  //     console.log(exception);
  //   });
};

// 동적으로 생성된 버튼에는 이벤트 등록이 안됨 ( 정확히 말하면 동적으로 생성하는 스코프 안에서 등록 해야함 )
// 부모 요소에 이벤트 리스너 등록 ( 버블링 )
const contentMovieList = document.querySelector(".content-movie-list");

// 각 요소를 돌면서 해당 버튼에 클릭 이벤트 달기.
contentMovieList.addEventListener("click", function (event) {
  if (!event.target.className.includes("like-btn")) return;

  // 구조에 따라 달라질 수도 있음.
  const data = event.target.parentElement.parentElement.parentElement
    .querySelector(".card-text")
    .innerText.split("\n");

  // 영화 정보를 JSON으로 변경
  const movie = {
    title: data[0],
    genre: data[1],
    director: data[2],
    runningTime: data[3],
  };
  let localMoives = localStorage.getItem("movies");
  // 기존의 로컬스토리지에 저장된 찜리스트가 없다면
  if (localMoives === null) {
    localMoives = [movie];
  } else {
    // 기존의 로컬스토리지에 저장된 찜리스트가 있다면
    // 로컬스토리지에는 문자열의 형태로 저장이 되므로 이를 다시 JSON 형태로 변환
    localMoives = JSON.parse(localMoives);
    localMoives.push(movie);
  }
  // 로컬스토리지에 저장하기 위해 문자열 형태로 변환
  const moviesJson = JSON.stringify(localMoives);
  // 로컬스토리지에 movies라는 이름으로 데이터를 저장
  localStorage.setItem("movies", moviesJson);
});
