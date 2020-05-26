import React, { useEffect, useState, useContext, useReducer } from "react";
import SearchForm from './SearchForm'
import ResultCard from "./ResultCard";



function Results(props) {
  return (
    <>
{
 props.handleData.map(movie =>(
   <ResultCard key={movie.imdbID} movie={movie} />
))
}   

    </>
  )
}

export default Results