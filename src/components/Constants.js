import config from '../../config/config';

const Constants = {};

Constants.DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
Constants.MOVIE_API_URL =
    `https://www.omdbapi.com/?s=man&apikey=${config.movie_api_key}`;
export default Constants
