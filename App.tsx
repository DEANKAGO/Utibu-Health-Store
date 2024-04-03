/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';
import {PharmacyCart} from './src/context/PharmacyContext';

function App(): React.JSX.Element {
  return (
    <PharmacyCart>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PharmacyCart>
  );
}

export default App;
