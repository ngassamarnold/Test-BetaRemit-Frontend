/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../sreens/home'
import ShowNote from '../sreens/note/show'


const settings = {
  initialRouteName: 'Home',
  headerMode: 'none',
  screenOptions: {
    animationEnabled: false,
  },
};

const nodes = [
  { name: 'Home', screen: Home },
  { name: 'ShowNote', screen: ShowNote },
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
