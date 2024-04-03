// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Bars from '../../images/iconBars.svg';
import Notification from '../../images/iconBell.svg';
import {useNavigation} from '@react-navigation/native';
import {RootNavigation} from '../../routes';
import {products} from '../../utibuData/data';

export default function Home() {
  const navigation = useNavigation<RootNavigation>();
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
      <View style={styles.products}>
        <View style={styles.productsHeader}>
          <Text style={styles.productsHeader1}>Featured products</Text>
          <Text style={styles.productsHeader2}>See all</Text>
        </View>
        <View style={styles.productFlex}>
          {products.map(product => (
            <TouchableOpacity
              key={product.id}
              style={styles.product}
              onPress={() => navigation.navigate('details')}>
              <View>
                <Image source={require('../../images/Probiotic.png')} />
              </View>
              <View style={styles.productInfo}>
                <View>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.price}>{product.price}</Text>
                </View>
                <TouchableOpacity
                  style={styles.productAdd}
                  onPress={() => navigation.navigate('cart')}
                />
              </View>
            </TouchableOpacity>
          ))}
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
  categoriesHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  slide: {
    backgroundColor: '#E8F3F1',
    width: 360,
    height: 150,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '70%',
    backgroundColor: '#FFE5E5',
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  slideInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  slideName: {
    fontSize: 12,
    padding: 10,
    backgroundColor: '#FFE5E5',
  },
  catImg: {
    maxHeight: 50,
    maxWidth: 50,
  },
  products: {
    padding: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  productsHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productsHeader1: {
    fontSize: 16,
    fontWeight: '600',
  },
  productsHeader2: {
    fontSize: 16,
    fontWeight: '300',
  },
  productFlex: {
    flexDirection: 'row',
  },
  product: {
    backgroundColor: '#E8F3F1',
    width: 180,
    height: 180,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
  },
  productInfo: {
    flexDirection: 'row',
    width: 140,
    justifyContent: 'space-between',
  },
  price: {
    padding: 5,
  },
  productName: {
    fontSize: 16,
    padding: 5,
  },
  productAdd: {
    padding: 5,
    justifyContent: 'flex-end',
  },
  productAddIcon: {
    // width: '100%',
    // borderRadius: 50,
    // height: '20%',
  },
});
