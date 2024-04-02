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
import {ScrollView} from 'react-native-gesture-handler';

export default function OrderHistory() {
  const navigation = useNavigation<RootNavigation>();

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.cartHeader}>
        <Text style={styles.cartHeader}>Your Cart</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.cart}
        showsVerticalScrollIndicator={false}>
        <View style={styles.cartProducts}>
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('details')}>
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
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('details')}>
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
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('details')}>
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
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('details')}>
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
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('details')}>
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
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('checkOut')}>
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
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('checkOut')}>
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
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('checkOut')}>
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
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('checkOut')}>
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
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('checkOut')}>
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
          <TouchableOpacity
            style={styles.cartTouch}
            onPress={() => navigation.navigate('checkOut')}>
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
      </ScrollView>
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
