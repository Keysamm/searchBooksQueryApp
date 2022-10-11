import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import DetailsAuthor from '../../../components/detailsAuthor';
import DetailsPageCount from '../../../components/detailsPageCount';
import DetailsPublisher from '../../../components/detailsPublisher';
import DetailsSynopsis from '../../../components/detailsSynopsis';
import DetailsTitle from '../../../components/detailsTitle';
import Loader from '../../../components/loader';
import ProgressiveImage from '../../../components/progressiveImage';
import {DetailsScreenRouteProp} from '../../../interfaces/navigation';
import {RootState} from '../../../redux/store';
import styles from './styles';

const DetailScreen = () => {
  const {
    params: {id},
  } = useRoute<DetailsScreenRouteProp>();

  const details = useSelector((state: RootState) =>
    state.books.data.find(item => item.id === id),
  );

  if (!details) {
    return <Loader show />;
  }

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView>
        <View>
          <ProgressiveImage
            uri={details.coverImageUrl}
            imageStyles={styles.image}
          />
          <DetailsTitle title={details.title} />
          <DetailsSynopsis text={details.synopsis} />
          <DetailsAuthor author={details.author} />
          <DetailsPublisher publisher={details.publisher} />
          <DetailsPageCount pageCount={details.pageCount} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
