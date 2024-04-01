import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {RootNavigation} from '../../routes';

export default function GetStarted() {
  const navigation = useNavigation<RootNavigation>();

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.welcome}>
        <View style={styles.welcome}>
          <View style={styles.imgView} />
          <Image
            style={styles.getStartedImg}
            source={require('../../images/pharmacyGetStarted1.png')}
            alt=""
          />
          <Text style={styles.getStartedText}>Utibu Health Store</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('signUp')}>
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#20156F',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  welcome: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
  },
  imgView: {
    zIndex: 100,
    backgroundColor: 'rgba(32,21,111, 0.8)',
    width: 299,
    height: 312,
    position: 'absolute',
    top: 70,
  },
  getStartedImg: {
    width: 299,
    height: 312,
  },
  getStartedText: {
    color: 'white',
    fontSize: 36,
    paddingTop: 30,
    width: 250,
    textAlign: 'center',
    fontFamily: 'poppins',
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 299,
    borderRadius: 50,
    marginBottom: 25,
  },
  buttonText: {
    color: '#20156F',
    fontSize: 24,
    fontWeight: '600',
  },
});
