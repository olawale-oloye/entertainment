import React, { useState } from "react";
import Search from "../../components/search/Search";

const FeatureItems = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovies"));

  //   favouriteMovies.map((movie) => console.log(movie));

  return (
    <div>
      <div>
        <Search searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      </div>
      <div className="grid grid-cols-4 gap-[20px] ml-8">
        {favouriteMovies
          .filter((fav) => {
            if (searchTxt === "") return fav;
            else if (fav.title.toLowerCase().includes(searchTxt.toLowerCase()))
              return fav;
          })
          .map((movie, index) => (
            // <Individual key={movie.id} movie={movie} />

            <div key={movie.id} movie={movie} className="grid relative">
              {movie.poster && (
                <img
                  className="rounded-xl w-[90%] object-cover "
                  src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                  alt={`Poster for ${movie.poster}`}
                />
              )}

              <div className="text-[#d1d1d1]">
                <span className=" text-xs p-3">{movie.year.slice(0, 4)}</span>
                <span>{<i className="ri-film-fill pr-1"></i>}Movie</span>
                <p className="text-xs  p-3">{movie.title}</p>
              </div>

              {/* <div className="absolute top-3 right-14" key={movie.id}>
                <button onClick={() => handleFavouriteToogle(movie)}>
                  {isFavourite(movie.id) ? (
                    <i className="ri-bookmark-fill" key={movie.id}></i>
                  ) : (
                    <i className="ri-bookmark-line" key={movie.id}></i>
                  )}
                </button>
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeatureItems;
