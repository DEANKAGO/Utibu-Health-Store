import React from 'react';
import {useNavigation} from '@react-navigation/native';
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

export default function SignUp() {
  const navigation = useNavigation<RootNavigation>();

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.header}>
        <Image
          style={styles.imgView}
          source={require('../../images/pharmacyLogo1.png')}
        />
        <Text style={styles.headerText}>Utibu Health</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputHeader}>Create your Account</Text>
        <View>
          <TextInput style={styles.input} placeholder="Enter Name" />
          <TextInput style={styles.input} placeholder="Enter Email" />
          <TextInput style={styles.input} placeholder="Enter Password" />
          <TextInput style={styles.input} placeholder="Confirm Password" />
        </View>
      </View>
      <View style={styles.signUp}>
        <TouchableOpacity style={styles.button}>
          <Text
            onPress={() => navigation.navigate('logIn')}
            style={styles.buttonText}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text>Already have an account? Log in</Text>
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
  signUp: {
    alignItems: 'center',
    marginTop: 80,
  },
});
