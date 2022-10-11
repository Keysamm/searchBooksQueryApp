import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Details: {id: string};
};

export type NavigationProps = NativeStackScreenProps<
  MainStackParamList,
  'Details'
>;

export type DetailsScreenNavigationProp = Props['navigation'];

export type DetailsScreenRouteProp = Props['route'];
