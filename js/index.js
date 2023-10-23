const IMGPATH = "https://image.tmdb.org/t/p/w500"; // TMDB에서 영화 포스터 이미지의 기본 URL을 저장하는 상수.
const APIKEY = "7a1c6981182eb87676bc5a188e8a9d42"; // TMDB에서 API를 사용하기 위한 API키.
const API_url = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1"; // 영화 정보를 검색하기 위한 API 엔드포인트 URL을 저장.

const options = { // options 객체는 fetch 요청에 대한 옵션을 설정, get 요청 및 필요한 헤더를 설정.
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTFjNjk4MTE4MmViODc2NzZiYzVhMTg4ZThhOWQ0MiIsInN1YiI6IjY1MmYyNTJjYTgwMjM2MDEzNzY4ODcxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-UkyqZVPy2wc0fuE1W3wxB6bqiGKLseVGGyUEeHltAQ'
  }
};

// 영화 불러오기 기능 구현
fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options) // TMDB API에서 인기 영화 목록을 가져옴. option을 사용하여 헤더 및 인증을 설정.
  .then(response => response.json()) // 가져온 응답 데이터를 json형식으로 변환.
  .then(data => {
    const dataIndex = data.results;
    const cardList = document.querySelector('.card-list'); // .card-list라는 클래스를 가진 HTML 요소를 선택하고,
    cardList.innerHTML = ''; // 내부 HTML을 초기화.

  dataIndex.forEach(i => {
    let myTitle = i.title;
    let myOverView = i.overview;
    let myPosterPath = i.poster_path;
    let myVoteAverage = i.vote_average;
    let myId = i.id;

    let temp_html = `
      <div class="movie-card" data-id="${myId}">
        <img src="${IMGPATH}${myPosterPath}" alt="">
          <div class="movie-info">
            <h3>${myTitle}</h3>
              <span>${myVoteAverage}</span>
          </div>
         <div class="overview">
           <h3>영화리뷰</h3>
           <p>${myOverView}</p>
         </div>
      </div>
`;

cardList.insertAdjacentHTML('beforeend', temp_html);
});

// 클릭시, 해당 영화의 ID를 alert창 출력.
const movieCards = document.querySelectorAll('.movie-card'); // document.querySelectorAll('.movie-card')를 사용하여 각 영화 카드를 선택함.
movieCards.forEach(card => {
  card.addEventListener('click', function() { // 모든 영화 카드에 대한 클릭 이벤트 리스너를 추가함.
    let movieId = this.getAttribute('data-id'); 
    alert(`영화 id: ${movieId}`); // 클릭할때, 해당 영화의 ID를 가져와서 알림창에 표시를 함.
  });
});
})
.catch(err => console.error(err));

// 검색기능 구현, 페이지네이션 구현, CSS 좀더 손보기, grid써보기
