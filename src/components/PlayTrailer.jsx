import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const PlayTrailer = ({ movieId, settogglePlayTrailer }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const closeTrailer = () => {
    settogglePlayTrailer(false);
  };

  const movieTrailer = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const result = json?.results.filter((video) => video.type === "Trailer");
    const resultTrailer = result[0].key;
    setTrailerKey(resultTrailer);
  };
  useEffect(() => {
    movieTrailer(movieId);
  }, [movieId]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">
      <button
        onClick={closeTrailer}
        className="absolute top-4 right-4 text-white text-2xl bg-gray-800 p-2 rounded-full hover:bg-red-600"
      >
        X
      </button>
      {trailerKey ? (
        <iframe
          className="h-screen w-screen"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&controls=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-white text-lg">Loading trailer...</p>
      )}
    </div>
  );
};

export default PlayTrailer;
