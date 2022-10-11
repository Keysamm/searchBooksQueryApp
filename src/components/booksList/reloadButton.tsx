import React, {useCallback} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getAllBooks} from '../../redux/slices/books/thunk';
import {RootState, AppDispatch} from '../../redux/store';

import styles from './styles';

const ReloadButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const hasData = useSelector(
    (state: RootState) => state.books.data.length > 0,
  );
  const loadError = useSelector((state: RootState) => state.books.loadError);

  const reload = useCallback(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  if (hasData || !loadError) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.reloadButton} onPress={reload}>
      <Text style={styles.reloadButtonText}>Try again</Text>
    </TouchableOpacity>
  );
};

export default ReloadButton;
