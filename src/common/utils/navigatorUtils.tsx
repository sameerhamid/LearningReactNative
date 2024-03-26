import {
  NavigationContainerRefWithCurrent,
  ParamListBase,
} from '@react-navigation/native';
import React from 'react';

export const navigationRef: React.RefObject<
  NavigationContainerRefWithCurrent<ParamListBase>
> = React.createRef();

export const navigate = (name: string, params?: object): void => {
  navigationRef.current?.navigate(name, params);
};

export const navigateToAnotherStack = (
  stackName: string,
  screenName: string,
  params?: object,
): void => {
  navigationRef.current?.navigate(stackName, {
    screen: screenName,
    params,
  });
};

export const goBack = () => {
  navigationRef.current?.goBack();
};
