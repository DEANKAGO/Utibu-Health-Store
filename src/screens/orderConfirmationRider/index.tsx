import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
// import {ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import Shop from '../../images/ShoppingCart.svg';

export default function OrderConfirmation() {
  //   const navigation = useNavigation();
  //   navigation.navigate('Home')
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.deliver}>
        <Text style={styles.deliverHeading}>Order Confirmation</Text>
      </View>
      <View style={styles.deliverFeedback}>
        <Text style={styles.deliverFeedbackHeader}>
          Order Placed Successfully
        </Text>
        <Image
          style={styles.deliverFeedbackImage}
          source={require('../../images/pharmacyD.png')}
        />
        <Text style={styles.deliverFeedbackTime}>
          Estimate Delivery in 35 Minutes
        </Text>
      </View>
      <View style={styles.deliverFeedbackItems}>
        <View style={styles.deliverHome}>
          <View style={styles.deliverFeedbackTotal}>
            <Shop style={styles.deliverFeedbackTotal1}/>
            <Text style={styles.deliverFeedbackTotal2}>3 Items for $150</Text>
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
  deliver: {
    marginTop: 15,
  },
  deliverHeading: {
    fontSize: 18,
    fontWeight: '600',
  },
  deliverFeedback: {
    marginTop: 30,
    alignItems: 'center',
  },
  deliverFeedbackHeader: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ABEBF2',
  },
  deliverFeedbackImage: {
    borderRadius: 20,
    marginTop: 20,
  },
  deliverFeedbackItems: {
    marginTop: 20,
    height: 185,
    backgroundColor: '#E8F3F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  deliverHome: {
    width: 330,
    alignItems: 'center',
  },
  deliverFeedbackTime: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '300',
  },
  deliverFeedbackTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  deliverFeedbackTotal1: {
    
  },
});
