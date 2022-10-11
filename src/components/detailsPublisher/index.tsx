import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface DetailsPublisherProps {
  publisher: string;
}

const DetailsPublisher: React.FC<DetailsPublisherProps> = ({publisher}) => {
  return (
    <View style={styles.wrapper}>
      <Text>Publisher:</Text>
      <Text style={styles.publisher}>{publisher}</Text>
    </View>
  );
};

export default DetailsPublisher;
