import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {RootNavigation} from '../../routes';
import AuthService from '../../components/AuthService';

export default function SignUp() {
  const navigation = useNavigation<RootNavigation>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = async () => {
    const response = await AuthService.signUp(
      firstName,
      lastName,
      email,
      password,
    );
    if (response.Response.success) {
      Alert.alert('Sign Up Successful');
      setIsLoggedIn(true);
      navigation.navigate('Home');
    } else {
      Alert.alert(
        response.Response.error ||
          'Could not complete the request. Please try again',
      );
    }
  };

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
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            value={firstName}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            value={lastName}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email"
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter Password"
          />
        </View>
      </View>
      <View style={styles.signUp}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSignUp();
          }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('logIn')}>
          <Text>Already have an account? Log in</Text>
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
