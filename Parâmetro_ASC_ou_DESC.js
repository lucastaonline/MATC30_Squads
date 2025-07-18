import axios from 'axios';

const API_URL = 'http://localhost:3000/api/links'; // ajuste para sua API real

export function getLinks(order = 'ASC') {
  return axios.get(API_URL, {
    params: { order }  // envia o parâmetro ASC ou DESC para o backend
  });
}
