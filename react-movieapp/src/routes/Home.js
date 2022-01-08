import React from "react";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import style from "../components/Movie.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [value, setvalue] = useState("");
  const onChange = (event) => {
    setvalue(event.target.value);
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
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style.movie}>
          <div className="Top">
            <div className="Title">
              <h2>Dong's Movie Cinema</h2>
            </div>
            <div className="Search">
              <form>
                <input
                  type="text"
                  placeholder="장르,검색"
                  onChange={onChange}
                ></input>
              </form>
            </div>
            <div className="TopMov"></div>
            <div className="TopCon"></div>
          </div>
          <div className="TopRate">
            <div className="TopRate_Title"></div>
          </div>
          <div className="genreSelec">
            <div className="genreSelec_Title"></div>
          </div>
          <div className="JJim">
            <div className="JJim_Title"></div>
          </div>
          <div className="Good">
            <div className="Good_Title"></div>
          </div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
