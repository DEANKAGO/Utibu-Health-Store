import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RootNavigation} from '../../routes';

export default function LogIn() {
  const navigation = useNavigation<RootNavigation>();
  return (
    <SafeAreaView style={styles.layout}>
      <View>
        <View style={styles.header}>
          <Image
            style={styles.imgView}
            source={require('../../images/pharmacyLogo1.png')}
          />
          <Text style={styles.headerText}>Utibu Health</Text>
        </View>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputHeader}>Log to your Account</Text>
        <View>
          <TextInput style={styles.input} placeholder="Enter Email" />
          <TextInput style={styles.input} placeholder="Enter Password" />
        </View>
      </View>
      <View style={styles.logIn}>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <TouchableOpacity style={styles.button}>
          <Text
            onPress={() => navigation.navigate('Home')}
            style={styles.buttonText}>
            Log In
          </Text>
        </TouchableOpacity>
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
  header: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 0,
  },
  imgView: {
    marginRight: 15,
    height: 30,
    width: 25,
  },
  headerText: {
    height: 30,
    fontSize: 24,
    fontWeight: '600',
  },
  inputView: {
    alignItems: 'center',
    marginTop: 50,
  },
  inputHeader: {
    height: 20,
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 25,
  },
  input: {
    height: 45,
    width: 360,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#F4F4F4',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#20156F',
    padding: 10,
    width: 299,
    borderRadius: 50,
    marginBottom: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  logIn: {
    alignItems: 'center',
    marginTop: 80,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
});
