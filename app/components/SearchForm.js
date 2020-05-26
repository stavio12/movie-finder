import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import Results from "./Results";

function SearchForm(props) {
  const [input, setInput] = useState();

  function searchMovie(e) {
    e.preventDefault();
    if (!input) {
      alert("Type in a movie");
    } else {
      props.searchMovie(input);
    }
  }

  return (
    <>
      <form className="form-group " onSubmit={searchMovie}>
        <div className="card text-center bg-secondary">
          <div className="card-header">
            <h1>Movie Finder</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">Search For Movies</h5>
            <input className="card-text form-control text-center bg-light" type="text" onChange={(e) => setInput(e.target.value)} autoFocus placeholder="Search Movies" />
            <br /> <button className="btn btn-info">Search Movie</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
