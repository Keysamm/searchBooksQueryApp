import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchBooks, searchBooksByQuery} from '../../../api/booksApi';

export const getAllBooks = createAsyncThunk('books/getAllBooks', async () => {
  const data = await fetchBooks();

  return data.books;
});

export const searchBooks = createAsyncThunk(
  'books/searchBooks',
  async (query: string) => {
    const data = await searchBooksByQuery(query);

    return data.books;
  },
);
