import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Icon, Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../AuthContext/AuthContext';
import axios from 'axios';
import { baseUrl } from '../../constants/api/apiClient';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { logOut, token } = useAuth();
  const [user,setUser]=useState() 

async function getUser(){
    try{
     const response=await axios.get(`${baseUrl}/users/me`,{
        headers: {
            Authorization: `${token}`,
          },
     }); 
     console.log(response.data)
     setUser(response.data)
    }catch(error){
console.log(error?.response.data.message)
    }
}
  useEffect(()=>{
    getUser()
  },[])

  return (
    <View style={styles.container}>
      {/* <Card containerStyle={styles.card}>
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Icon name="edit" size={20} color="#9D6B38" />
        </TouchableOpacity>
        <View style={styles.profileInfo}>
          {user.profilePicture ? (
            <Avatar
              rounded
              source={{ uri: user.profilePicture }}
              size="large"
            />
          ) : (
          <Avatar
              rounded
              title={'initial'}
              size="large"
              overlayContainerStyle={{ backgroundColor: '#9D6B38' }}
              titleStyle={{ color: '#fff' }}
            /> 
          )}
          <View style={styles.textInfo}>
            <Text style={styles.fullName}>{user.fullName}</Text>
            <Text style={styles.phoneNumber}>{user.phoneNumber}</Text>
          </View>
        </View>
      </Card>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.profileLink}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Icon name="description" size={20} color="#9D6B38" />
          <Text style={styles.linkText}>My Adverts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileLink}>
          <Icon name="list" size={20} color="#9D6B38" />
          <Text style={styles.linkText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileLink}>
          <Icon name="favorite" size={20} color="#9D6B38" />
          <Text style={styles.linkText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileLink}>
          <Icon name="account-balance-wallet" size={20} color="#9D6B38" />
          <View style={styles.balanceRow}>
            <Text style={styles.balance}>{user.balance} USD</Text>
            <Text style={styles.balanceText}>My Balance</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileLink} onPress={logOut}>
        <Icon name="exit-to-app" size={20} color="#9D6B38" />
          <Text style={styles.linkText}>Logout</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    width: '94%',
    height: 217,
    backgroundColor: '#F5FCFF',
  },
  editIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  profileInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textInfo: {
    marginLeft: 15,
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#666',
  },
  linksContainer: {
    marginTop: 20,
    minHeight: 300,
  },
  profileLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 10,
  },
  linkText: {
    marginLeft: 10,
    fontSize: 16,
  },
  balance: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceRow: {
    marginLeft: 15,
  },
  balanceText: {
    fontSize: 14,
  },
});

export default ProfileScreen;