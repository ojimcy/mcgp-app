import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ServiceDetailCard from '../../components/services/ServiceDetail'
import { router, useLocalSearchParams } from 'expo-router'
import { CONTACT_FEE } from '../../constants/constantValues'

const ServiceDetail = () => {
    const {title,image,description}=useLocalSearchParams()
    console.log(title,image,description)
    function handlePay(){
router.push({pathname:'/orderproduct',params:{contactFee:CONTACT_FEE}})
    }
  return (
    <View>
      <ServiceDetailCard title={title} imageSrc={image} address={description} onPayPress={handlePay}/>
    </View>
  )
}

export default ServiceDetail

const styles = StyleSheet.create({})