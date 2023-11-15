import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div className=" pl-5 mt-8">
      <div className="bg-[#161D2E] w-14 h-[100%] rounded-tl-2xl rounded-tr-2xl text-[#596A8E] pl-4 pt-2">
        {/* Home Navigation Link  */}
        {location.pathname === "/" ? (
          <Link className="pb-10 pt-4 text-2xl" to="/">
            <i className="ri-clapperboard-fill  hover:text-gray-500  text-[#FD4745]  active:text-white"></i>
          </Link>
        ) : (
          <Link className="pb-10 pt-4 text-2xl" to="/">
            <i className="ri-clapperboard-fill  hover:text-gray-500"></i>
          </Link>
        )}

        <div className="flex flex-col text-[#596A8E] gap-3 text-2xl mt-[3rem]">
          {/* Movies Navigtion Link  */}
          {location.pathname === "/trending-movies" ? (
            <Link to="/trending-movies">
              <i className="ri-film-fill  hover:text-gray-500  text-[#FD4745] active:text-white"></i>
            </Link>
          ) : (
            <Link to="/trending-movies">
              <i className="ri-film-fill  hover:text-gray-500 active:text-white"></i>
            </Link>
          )}
          {/* Tv Navigation Link  */}
          {location.pathname === "/tv" ? (
            <Link to="/tv">
              <i className="ri-tv-fill  hover:text-gray-500  text-[#FD4745] active:text-white"></i>
            </Link>
          ) : (
            <Link to="/tv">
              <i className="ri-tv-fill  hover:text-gray-500 active:text-white"></i>
            </Link>
          )}

          {/* Favorite Navigation Link  */}

          {location.pathname === "/feature" ? (
            <Link to="/feature">
              <i className="ri-bookmark-fill  hover:text-gray-500 text-[#FD4745] active:text-white"></i>
            </Link>
          ) : (
            <Link to="/feature">
              <i className="ri-bookmark-fill  hover:text-gray-500 active:text-white"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
