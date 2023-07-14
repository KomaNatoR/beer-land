import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
});

export const getBeers = async params => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await instance.get('/beers', { page: 1 });

  return response.data;
  } catch (error) {
    error(error.message);
  }
};
// https://api.punkapi.com/v2/beers?page=1