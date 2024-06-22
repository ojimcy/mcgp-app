import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Avatar, Icon, Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../AuthContext/AuthContext';
import { countries } from '../../constants/api/statesConstants';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const { currentUser } = useAuth();

  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [countryList, setCountries] = useState(countries);
  const [country, setCountry] = useState();

  const name = `${firstName} ${lastName}`;

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={20} color="#9D6B38" />
        </TouchableOpacity>
        <View style={styles.profileInfo}>
          <Avatar
            rounded
            title={`${firstName[0]}${lastName[0]}`}
            size="large"
            overlayContainerStyle={{ backgroundColor: '#9D6B38' }}
            titleStyle={{ color: '#fff' }}
          />
          <View style={styles.textInfo}>
            <TextInput
              style={styles.name}
              value={name}
              onChangeText={(text) => {
                const [newFirstName, newLastName] = text.split(' ');
                setFirstName(newFirstName);
                setLastName(newLastName);
              }}
            />
            <TextInput
              style={styles.phoneNumber}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />

            <Text style={styles.label}>Enter Country</Text>
            <Picker
              style={styles.input}
              selectedValue={country}
              onValueChange={(itemValue) => {
                postData({ country: itemValue });
                setCountry(itemValue);
              }}
            >
              <Picker.Item label={'Select Country'} value={''} />
              {countryList.map((item, index) => (
                <Picker.Item key={index} label={item} value={item} />
              ))}
            </Picker>
          </View>
        </View>
      </Card>
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
    left: 10,
  },
  profileInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textInfo: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phoneNumber: {
    fontSize: 14,
    color: '#666',
  },
});

export default EditProfileScreen;
