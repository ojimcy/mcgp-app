import { SafeAreaView, View } from "react-native";
import { FocusedStatusBar, RectButton } from "../components/designs";
import { SIZES } from "../constants";
import { SHADOWS } from "../components/constants";

const Details = ({ data }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
    </SafeAreaView>
  );
};

export default Details;
