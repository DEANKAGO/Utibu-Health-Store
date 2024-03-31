import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import {StatusBar} from 'react-native';

export type RootParamList = {
  Home: undefined;
};

const Root = createStackNavigator<RootParamList>();

export type RootNavigation = NavigationProp<RootParamList>;

export type RootRoute<T extends keyof RootParamList> = RouteProp<
  RootParamList,
  T
>;

export default () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor={'black'} />
      <Root.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'OpenSans-SemiBold',
          },
        }}>
        <Root.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Root.Navigator>
    </>
  );
};
