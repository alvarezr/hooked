import React from "react";
import Constants from "./Constants";
import './Movies.scss';
const Movies = (props) => {
    const {movie} = props;
    const getPoster = ({Poster}) => Poster === 'N/A' ? Constants.DEFAULT_PLACEHOLDER_IMAGE : Poster;
    const poster = getPoster(movie);
    const title = movie.Title;
    return (
        <div className="movie-card">
            <h2>{title}</h2>
            <div className="movie-card__media movie--poster">
                <img
                    src={poster}
                    alt={`The movie titled: ${title}`}
                />
            </div>
            <p className="movie-card__year">
                ({movie.Year})
            </p>
        </div>
    )
};

export default Movies;