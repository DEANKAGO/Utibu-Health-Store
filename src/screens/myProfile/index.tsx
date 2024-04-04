import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Settings from '../../images/Settings.svg';
import LogoutRounded from '../../images/LogoutRounded.svg';
import Go from '../../images/MoreThan.svg';
import {useNavigation} from '@react-navigation/native';
import {RootNavigation} from '../../routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyProfile() {
  const navigation = useNavigation<RootNavigation>();

  const logout = () => {
    AsyncStorage.removeItem('@loginUserData');
    navigation.navigate('logIn');
  };

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.profile}>
        <Text style={styles.myProfile}>My Profile</Text>
        <Image
          style={styles.profilePicture}
          source={require('../../images/profile.png')}
        />
        <View style={styles.profileName}>
          <Text style={styles.username}>Martin Kago</Text>
          <Text style={styles.email}>martin@martin.com</Text>
        </View>
      </View>
      <View style={styles.profileButtons}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLogout}>
            <Settings />
            <Text style={styles.text}>Settings</Text>
          </View>
          <Go style={styles.buttonGo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <View style={styles.buttonLogout}>
            <LogoutRounded />
            <Text style={styles.text}>Log Out</Text>
          </View>
          <Go style={styles.buttonGo} />
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
  },
  profile: {
    alignItems: 'center',
    marginTop: 20,
  },
  myProfile: {
    fontSize: 20,
    fontWeight: '600',
  },
  profilePicture: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  profileName: {
    marginTop: 15,
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: '500',
  },
  email: {
    fontSize: 14,
    marginTop: 10,
  },
  profileButtons: {
    alignItems: 'center',
    marginTop: 100,
    // backgroundColor: 'red',
    height: 150,
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#F4F4F4',
    width: 350,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    marginLeft: 5,
  },
  buttonLogout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonGo: {
    maxHeight: 18,
  },
});
