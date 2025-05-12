const API_KEY = Process.env.REACT_APP_API_KEY;

const requests = {
  fetchTvPopularMovies: "tv/popular?api_key={API_KEY}&language=en-US&page=1",
  fetchNowPlayingMovies:
    "/movie/now_playing?api_key={API_KEY}&language=en-US&page=1",
  fetchActionMovies: "/genre/movie/list?api_key={api_key}&with_genres=28",
  fetchComedyMovies: "/genre/movie/list?api_key={api_key}&with_genres=35",
  fetchRomanceMovies: "/genre/movie/list?api_key={api_key}&with_genres=10749",
  fetchTopRatedMovies: "/tv/top_rated?api_key={API_KEY}&language=en-US&page=1",
  fetchTopRatedMovies:
    "/movie/top_rated?api_key={API_KEY}&language=en-US&page=1"
};
