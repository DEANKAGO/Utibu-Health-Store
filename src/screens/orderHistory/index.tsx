import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CartProduct} from '../../context/PharmacyContext';

export default function OrderHistory() {
  // const navigation = useNavigation<RootNavigation>();
  const [orders, setOrders] = useState<CartProduct[]>([]);

  const fetchOrders = async () => {
    const _orders = (await AsyncStorage.getItem('@orders')) || '[]';
    setOrders(JSON.parse(_orders));
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  console.log('orders==>', orders);

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.cartHeader}>
        <Text style={styles.cartHeader}>Your order history</Text>
      </View>
      <FlatList
        data={orders}
        contentContainerStyle={styles.cart}
        showsVerticalScrollIndicator={false}
        renderItem={item => (
          <View style={styles.cartProducts}>
            <TouchableOpacity style={styles.cartTouch}>
              <View style={styles.cartInfo}>
                <View style={styles.cartImg}>
                  <Image style={styles.cartImgView} source={item.item.imgUrl} />
                </View>
                <View style={styles.cartDesc}>
                  <View style={styles.cartDescHeader}>
                    <Text style={styles.cartDescHeader1}>
                      {item.item.name} (*{item.item.count})
                    </Text>
                    <Text style={styles.cartDescHeader2} />
                  </View>
                </View>
              </View>
              <View style={styles.cartPriceheader}>
                <Text style={styles.cartPrice}>${item.item.total}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#E8F3F1',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  cart: {
    backgroundColor: '#E8F3F1',
    width: 380,
    borderRadius: 15,
    marginTop: 10,
    alignItems: 'center',
    paddingBottom: 50,
  },
  cartHeader: {
    marginTop: 10,
    marginBottom: 5,
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
});
