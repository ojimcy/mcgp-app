import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ServiceDetailCard from '../../components/services/ServiceDetail'
import { useLocalSearchParams } from 'expo-router'

const ServiceDetail = () => {
    const {title,image,description}=useLocalSearchParams()
    console.log(title,image,description)
    function handlePay(){
console.log('Clicked!')
    }
  return (
    <View>
      <ServiceDetailCard title={title} imageSrc={image[0]} address={description} onPayPress={handlePay}/>
    </View>
  )
}

export default ServiceDetail

const styles = StyleSheet.create({})