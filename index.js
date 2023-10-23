import { app } from "./choi_firebase.js";
import {
  getFirestore,
  collection,
  setDoc,
  getDocs,
  getDoc,
  doc,
  query,
  orderBy,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const db = getFirestore(app);
const commentRef = collection(db, "comment");

const commentObj = {
  commentId: "",
  commentName: "",
  commentPassword: "",
  commentContents: "",
  regDate: "",
};

const getDate = () => {
  let today = new Date();
  let year = String(today.getFullYear()); // 년도
  let month = String(today.getMonth() + 1).padStart(2, "0"); // 월
  let date = String(today.getDate()).padStart(2, "0"); // 날짜
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  return `${year}.${month}.${date} ${hours}:${minutes}:${seconds}`;
};

// 영화 API 요청 코드 적용하기
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTFjNjk4MTE4MmViODc2NzZiYzVhMTg4ZThhOWQ0MiIsInN1YiI6IjY1MmYyNTJjYTgwMjM2MDEzNzY4ODcxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-UkyqZVPy2wc0fuE1W3wxB6bqiGKLseVGGyUEeHltAQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))

  