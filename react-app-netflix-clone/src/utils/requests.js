
// const API_KEY = process.env.REACT_APP_API_KEY;

// const requests = {
//   fetchTvPopularMovies: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
//   fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
// };

// export default requests;
//.............
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchTvPopularMovies: () => `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNowPlayingMovies: () => `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: () => `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: () => `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: () => `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchTopRatedMovies: () => `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
};

export default requests;
