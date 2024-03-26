import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../container/home/homeScreen';
import {NavScreenTags} from '../constants/navScreenTags';
const HomeStack = createStackNavigator();

interface Props {}
const HomeContainer = (_props: Props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={NavScreenTags.HOME_SCREEN}
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeContainer;
