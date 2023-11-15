import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Individual from "../individualMovie/Individual";
import Search from "../../components/search/Search";

const Home = () => {
  const [allMoviesData, setallMoviesData] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  // const [favourites, setFavourites] = useState([]);

  const fetchMovies = async () => {
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

    setallMoviesData(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div>
        <Search searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      </div>
      <div className="text-white ml-auto mr-auto">
        <div className="ml-8">
          <div className="pt-6 text-2xl text-[#d1d1d1]">
            <p>Trending </p>
          </div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            renderIndicator={false}
            showArrows={false}
            showStatus={false}
          >
            {" "}
            {allMoviesData &&
              allMoviesData.results?.map((movie, index) => (
                <div key={index} className="my-[30px] w-[98%]">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    className="w-[100%] h-[40vh] object-cover rounded-xl "
                  />
                </div>
              ))}
          </Carousel>
        </div>
        <div className="individualMovieContainer">
          <div className="pl-[2rem] pb-8 pt-10 text-2xl text-[#d1d1d1]">
            <span>Recommended for you </span>
          </div>
          <div className="">
            <div className="grid grid-cols-4 gap-[20px] ml-8">
              {allMoviesData &&
                allMoviesData.results
                  ?.filter((movie) => {
                    if (searchTxt === "") return movie;
                    else if (
                      movie.title
                        .toLowerCase()
                        .includes(searchTxt.toLowerCase())
                    )
                      return movie;
                  })
                  .map((movie, index) => (
                    <Individual key={movie.id} movie={movie} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
