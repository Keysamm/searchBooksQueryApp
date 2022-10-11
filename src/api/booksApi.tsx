import {API_URL} from '@env';

const URL = `${API_URL}/books`;

export const fetchBooks = async () => {
  const response = await fetch(URL);

  return response.json();
};

export const searchBooksByQuery = async (query: string) => {
  const response = await fetch(`${URL}?q=${query}`);

  return response.json();
};
