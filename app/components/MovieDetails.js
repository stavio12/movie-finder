import React, { useEffect, useState } from "react";
import MovieInfos from "./MovieInfos";
import Axios from "axios";
import LoadingIcon from "./LoadingIcon";

function MovieInfo(props) {
  const [details, setDetails] = useState([props.title]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  var title;

  details.map((movie) => {
    title = movie;
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(`YOUR KEY=${title}`);
      setData([response.data]);
      setLoading(false);
    };

    fetchData();
  }, [title]);

  if (loading) return <LoadingIcon />;

  return (
    <>
      {data.map((movie) => (
        <MovieInfos movie={movie} />
      ))}
    </>
  );
}

export default MovieInfo;
