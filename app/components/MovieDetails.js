import React, { useEffect, useState } from "react";

function MovieInfo(props) {
  const infos = props.infos

console.log(infos)

  return (
    <>
{/* {
  data.map(i=>{
  console.log("Hello " + i)
})
} */}
  <div className="col-12 col-md-6">
    <div className="card mb-3 text-white text-center bg-info movieinfo">
      <div className="card-body">
<p className="card-text">Hello{infos}</p>
        <h5 className="card-text"><small>Released</small></h5> 
        <h5 className="card-text"><small>imdbRating</small></h5> 
        <p className="card-text">Actors</p>
      </div>
    </div>
  </div>

    </>
  );
}

export default MovieInfo;
