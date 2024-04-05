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
});
