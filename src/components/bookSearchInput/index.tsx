import React from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import styles from './styles';
import {useDebouncedCallback} from 'use-debounce';
import {searchBooks} from '../../redux/slices/books/thunk';

const BookSearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();

  const debounceSearch = useDebouncedCallback((text: string) => {
    dispatch(searchBooks(text));
  }, 700);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={debounceSearch}
        placeholder={'Search'}
        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
      />
    </View>
  );
};

export default BookSearchInput;
