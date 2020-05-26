import React, { useEffect } from "react"


function MovieInfos(props) {
const title = props.movie

console.log(title)


 return (
    <>
       <div className="col-12 col-md-6 mt-md-5 p-md-5">
        <div className="card mb-3 text-white  bg-info movieinfo">
          <div className="card-body text-left">
            <h4 className="card-title">{title.Title}</h4>
 <p className="card-text"></p>
            <p className="card-text">
              <small>{title.Genre} {" |  "} {title.Runtime} </small>
            </p>
            <hr/>
            <h5 className="card-text">
 <small>IMDB Rating: {title.imdbRating} {" | "} IMDB Votes: {title.imdbVotes}</small>
            </h5>
            <hr/>
            <p className="card-text">
              {title.Plot}
            </p>
            <h5 className="card-text">
              <small> <strong>Released:</strong> {title.Released}</small>
              <small> <strong>Country:</strong> {title.Country}</small>
            </h5>
            <p className="card-text"> <strong>Director:</strong> {title.Director}</p>
            <p className="card-text"> <strong>Actors:</strong> {title.Actors}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieInfos