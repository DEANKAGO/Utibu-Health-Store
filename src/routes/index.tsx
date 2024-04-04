import React from 'react';
import {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import signUp from '../screens/SignUp';
import cart from '../screens/Cart';
import checkOut from '../screens/CheckOut';
import details from '../screens/Details';
import getStarted from '../screens/GetStarted';
import logIn from '../screens/LogIn';
import orderConfirmationRider from '../screens/OrderConfirmationRider';
import orderHistory from '../screens/OrderHistory';
import HomeSVG from '../images/Home.svg';
import ProfileSVG from '../images/User.svg';
import {useKeyboard} from '@react-native-community/hooks';
import {Platform, StatusBar, View} from 'react-native';
import {
  BottomTabBar,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MyProfile from '../screens/MyProfile';
import {Text} from 'react-native-svg';
import OrderHistory from '../screens/OrderHistory';
import {Product} from '../utibuData/data';

// import {useSafeAreaInsets} from 'react-native-safe-area-context';

type TabParamList = {
  Home: undefined;
  OrderHistory: undefined;
  MyProfile: undefined;
};

export type RootParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  getStarted: undefined;
  Home: undefined;
  signUp: undefined;
  logIn: undefined;
  myProfile: undefined;
  details: {
    product: Product;
  };
  cart: undefined;
  checkOut: undefined;
  orderConfirmationRider: undefined;
  orderHistory: undefined;
};

const Root = createStackNavigator<RootParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
export type TabNavigation = NavigationProp<TabParamList>;

const TabBar = (props: BottomTabBarProps) => {
  const {keyboardShown} = useKeyboard();
  return keyboardShown && Platform.OS === 'android' ? null : (
    <View>
      <BottomTabBar {...props} />
    </View>
  );
};

export const Label =
  (label: string) =>
  ({focused}: {focused: boolean}) =>
    <Text>{label}</Text>;

const Tabs = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <HomeSVG width={30} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          tabBarIcon: ({focused}) => <View />,
          tabBarLabel: 'Order history',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <></> : <ProfileSVG width={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

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
        initialRouteName="Tabs"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'OpenSans-SemiBold',
          },
        }}>
        <Root.Screen
          name="Tabs"
          component={Tabs}
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

        {/* <Root.Screen
          name="myProfile"
          component={myProfile}
          options={{headerShown: false}}
        /> */}

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
