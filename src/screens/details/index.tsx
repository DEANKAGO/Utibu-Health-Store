import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Plus from '../../images/Plus.svg';
import Subtract from '../../images/Subtract.svg';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RootNavigation, RootRoute} from '../../routes';
import {products} from '../../utibuData/data';
import {usePharmacyContext} from '../../context/PharmacyContext';

export default function Details() {
  const {
    increaseProductCart,
    decreaseProductCart,
    removeProduct,
    productQuantity,
  } = usePharmacyContext();
  const navigation = useNavigation<RootNavigation>();
  const {
    params: {product},
  } = useRoute<RootRoute<'details'>>();
  // const quantity = productQuantity(id);

  return (
    <SafeAreaView style={styles.layout}>
      <View>
        <View key={product.id}>
          <View style={styles.details}>
            <Text style={styles.detailsHeading}>Product Details</Text>
            <Image style={styles.detailsImg} source={product.imgUrl} />
          </View>
          <View style={styles.details2}>
            <View style={styles.detailsDescription}>
              <View style={styles.detailsName}>
                <Text style={styles.detailstext}>{product.name}</Text>
                <View style={styles.detailsAmountContainer}>
                  <Text style={styles.detailsAmount}>$ {product.price}</Text>
                </View>
              </View>
              <Text style={styles.detailsInfo}>{product.description}</Text>
            </View>
          </View>
          <View style={styles.detailsCheckContainer}>
            <View style={styles.detailsCheck}>
              <View style={styles.detailsStock}>
                <View style={styles.line} />
                <Text style={styles.detailsCheckText}>In Stock</Text>
                <View style={styles.detailsAmountContainer}>
                  <Text style={styles.detailsAmount}>{product.inStock}</Text>
                </View>
              </View>
              <View style={styles.detailsStock}>
                <View style={styles.line} />
                <Text style={styles.detailsCheckText}>select Count</Text>
                <View style={styles.detailsAmountContainerCount}>
                  <TouchableOpacity
                    onPress={() => decreaseProductCart(product.id)}>
                    <Subtract style={styles.detailsAmountContainerCountClick} />
                  </TouchableOpacity>
                  <Text style={styles.detailsAmount}>3</Text>
                  <TouchableOpacity
                    onPress={() => increaseProductCart(product.id)}>
                    <Plus style={styles.detailsAmountContainerCountClick} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.detailsStock}>
                <View style={styles.line} />
                <Text style={styles.detailsCheckText}>Total</Text>
                <View style={styles.detailsAmountContainer}>
                  <Text style={styles.detailsAmount}>$150</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.detailsAddContainer}>
            <TouchableOpacity
              style={styles.detailsAdd}
              onPress={() => navigation.navigate('cart')}>
              <Text style={styles.detailsText}>Add to Cart</Text>
            </TouchableOpacity>
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
  },
  details: {
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#E8F3F1',
    height: 320,
  },
  detailsHeading: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: '600',
  },
  detailsImg: {
    width: 200,
    height: 200,
    marginTop: 40,
  },
  details2: {
    alignItems: 'center',
  },
  detailsDescription: {
    marginTop: 5,
    width: 380,
  },
  detailsName: {
    padding: 10,
    justifyContent: 'flex-start',
  },
  detailstext: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
  },
  detailsAmountContainer: {
    backgroundColor: '#E8F3F1',
    width: 45,
    height: 25,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 10,
  },
  detailsAmountContainerCount: {
    backgroundColor: '#E8F3F1',
    flexDirection: 'row',
    width: 60,
    height: 25,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailsAmountContainerCountClick: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  detailsAmount: {},
  detailsInfo: {
    padding: 10,
    fontSize: 14,
  },
  detailsCheckContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsCheck: {
    marginTop: 15,
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between',
    padding: 10,
  },
  detailsStock: {
    alignItems: 'center',
  },
  line: {
    width: 70,
    height: 2,
    backgroundColor: '#ABEBF2',
    marginBottom: 10,
  },
  detailsCheckText: {
    fontSize: 12,
    fontWeight: '300',
  },
  detailsAddContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  detailsAdd: {
    width: 260,
    backgroundColor: '#ABEBF2',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  detailsText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});
