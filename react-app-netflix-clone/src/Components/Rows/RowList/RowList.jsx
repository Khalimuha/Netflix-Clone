import React from "react";
import Row from "../Row/Row.jsx";
import requests from "../../../utils/requests.js";


const RowList = () => {
  return (
    <>
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingMovies()}/>
      <Row title="Popular Movies" fetchUrl={requests.fetchTvPopularMovies()} />
      <Row title="Action Movies " fetchUrl={requests.fetchActionMovies()} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies()} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies()} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies()} />
      
    </>
  );
};

export default RowList;
