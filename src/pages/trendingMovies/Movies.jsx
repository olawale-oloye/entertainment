import { useEffect, useState } from "react";
import Search from "../../components/search/Search";

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const fetchTrendingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzgwZmE4YWUzOTIxMGYwNWVjZjA1YjkzZTI0NzRmNiIsInN1YiI6IjY1MjY1Y2M1MGNiMzM1MTZmNjNjNmQwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iXgunAMbgEE83GXGt1JatlaCFv60y2igtJhBO6EzOJc",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      setTrendingMovies(data);
    }
    // console.log(data);
    // allTrendingMovies(data);
  };
  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  console.log(trendingMovies);
  return (
    <div>
      <div>
        <Search searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      </div>
      <div className="text-white ml-auto mr-auto mt-6">
        <div className="grid grid-cols-4 gap-[20px] ml-8">
          {trendingMovies.results
            ?.filter((movie) => {
              if (searchTxt === "") return movie;
              else if (
                movie.title.toLowerCase().includes(searchTxt.toLowerCase())
              )
                return movie;
            })

            .map((movie, index) => (
              <div key={index} className="grid relative">
                {movie.poster_path && (
                  <img
                    className="rounded-xl w-[90%] object-cover "
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`Poster for ${movie.poster_path}`}
                  />
                )}

                <div className="text-[#d1d1d1]">
                  <span className=" text-xs p-3">
                    {movie.release_date.slice(0, 4)}
                  </span>
                  <span>{<i className="ri-film-fill pr-1"></i>}Movie</span>
                  <p className="text-xs  p-3">{movie.title}</p>
                </div>
                <div className="absolute top-3 right-14">
                  <i className="ri-bookmark-line"></i>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
