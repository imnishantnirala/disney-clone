import axios from "axios";

const movieeBaseUrl = 'https://api.themoviedb.org/3';
const api_key = 'f327b948911705b310aee74c56cd0ff0';

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const getTrendingVideos = axios.get(movieeBaseUrl+"/trending/all/day?api_key="+api_key);

const getMoviesByGenreId = (id) => axios.get(movieByGenreBaseURL+"&with_genres="+id);

export default{getTrendingVideos, getMoviesByGenreId}
