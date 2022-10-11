import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

type ILoaderProps = {
  show?: boolean;
};

const Loader: FC<ILoaderProps> = ({show}) => {
  if (!show) {
    return null;
  }

  return (
    <View style={styles.loaderView}>
      <ActivityIndicator color={'lightblue'} size={'large'} />
    </View>
  );
};

export default Loader;
