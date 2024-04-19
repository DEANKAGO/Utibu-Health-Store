import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Mpesa from '../../images/Mpesa.svg';
import Paypal from '../../images/PayPal.svg';
import CreditCart from '../../images/CreditCard.svg';
import {RootNavigation} from '../../routes';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CartProduct, usePharmacyContext} from '../../context/PharmacyContext';
import Modal from 'react-native-modal';
import {Button} from '../../components/Buttons/Button';
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function CheckOut() {
  const navigation = useNavigation<RootNavigation>();
  const {cartProducts, clearCart} = usePharmacyContext();

  const checkOut = async () => {
    const orders_string = (await AsyncStorage.getItem('@orders')) || '[]';
    const orders: CartProduct[] = JSON.parse(orders_string);
    const new_orders = [...cartProducts, ...orders];

    AsyncStorage.setItem('@orders', JSON.stringify(new_orders));
    clearCart();
    navigation.navigate('orderConfirmationRider');
  };

  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  function togglePopup() {
    setPopupVisible(!popupVisible);
  }

  const [location, setLocation] = useState('');
  // setLocation(location);

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.payment}>
        <Text style={styles.paymentHeader}>Payment Method</Text>
      </View>
      <View style={styles.paymentTypes}>
        <TouchableOpacity onPress={togglePopup} style={styles.paymentSelect}>
          <View style={styles.paymentTypeContainer}>
            <Mpesa />
            <Text style={styles.paymentType1}>M-Pesa</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentTypes}>
        <TouchableOpacity onPress={togglePopup} style={styles.paymentSelect}>
          <View style={styles.paymentTypeContainer}>
            <Paypal />
            <Text style={styles.paymentType1}>PayPal</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentTypes}>
        <TouchableOpacity onPress={togglePopup} style={styles.paymentSelect}>
          <View style={styles.paymentTypeContainer}>
            <CreditCart />
            <Text style={styles.paymentType1}>Credit Card</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity />
      </View>
      <View style={styles.checkoutButton}>
        <TouchableOpacity style={styles.checkoutButton1} onPress={checkOut}>
          <Text style={styles.checkoutText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={popupVisible}>
        <View style={styles.container}>
          <Text style={styles.title}>Address</Text>
          <View style={styles.separator} />
          <Text style={styles.text}>Enter your delivery address</Text>
          <TextInput
            style={styles.input}
            value={location}
            placeholder="Address"
            onChangeText={setLocation}
            keyboardType="numeric"
          />
          <Button title="Confirm" onPress={togglePopup} labelColor={'white'} />
        </View>
      </Modal>
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
  payment: {
    marginTop: 15,
    marginBottom: 100,
  },
  paymentHeader: {
    fontSize: 18,
    fontWeight: '600',
  },
  paymentTypes: {
    marginTop: 10,
  },
  paymentSelect: {
    height: 50,
    width: 360,
    backgroundColor: '#F4F4F4',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentType1: {
    fontSize: 18,
    marginLeft: 15,
  },
  paymentTypeContainer: {
    marginLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutButton: {
    marginTop: 150,
    alignItems: 'center',
  },
  checkoutButton1: {
    width: 200,
    height: 40,
    backgroundColor: '#20156F',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 45,
    width: 250,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#F4F4F4',
    marginBottom: 20,
    marginTop: 35,
  },
  btn: {
    color: 'green',
  },
});
