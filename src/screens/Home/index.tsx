// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  Image,
} from 'react-native';
import Bars from '../../images/iconBars.svg';
import Notification from '../../images/iconBell.svg';
import HomeIcon from '../../images/Home.svg';
import Orders from '../../images/PurchaseOrder.svg';
import User from '../../images/User.svg';

export default function Home() {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.barsHeader}>
        <View>
          <Bars />
        </View>
        <View>
          <Notification />
        </View>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Search for medicine" />
      </View>
      <View style={styles.categories}>
        <Text>Categories</Text>
        <View style={styles.slide} />
      </View>
      <View>
        <View>
          <Text>Featured products</Text>
          <Text>See all</Text>
        </View>
        <View>
          <View>
            <Image source={require('../../images/Probiotic.png')} />
          </View>
          <View>
            <View>
              <Text>Probiotic</Text>
              <Text>$50</Text>
            </View>
            <View>
              <Image />
            </View>
          </View>
        </View>
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
  barsHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 360,
    flexDirection: 'row',
  },
  input: {
    height: 45,
    width: 330,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#ABEBF2',
    marginTop: 20,
  },
  categories: {
    marginTop: 20,
  },
  slide: {
    backgroundColor: '#E8F3F1',
    width: 360,
    height: 150,
    marginTop: 10,
    borderRadius: 15,
  },
  nav: {
    height: 70,
    width: '100%',
    backgroundColor: '#E8F3F1',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
  },
  bottom: {
    justifyContent: 'space-evenly',
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  bottomIcons: {
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 12,
  },
  navIcons: {
    height: 200,
    width: 200,
  },
});
