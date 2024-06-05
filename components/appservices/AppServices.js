import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, SIZES } from '../../constants';
import { Image } from 'react-native';
import { router } from 'expo-router';

const services = [
  { name: 'Register your product', icon: require('../../assets/appservices/product.png') },
  { name: 'Register your service', icon: require('../../assets/appservices/service.png') },
  { name: 'Apply as merchant for payment service', icon: require('../../assets/appservices/apply.png') },
  { name: 'Buy product', icon: require('../../assets/appservices/buy.png') },
  { name: 'Order service', icon: require('../../assets/appservices/order.png') },
  { name: 'Deposit', icon: require('../../assets/appservices/deposit.png') },
  { name: 'Withdraw', icon: require('../../assets/appservices/withdraw.png') },
  { name: 'Stake USDT', icon: require('../../assets/appservices/stake.png') },
  { name: 'Stake MCGP', icon: require('../../assets/appservices/stake.png') },
  { name: 'Trade digital asset', icon: require('../../assets/appservices/trade.png') },
  { name: 'Wallet', icon: require('../../assets/appservices/wallet.png') },
];

const AppServiceList = () => {
  return (
    <ScrollView style={styles.container}>
      {services.map((service, index) => (
        <TouchableOpacity key={index} style={styles.button} onPress={()=>{
            if(index===0){
                router.push('/serviceaction')
            }
        }}>
         <Image source={service.icon} style={styles.icon} />
         <Text style={styles.text}>{service.name}</Text>
          <Image source={require('../../assets/appservices/nav.png')} style={[styles.navIcon, { tintColor: COLORS.black }]} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    padding: 10,
    marginVertical:3,
    marginHorizontal: 10,
    borderRadius: 5,
    height:SIZES.height*(0.06437768)
  },
  icon: {
    marginRight: 10,
    color:COLORS.black,
  },
  text: {
    color: COLORS.black,
    fontSize: 14,
  },
  navIcon:{
    position:'absolute',
    right:5
  }
});

export default AppServiceList;
