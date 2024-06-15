import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import ServiceCard from '../../components/services/ServiceCard'
import { useLocalSearchParams } from 'expo-router'
import { getAdverts } from '../../constants/api/AuthenticationService'

const Services = () => {
    const {value}=useLocalSearchParams();
    const [services,setServices]=useState([])
    useEffect(() => {
      const fetchedServices = async () => {
        try {
          const response = await getAdverts('Service'); // Adjust the endpoint based on your API
console.log(response.data)
          const fetchServices = response.data.results;
          setServices(fetchServices);
        } catch (error) {
          console.log(error?.response?.data?.message)
        }
      };
      fetchedServices();
    }, []);


    const filteredData = services.filter(item => item.category === value);
    
  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
       {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
  <ServiceCard key={index} title={item.title} description={item.description} image={item.image} />
        ))
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No services found for this category.</Text>
        </View>
      )}
    </ScrollView>
  )
}

export default Services

const styles = StyleSheet.create({
    noResultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
      },
      noResultsText: {
        fontSize: 16,
        color: '#555'
      }
})