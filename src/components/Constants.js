import config from "../config/config";
const Constants = {};
Constants.DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
Constants.MOVIE_URL =
    `https://www.omdbapi.com/`;
Constants.MOVIE_API_KEY =
    config.movie_api_key;
Constants.MOVIE_API_URL =
    `${Constants.MOVIE_URL}?s=man&apikey=${Constants.MOVIE_API_KEY}`;


export default Constants;
