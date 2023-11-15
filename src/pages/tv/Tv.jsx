import { useEffect, useState } from "react";
import Search from "../../components/search/Search";

const Tv = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const fetchTv = async () => {
    const response = await fetch("https://api.themoviedb.org/3/discover/tv", {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzgwZmE4YWUzOTIxMGYwNWVjZjA1YjkzZTI0NzRmNiIsInN1YiI6IjY1MjY1Y2M1MGNiMzM1MTZmNjNjNmQwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iXgunAMbgEE83GXGt1JatlaCFv60y2igtJhBO6EzOJc",
      },
    });
    const data = await response.json();
    if (response.ok) {
      setTvSeries(data);
    }
    // console.log(data);
  };
  useEffect(() => {
    fetchTv();
  }, []);
  //   console.log(tvSeries);
  return (
    <div>
      <div>
        <Search searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      </div>

      <div className="text-white ml-auto mr-auto">
        <div className="pl-[2rem] pb-8 pt-4 text-2xl text-[#d1d1d1]">
          <span>Recommended for you </span>
        </div>
        <div className="grid grid-cols-4 gap-[20px] ml-8">
          {tvSeries.results
            ?.filter((tv) => {
              if (searchTxt === "") return tv;
              else if (
                tv.original_name.toLowerCase().includes(searchTxt.toLowerCase())
              )
                return tv;
            })
            .map((tv, index) => (
              <div key={index} className="grid relative">
                {tv.poster_path && (
                  <img
                    className="rounded-xl w-[90%] object-cover "
                    src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                    alt={`Poster for ${tv.poster_path}`}
                  />
                )}
                <div className="text-[#d1d1d1]">
                  <span className="text-xs p-3">
                    {tv.first_air_date.slice(0, 4)}
                  </span>
                  <span className="text-xs">
                    {<i className="ri-tv-line pr-1"></i>}TV Series
                  </span>
                  <p className="text-xs pl-3">{tv.original_name}</p>
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

export default Tv;
