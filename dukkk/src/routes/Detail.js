import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import Badge from "react-bootstrap/Badge";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    //console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>hi</div>;
}
export default Detail;
