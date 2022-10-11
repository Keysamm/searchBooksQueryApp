import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface DetailsSynopsisProps {
  text: string;
}

const DetailsSynopsis: React.FC<DetailsSynopsisProps> = ({text}) => {
  return (
    <View style={styles.wrapper}>
      <Text>{text}</Text>
    </View>
  );
};

export default DetailsSynopsis;
