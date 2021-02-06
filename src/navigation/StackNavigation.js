/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../sreens/home'
import ShowNote from '../sreens/note/show'
import Notebook from '../sreens/note'
import Splash from '../sreens/splash'


const settings = {
  initialRouteName: 'Splash',
  headerMode: 'none',
  screenOptions: {
    animationEnabled: false,
  },
};

const nodes = [
  { name: 'Home', screen: Home },
  { name: 'Splash', screen: Splash },
  { name: 'ShowNote', screen: ShowNote },
  { name: 'Notebook', screen: Notebook },
];

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator {...settings}>
    {nodes.map((tab, i) => (
      <Stack.Screen key={i} name={tab.name} component={tab.screen} />
    ))}
  </Stack.Navigator>
);

export default StackNavigator;
