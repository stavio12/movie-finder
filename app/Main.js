import React, { useEffect, useState, useContext, useRef } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import Error from "./components/Error";

function App(props) {
  const [searchData, setSearchData] = useState([]);
  const [title, setTitle] = useState();
  const [noMovie, setNoMovie] = useState(false);

  async function handleSubmit(data) {
    setTitle(data);

    try {
      const response = await Axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=439203c9&s=${data}`);
      if (response.data.Response == "False") {
        setNoMovie(true);
        setSearchData([]);
        setTitle('');
      } else {
        setNoMovie(false);
        setSearchData(response.data.Search);
        setTitle(data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  // if(noMovie) {var Error = <Error />}

  return (
    <>
      <SearchForm searchMovie={handleSubmit} />
      {noMovie ? <Error /> : true}
      <Results handleData={searchData} />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
