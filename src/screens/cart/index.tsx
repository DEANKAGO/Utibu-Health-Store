import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Delete from '../../images/Remove.svg';
import {useNavigation} from '@react-navigation/native';
import {RootNavigation} from '../../routes';

export default function Cart() {
  const navigation = useNavigation<RootNavigation>();

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.cart}>
        <View style={styles.cartHeader}>
          <Text style={styles.cartHeader}>Your Cart</Text>
        </View>
        <View style={styles.cartProducts}>
          <TouchableOpacity style={styles.cartTouch}>
            <View style={styles.cartInfo}>
              <View style={styles.cartImg}>
                <Image
                  style={styles.cartImgView}
                  source={require('../../images/Probiotic.png')}
                />
              </View>
              <View style={styles.cartDesc}>
                <View style={styles.cartDescHeader}>
                  <Text style={styles.cartDescHeader1}>Probiotic (*2)</Text>
                  <Text style={styles.cartDescHeader2}>
                    Order Number #123456
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.cartPriceheader}>
              <Text style={styles.cartPrice}>$150</Text>
              <Delete />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cartProducts}>
          <TouchableOpacity style={styles.cartTouch}>
            <View style={styles.cartInfo}>
              <View style={styles.cartImg}>
                <Image
                  style={styles.cartImgView}
                  source={require('../../images/Probiotic.png')}
                />
              </View>
              <View style={styles.cartDesc}>
                <View style={styles.cartDescHeader}>
                  <Text style={styles.cartDescHeader1}>Probiotic (*2)</Text>
                  <Text style={styles.cartDescHeader2}>
                    Order Number #123456
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.cartPriceheader}>
              <Text style={styles.cartPrice}>$150</Text>
              <Delete />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cartProducts}>
          <TouchableOpacity style={styles.cartTouch}>
            <View style={styles.cartInfo}>
              <View style={styles.cartImg}>
                <Image
                  style={styles.cartImgView}
                  source={require('../../images/Probiotic.png')}
                />
              </View>
              <View style={styles.cartDesc}>
                <View style={styles.cartDescHeader}>
                  <Text style={styles.cartDescHeader1}>Probiotic (*2)</Text>
                  <Text style={styles.cartDescHeader2}>
                    Order Number #123456
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.cartPriceheader}>
              <Text style={styles.cartPrice}>$150</Text>
              <Delete />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.checkout}>
        <View style={styles.checkoutinfo}>
          <Text style={styles.checkoutinfo1}>Order</Text>
          <Text style={styles.checkoutinfo2}>$150</Text>
        </View>
        <View style={styles.checkoutinfo}>
          <Text style={styles.checkoutinfo1}>Delivery</Text>
          <Text style={styles.checkoutinfo2}>$10</Text>
        </View>
        <View style={styles.checkoutinfo}>
          <Text style={styles.checkoutinfo1}>Total</Text>
          <Text style={styles.checkoutinfo2}>$160</Text>
        </View>
        <View style={styles.checkoutButton}>
          <TouchableOpacity
            style={styles.checkoutButton1}
            onPress={() => navigation.navigate('CheckOut')}>
            <Text style={styles.checkoutText}>CheckOut</Text>
          </TouchableOpacity>
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
  cart: {
    backgroundColor: '#E8F3F1',
    width: 380,
    height: 435,
    borderRadius: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  cartHeader: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  cartProducts: {
    backgroundColor: 'white',
    marginTop: 10,
    width: 370,
    height: 90,
    borderRadius: 15,
  },
  cartTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
  },
  cartInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartImg: {
    marginLeft: 5,
    marginRight: 5,
  },
  cartImgView: {
    maxWidth: 50,
    maxHeight: 50,
  },
  cartDescHeader: {
    marginBottom: 10,
  },
  cartDesc: {},
  cartDescHeader1: {
    fontSize: 13,
  },
  cartDescHeader2: {
    fontSize: 10,
  },
  cartPriceheader: {
    justifyContent: 'space-around',
    marginRight: 5,
  },
  cartPrice: {
    fontSize: 12,
    marginBottom: 10,
  },
  checkout: {
    backgroundColor: '#E8F3F1',
    width: 380,
    marginTop: 30,
    height: 166,
    borderRadius: 15,
  },
  checkoutinfo: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  checkoutinfo1: {
    fontSize: 15,
    fontWeight: '400',
  },
  checkoutinfo2: {
    fontSize: 14,
    fontWeight: '400',
  },
  checkoutButton: {
    marginTop: 20,
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
