import React, { useEffect, useState } from "react"
import MovieDetails from './MovieDetails'


function ResultCard(props) {
  const movie = props.movie


  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 py-5 ">
        <div className="card ">
    <img className="card-img-top" src={movie.Poster} alt="Card image cap"/>
    <div className="card-body">
    <h3 className="card-title p-3 text-center"><a href="#">  {movie.Title} </a> </h3>
    <h3 className="card-title p-1 text-center"><small className="text-muted">Year: {movie.Year}</small></h3>
    </div>
  </div>
</div>

</div>
</div>
    </>
  )
}

export default ResultCard