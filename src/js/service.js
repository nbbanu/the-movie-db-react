const base_api = "https://api.themoviedb.org/3/";
const read_access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWU1MmRkMmVjZTE2YTRmMDJiMWMyZjcxYWI3OTU1OSIsInN1YiI6IjVmM2JjMGVlNjZlNDY5MDAzMzUwNWFiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MrGT4xcpzcozg23QYUaAtFjtXT105cTUZV0mcuzPtXQ";
export const base_image_path = "https://image.tmdb.org/t/p/w500/";

const get = async (url) => {
  const request_url = base_api + url;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + read_access_token,
    },
  };

  const res = await fetch(request_url, options);
  const data = await res.json();

  return data?.results ? data?.results : data;
};

export const getTrends = async (type = "day") => {
  const url = `trending/movie/${type}?language=en-US`;
  const data = await get(url);

  return data;
};

export const getTrailers = async (type="movie") => {
  const url = `${type}/popular?language=en-US`;
  const data = await get(url);

  return data;
}

export const getPopulars = async (type="tv") => {
  const url = `${type}/popular?language=en-US`;
  const data = await get(url);

  return data;
}

export const getFreeToWatch = async (type = "day") => {
  const url = `trending/movie/${type}?language=en-US`;
  const data = await get(url);
  
  return data;
}

export const getTrailerVideos = async (movie_id) => {
  const url = `movie/${movie_id}/videos?language=en-US`;
  const data = await get(url)

  return data;
}

export const getMovieDetail = async(movie_id) => {
  const url = `movie/${movie_id}`;
  const data = await get(url);

  return data;
}

