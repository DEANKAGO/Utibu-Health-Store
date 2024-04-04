import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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

export default function LogIn() {
  const navigation = useNavigation<RootNavigation>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await AuthService.login(email, password);
    if (response.Response.success) {
      Alert.alert('Login Successful');
      navigation.navigate('Home');
    } else {
      Alert.alert(
        response.Response.error || 'Invalid credentials. Please try again',
      );
    }
  };

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
      <View style={styles.logIn}>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleLogin();
          }}>
          <Text style={styles.buttonText}>Log In</Text>
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
