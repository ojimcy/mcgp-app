import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
const ServiceDetailCard = ({ title, address, contactFee, onPayPress, imageSrc }) => {
  return (
    <View style={styles.card}>
    <Image source={imageSrc} style={styles.image} />
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.contactFee}>Contact fee: {contactFee}</Text>
      <View style={styles.payCatalogue}>
      <TouchableOpacity>
        <Text style={styles.catalogue}>See Catalogue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.payButton} onPress={onPayPress}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
      </View>
      
    
    </View>
  </View>
  )
}

export default ServiceDetailCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      },
      image: {
        width: '100%',
        height: 200,
      },
      detailsContainer: {
        padding: 15,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color:COLORS.primary
      },
      address: {
        fontSize: 14,
        color: '#777',
        marginBottom: 10,
      },
      contactFee: {
        fontSize: 14,
        color: '#333',
        marginBottom: 15,
      },
      payButton: {
        backgroundColor: '#E8A14A',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
      },
      payButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      catalogue: {
        fontSize: 14,
        color: '#007BFF',
        textAlign: 'center',
      },
      payCatalogue:{
        flexDirection:'row',
        alignContent:'space-between',
        justifyContent:'space-between',
        alignItems:'center'
      }
})