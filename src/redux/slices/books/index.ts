import {createSlice} from '@reduxjs/toolkit';
import {showMessage} from 'react-native-flash-message';
import {IBookProps} from '../../../interfaces/book';
import {getAllBooks, searchBooks} from './thunk';

export interface IStateProps {
  data: IBookProps[];
  loading: boolean;
  loadError: boolean;
}

const initialState: IStateProps = {
  data: [],
  loading: false,
  loadError: false,
};

const BooksReducer = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllBooks.pending, state => {
      state.loading = true;
      state.loadError = false;
    });

    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addCase(getAllBooks.rejected, (state, action) => {
      showMessage({
        description: 'Get all books request failed!',
        message: action.error.message || '',
        type: 'danger',
      });
      state.loading = false;
      state.loadError = true;
    });

    builder.addCase(searchBooks.pending, state => {
      state.loading = true;
      state.loadError = false;
    });
    builder.addCase(searchBooks.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(searchBooks.rejected, (state, action) => {
      showMessage({
        description: 'Search books request failed!',
        message: action.error.message || '',
        type: 'danger',
      });
      state.loading = false;
      state.loadError = true;
    });
  },
});

export default BooksReducer.reducer;
