import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Movie() {
    const [movie, setMovie] = useState({});
    const [movies, setMovies] = useState([]);
    const { movie_id } = useParams();
    useEffect(() => {
        axios(
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=aa4bd1bce4554a2e53b3fc7f8136422c`
        )
            .then((res) => setMovie(res.data))
            .catch((err) => {
                console.log(err);
            });
        window.scrollTo(0, 0);
    }, [movie_id]);
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, []);
    console.log(movie);
    return (
        <div>
            <Link to={`/${movie_id}`}> <h1>{movie.title}</h1> </Link>

            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
            <pre> Release Date :
                {movie.release_date}
                
            </pre>


        </div>

    );
}

export default Movie;