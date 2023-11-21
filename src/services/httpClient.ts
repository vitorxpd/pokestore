import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});
