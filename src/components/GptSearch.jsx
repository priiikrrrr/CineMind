import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchPage from "./GptSearchPage";
import { Background_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={Background_URL}
          className="h-screen object-cover md:h-[100%]"
          alt="background image"
        />
      </div>
      <GptSearchPage />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
