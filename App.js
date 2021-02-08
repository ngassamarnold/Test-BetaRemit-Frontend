/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/reducers';
import { navigationRef } from './src/navigation/RootNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </NavigationContainer>
  );
}
