import { View, Text, TextInput, Image } from "react-native";
import { FONTS, COLORS, assets } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import {SIZES}  from "../../constants/theme";
const HomeHeader = ({ onSearch,navigation }) => {

    const openNavBar=()=>{
        navigation.openDrawer()
    }
  return (
  
      <View
        style={{
            flexDirection:'row',
            height:SIZES.height*(0.05901),
            justifyContent:'space-between',
            marginHorizontal:'4%',
            width:'92%',
            marginTop:SIZES.height*(0.050429)
        }}
      >
        <TouchableOpacity onPress={openNavBar}>
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 45, height: 25,marginTop:5}}
          />
        </TouchableOpacity>

        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <Image
            source={assets.person02}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
  );
};

export default HomeHeader;
