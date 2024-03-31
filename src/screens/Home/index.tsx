// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, SafeAreaView, Image} from 'react-native';

export default function Home() {
  //   const navigation = useNavigation();
  //   navigation.navigate('Home')
  return (
    <SafeAreaView style={styles.layout}>
      <View>
        <Image source={require('../../images/🦆 icon _Bars_.svg')} />
        <Image source={require('../../images/iconBars.svg')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
});
