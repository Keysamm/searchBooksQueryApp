import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface DetailsTitleProps {
  title: string;
}

const DetailsTitle: React.FC<DetailsTitleProps> = ({title}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default DetailsTitle;
