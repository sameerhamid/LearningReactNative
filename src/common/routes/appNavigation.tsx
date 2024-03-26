import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../container/auth/loginScreen';
import {NavScreenTags} from '../constants/navScreenTags';
import SignUpScreen from '../../container/auth/signUpScreen';
import {navigationRef} from '../utils/navigatorUtils';
import HomeContainer from './homeContainer';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavScreenTags.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={NavScreenTags.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
      <Stack.Screen name={NavScreenTags.HOME_STACK} component={HomeContainer} />
    </Stack.Navigator>
  );
};

const RootStack = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavScreenTags.AUTH_STACK} component={AuthStack} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
