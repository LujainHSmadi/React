import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MovieList.css'
function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
                setLoading(false);
                // setPage(data.page);
                // console.log(data);
            });
    }, []);
    return (
        <>
            {loading && <h3>loading..</h3>}
            <div className="movie__details">
            {

               
                movies.map((movie) => (

                    <div  key={movie.id}>
                        <Link to={`${movie.id}`} >
                            <div className="movie__item">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt=""
                                />
                                <div className="movie__title"> {movie.title}</div>
                            </div>
                        </Link >

                    </div>




                    )
                    
                    )
            }
            </div>
        </>
    );
}
export default MovieList;