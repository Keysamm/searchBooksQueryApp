import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface DetailsPageCountProps {
  pageCount: number;
}

const DetailsPageCount: React.FC<DetailsPageCountProps> = ({pageCount}) => {
  return (
    <View style={styles.wrapper}>
      <Text>Page count:</Text>
      <Text style={styles.pageCount}>{pageCount}</Text>
    </View>
  );
};

export default DetailsPageCount;
