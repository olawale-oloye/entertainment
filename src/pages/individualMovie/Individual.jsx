import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Individual = ({ movie }) => {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState([]);

  const storedFavourites =
    JSON.parse(localStorage.getItem("favouriteMovies")) || [];

  useEffect(() => {
    setFavourites(storedFavourites);
    // console.log(storedFavourites);
  }, []);

  const handleFavouriteToogle = (movie) => {
    localStorage.setItem(
      "favouriteMovies",
      JSON.stringify(favourites.push(movie))
    );
    console.log(storedFavourites);

    // setFavourites((prevFavourites) => {
    //   const movieIndex = prevFavourites.findIndex((fav) => fav.id === movie.id);
    //   let updatedFavourites;

    //   if (movieIndex !== -1) {
    //     updatedFavourites = prevFavourites.filter((fav) => fav.id !== movie.id);
    //     console.log(updatedFavourites);
    //   } else {
    //     updatedFavourites = [
    //       ...prevFavourites,
    //       {
    //         id: movie.id,
    //         title: movie.title,
    //         poster: movie.poster_path,
    //         year: movie.release_date,
    //       },
    //     ];
    //   }
    //   // setFavourites(updatedFavourites);
    //   // console.log(updatedFavourites);

    //   localStorage.setItem(
    //     "favouriteMovies",
    //     JSON.stringify(updatedFavourites)
    //   );
    //   return updatedFavourites;
    // });
  };

  const isFavourite = (movieId) => {
    // return favourites.some((fav) => fav.id === movieId);
  };

  return (
    <div className="">
      <div key={movie.id} movie={movie} className="grid relative">
        {movie.poster_path && (
          <img
            className="rounded-xl w-[90%] object-cover "
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Poster for ${movie.poster_path}`}
          />
        )}

        <div className="text-[#d1d1d1]">
          <span className=" text-xs p-3">{movie.release_date.slice(0, 4)}</span>
          <span>{<i className="ri-film-fill pr-1"></i>}Movie</span>
          <p className="text-xs  p-3">{movie.title}</p>
        </div>
        <div className="absolute top-3 right-14" key={movie.id}>
          <button onClick={() => handleFavouriteToogle(movie)}>
            {isFavourite(movie.id) ? (
              <i className="ri-bookmark-fill" key={movie.id}></i>
            ) : (
              <i className="ri-bookmark-line" key={movie.id}></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Individual;
