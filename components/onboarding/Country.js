import {
    FlatList,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
//import PhoneLogin from "../button-components/PhoneLogin";
import {Ionicons} from '@expo/vector-icons'
import { COLORS, FONTS, SIZES } from "../../constants/theme";
const Country = () => {
const [areas,setAreas]=useState([])
const [selectedArea,setSelectedArea]=useState('')
const [modalVisible,setModalVisible]=useState(false)
const [countrySelected,setCountrySelected]=useState('')
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(response=>response.json())
        .then(data=>{
            let areaData=data.map((item)=>{
                return{
                    code:item.alpha2Code,
                    item:item.name,
                    callingCode:`+${item.callingCodes[0]}`,
                    flag:`https://flagsapi.com/${item.alpha2Code}/flat/64.png`
                }
            })
          //  console.log(areaData);
            setAreas(areaData);
         if(areaData.length>0 ){
            let defaultData=areaData.filter((a)=>a.code==="NG");
            if(defaultData.length>0 &&countrySelected==='Nigeria'){
                setSelectedArea(defaultData[0])
            }
         }
        })
        .catch(err=>{
console.log('error: ..',err)
        })
    },[])

    const renderAreasCodeModal=()=>{

const renderItem=({item})=>{
    return(
<TouchableOpacity
onPress={()=>{
    setSelectedArea(item)
    setModalVisible(false)
    console.log(item)
    setCountrySelected(item.item)
}}
style={{flexDirection:'row',padding:10}}>
<Image
source={{
    uri:item.flag
}}
resizeMode="contain"
style={{
    height:30,
    width:30,
    marginRight:10,
    borderRadius:20

}}
/>
<Text style={{
    ...FONTS.body4,
  

}}>{item.item}</Text>
</TouchableOpacity>
    )
}

        return(
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            >
<TouchableWithoutFeedback onPress={()=>setModalVisible(false)}>
    <View style={{
        flex:1,
        alignItems:'center',
       justifyContent:'center'
    }}>
<View style={{
    height:SIZES.height,
    width:SIZES.width,
    backgroundColor:COLORS.white
}}>
<TouchableOpacity 
onPress={()=>{
    setCountrySelected('')
    setModalVisible(false)
}}
style={{
    position:'absolute',
    top:22,
    right:22,
  width:42,
  height:42,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:999,
  backgroundColor:COLORS.primary
}}
>
        <Ionicons name="close" size={34} color={COLORS.white}/>
</TouchableOpacity>
<FlatList
data={areas}
renderItem={renderItem}
horizontal={false}
keyExtractor={item=>item.code}
style={{padding:20,marginBottom:20}}

/>
</View>
    </View>
</TouchableWithoutFeedback>
            </Modal>
        )
    }
  return (
      <SafeAreaView>
        <View style={styles.inputContainer}>
<View style={{width:'10%',marginLeft:SIZES.width*(0.1)}}>
{countrySelected&&<Image 
source={{uri:selectedArea?.flag}} 
resizeMode="contain"
style={styles.flagIcon}
/>}

</View>
<View style={{width:'80%',justifyContent:'center'}}>
<Text
    style={[styles.input, {color:!countrySelected? COLORS.gray:'black'}]}
    >
    {countrySelected?countrySelected:'Country/Region'} 
    
    </Text>
</View>
    
    <TouchableOpacity 
style={styles.selectFlagContainer}
onPress={()=>setModalVisible(true)}
>
<View style={{justifyContent:'center',width:'5%',marginLeft:SIZES.width*(0.05)}}>
<Image
source={require('../../assets/icons/down.png')}
resizeMode="contain"
style={styles.downIcon}
/>
</View>
</TouchableOpacity>
        </View>
        {renderAreasCodeModal()}
      </SafeAreaView>
     

  );
};

export default Country;

const styles = StyleSheet.create({
  inputContainer:{
    flex:1,
    flexDirection:'row',
    width: SIZES.width * 0.9,
    height: (6.2 / 100) * SIZES.height,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    marginHorizontal:SIZES.width * 0.05,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  downIcon:{
    width:25,
    height:25,
    tintColor:'black',
    lef:3,
    position:'absolute'
  },
  selectFlagContainer:{
    width:90,
    height:50,
    flexDirection:'row'
  },
  flagIcon:{
    width:"100%",
    height:"100%"
  },
  input:{
    fontSize:14
  }
  
});
