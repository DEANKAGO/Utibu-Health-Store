import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import signUp from '../screens/SignUp';
import cart from '../screens/Cart';
import checkOut from '../screens/CheckOut';
import details from '../screens/Details';
import getStarted from '../screens/GetStarted';
import logIn from '../screens/LogIn';
import myProfile from '../screens/MyProfile';
import orderConfirmationRider from '../screens/OrderConfirmationRider';
import orderHistory from '../screens/OrderHistory';

import {StatusBar} from 'react-native';

export type RootParamList = {
  getStarted: undefined;
  Home: undefined;
  signUp: undefined;
  logIn: undefined;
  myProfile: undefined;
  details: undefined;
  cart: undefined;
  checkOut: undefined;
  orderConfirmationRider: undefined;
  orderHistory: undefined;
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
        initialRouteName="getStarted"
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
        <Root.Screen
          name="signUp"
          component={signUp}
          options={{headerShown: false}}
        />

        <Root.Screen
          name="logIn"
          component={logIn}
          options={{headerShown: false}}
        />

        <Root.Screen
          name="getStarted"
          component={getStarted}
          options={{headerShown: false}}
        />

        <Root.Screen
          name="myProfile"
          component={myProfile}
          options={{headerShown: false}}
        />

        <Root.Screen
          name="details"
          component={details}
          options={{headerShown: false}}
        />

        <Root.Screen
          name="cart"
          component={cart}
          options={{headerShown: false}}
        />

        <Root.Screen
          name="checkOut"
          component={checkOut}
          options={{headerShown: false}}
        />

        <Root.Screen
          name="orderConfirmationRider"
          component={orderConfirmationRider}
          options={{headerShown: false}}
        />

        <Root.Screen
          name="orderHistory"
          component={orderHistory}
          options={{headerShown: false}}
        />
      </Root.Navigator>
    </>
  );
};
