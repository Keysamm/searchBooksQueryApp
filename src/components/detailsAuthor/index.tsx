import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface DetailsAuthorProps {
  author: string;
}

const DetailsAuthor: React.FC<DetailsAuthorProps> = ({author}) => {
  return (
    <View style={styles.wrapper}>
      <Text>Author:</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  );
};

export default DetailsAuthor;
