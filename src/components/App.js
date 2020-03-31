import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from "./Header";
import Search from "./Search";
import Movies from "./Movies";
import Constants from "./Constants";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    async function fetchMovies(url) {
        let response = await fetch(url);
        let data = await response.json();
        setMovies(data.Search);
        setLoading(false);
        return data;
    }

    useEffect(() => {
        fetchMovies(Constants.MOVIE_API_URL);
    }, []);
    const search = (searchValue) => {
        setLoading(true);
        setErrorMessage(false);
        fetch(`${Constants.MOVIE_URL}?s=${searchValue}&apikey=${Constants.MOVIE_API_KEY}`)
            .then(response => response.json())
            .then(json => {
                if (json.Response === 'True') {
                    setMovies(json.Search);
                } else {
                    setErrorMessage(json.Error);
                }
                setLoading(false);
            });
    };

    return (
        <div className="App">
            <Header text="Movies"/>
            <Search search={search}/>
            <p className="App-intro"> Movie list</p>
            <div className="movies">
                {loading && !errorMessage ? (
                    <span>loading...</span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                    movies.map((movie, index) => (
                        <Movies key={`${index}-${movie.Title}`} movie={movie}/>
                    ))
                )}
            </div>
        </div>
    );

};
export default App;
