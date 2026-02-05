export const userAvatar =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const Background_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/39cd71fa-e2b4-49f1-aa5e-b93602b28c59/web/IN-en-20250428-TRIFECTA-perspective_760c6d52-3da5-44d7-bb30-ad2920b7021a_large.jpg";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "french", name: "French" },
];

export const GEMINI_KEY = import.meta.env.VITE_APP_GEMINI_KEY;
