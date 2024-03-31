import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

export default function getStarted() {
  //   const navigation = useNavigation();
  //   navigation.navigate('Home')
  return (
    <SafeAreaView style={styles.layout}>
      <View>
        <Text>This is get started page</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#20156F',
    paddingHorizontal: 30,
  },
});
