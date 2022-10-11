import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {IBookProps} from '../../interfaces/book';
import {useNavigation} from '@react-navigation/native';
import {DetailsScreenNavigationProp} from '../../interfaces/navigation';
import styles from './styles';
import ProgressiveImage from '../progressiveImage';

const IMAGE_WIDTH = 100;
const IMAGE_HEIGHT = 100;

const ListItem: React.FC<IBookProps> = props => {
  const {title, author, coverImageUrl, id, pageCount, publisher} = props;

  const {navigate} = useNavigation<DetailsScreenNavigationProp>();

  const openDetailScreen = useCallback(() => {
    navigate('Details', {id});
  }, [id, navigate]);

  return (
    <TouchableOpacity onPress={openDetailScreen} style={styles.item}>
      <ProgressiveImage
        uri={coverImageUrl}
        imageStyles={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
      />
      <View>
        <Text>Title: {title}</Text>
        <Text>Author: {author}</Text>
        <Text>Page count: {pageCount}</Text>
        <Text>Publisher: {publisher}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
