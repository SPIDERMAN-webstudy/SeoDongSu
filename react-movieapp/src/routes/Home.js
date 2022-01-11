import React from "react";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [userInput, setuserInput] = useState("");
  const [genre, setGenre] = useState("");
  const [input, setInput] = useState(false);
  const onChange = (event) => {
    setuserInput(event.target.value);
  };
  const Select = (event) => {
    setGenre(event.target.value);
  };
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    console.log(json.data.movies);
    setLoading(false);
    const filterMovies = movies.filter((movies) => {
      return movies.map((movie) =>
        movie.title.toLowerCase().include(userInput)
      );
    });
    // setMovies(filterMovies);
    console.log(movies);
    console.log(userInput);
    if (userInput !== "") {
      setMovies(filterMovies);
      setInput(true);
    }
  };
  useEffect(() => {
    getMovies();
  }, [genre, userInput]);
  return (
    <div>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.page}>
          <h1 className={styles.title} onClick={getMovies}>
            Dong's Movie Cinema
          </h1>
          <div className={styles.add}>
            <form className={styles.form}>
              <input
                type="text"
                placeholder="영화 제목"
                onChange={onChange}
                className={styles.input}
              ></input>
              <button className={styles.button}>검색</button>
            </form>
            <select
              onChange={Select}
              name="genre"
              value={genre}
              className={styles.select}
            >
              <option value="">All</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Biography">Biography</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Documentary">Documentary</option>
              <option value="Drama">Drama</option>
              <option value="Family">Family</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Film Noir">Film Noir</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Music">Music</option>
              <option value="Musical">Musical</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Short Film">Short Film</option>
              <option value="Sport">Sport</option>
              <option value="Superhero">Superhero</option>
              <option value="Thriller">Thriller</option>
              <option value="War">War</option>
              <option value="Western">Western</option>
            </select>
          </div>
          <div className={styles.movie}>
            {/* {getMovies} */}
            {userInput ? (
              <h1>검색된 영화가 없습니다.</h1>
            ) : (
              movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
