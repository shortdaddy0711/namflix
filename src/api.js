import axios from 'axios';
import APIKey from './apiKey';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: APIKey,
    language: 'en-US',
  },
});

const appendParam = (val) => {
  params: {
    append_to_response: val,
  },
};

const searchParam = (term) => {
  params: {
    query: encodeURIComponent(term),
  }
}

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  pupular: () => api.get('movie/popular'),
  movieDetail: (id) => api.get(`movie/${id}`, appendParam('videos')),
  search: (term) => api.get('search/movie', searchParam(term)),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/pupular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id) => api.get(`tv/${id}`, appendParam('videos')),
  search: (term) => api.get('search/tv', searchParam(term)),
};