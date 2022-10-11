import React from 'react';
import {View, Text} from 'react-native';
import ReloadButton from './reloadButton';
import styles from './styles';

const EmptyList = () => {
  return (
    <View style={[styles.grow, styles.alignCenter]}>
      <Text>List is empty</Text>
      <ReloadButton />
    </View>
  );
};

export default EmptyList;
