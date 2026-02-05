import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef} from "react";
import { API_OPTIONS } from "../utils/constants";
import geminiai from "../utils/gemini";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchPage = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch= useDispatch();

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",API_OPTIONS
    );
    const json= await data.json();
    return json.results;

    
  };

const handleSearch = async () => {
    const query = searchText.current.value;
    if (!query) return;
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_APP_GEMINI_KEY}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Suggest 5 movie names, comma separated, for the query: " + query + ". Example: Don, War, Sholay, Raid, Drishyam" }] }]
            })
        });

        const json = await response.json();

        if (json.error) {
            console.error("Gemini API Error:", json.error.message);
            return;
        }

        const gptText = json.candidates[0].content.parts[0].text;
        const movieNames = gptText.split(",").map(m => m.trim());
        
        const promiseArray = movieNames.map(movie => searchMovie(movie));
        const tmdbResults = await Promise.all(promiseArray);
        
        dispatch(addGptMoviesResult({ movieNames: movieNames, movieResults: tmdbResults }));
    } catch (err) {
        console.error("Search failed:", err);
    }
};
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">

      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className=" p-4 m-4 col-span-9 bg-slate-50"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchPage;
