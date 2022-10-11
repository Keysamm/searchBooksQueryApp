import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IBookProps} from '../../interfaces/book';
import {getAllBooks} from '../../redux/slices/books/thunk';
import {AppDispatch, RootState} from '../../redux/store';
import Loader from '../loader';
import EmptyList from './emptyList';
import ListItem from './listItem';
import styles from './styles';

const BooksList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.books.data);
  const loading = useSelector((state: RootState) => state.books.loading);

  const fetchBooks = useCallback(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const renderItem = useCallback(({item}: {item: IBookProps}) => {
    return <ListItem {...item} />;
  }, []);

  const keyExtractor = useCallback((item: IBookProps) => String(item.id), []);

  return (
    <>
      <FlatList
        contentContainerStyle={styles.grow}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        ListEmptyComponent={EmptyList}
      />
      <Loader show={loading} />
    </>
  );
};

export default BooksList;
