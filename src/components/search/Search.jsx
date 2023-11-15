import React, { useEffect, useState } from "react";
import Individual from "../../pages/individualMovie/Individual";

const Search = ({ searchTxt, setSearchTxt }) => {
  // const [searchTxt, setSearchTxt] = useState("");

  console.log(searchTxt);
  return (
    <div className="">
      <div className="mt-10  mb-7">
        <input
          type="text"
          className=" w-[88%] rounded-md h-8  pl-[4rem] text-amber-50 text-sm focus:outline-none bg-[#11141F]"
          placeholder={"Search for movies or TV series"}
          onChange={(e) => setSearchTxt(e.target.value)}
          value={searchTxt}
        />
        <i className="ri-search-2-line text-white absolute left-[7rem] top-6 mt-5"></i>
      </div>
    </div>
  );
};

export default Search;
