// import React, { useEffect } from "react";
// import Header from "./Header";
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import MainContainer from "./MainContainer";
// import SecondaryContainer from "./SecondaryContainer";
// import usePopularMovies from "../hooks/usePopularMovies";
// import { API_OPTIONS } from "../utils/constant";

// const Browse = () => {

//   useNowPlayingMovies();
//   usePopularMovies();

//   return (
//     <div>
//       <Header />
//       <MainContainer />
//       <SecondaryContainer />
//     </div>
//   );
// };

// export default Browse;

import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
