import React from 'react';
import {SafeAreaView} from 'react-native';
import BookSearchInput from '../../../components/bookSearchInput';
import BooksList from '../../../components/booksList';
import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <BookSearchInput />
      <BooksList />
    </SafeAreaView>
  );
};

export default HomeScreen;
