import { View, Text, TextInput, Image } from "react-native";
import { FONTS, COLORS, assets } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import {SIZES}  from "../../constants/theme";
const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "left",
          marginTop: 40,
        }}
      >
        <TouchableOpacity>
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 90, height: 25, position: "absolute",top:SIZES.height*(0.012)/* ,left:SIZES.width*(0.001) */ }}
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
      <View
        style={{
          marginVertical: SIZES.height*(0.07),
        }}
      >
        <Text
          style={{
            fontSize: SIZES.small
          }}
        >
          Hello, Victoria 👋
        </Text>
        <Text
          style={{
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a master piece
        </Text>
      </View>
      {/* <View
        style={{
          marginTop: SIZES.font,
        }}
      >
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View> */}
    </View>
  );
};

export default HomeHeader;
