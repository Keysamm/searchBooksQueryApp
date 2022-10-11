/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import Navigation from './navigation';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
