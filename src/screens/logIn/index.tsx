import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

export default function logIn() {
  //   const navigation = useNavigation();
  //   navigation.navigate('Home')
  return (
    <SafeAreaView style={styles.layout}>
      <View>
        <Text>This is login</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
});
