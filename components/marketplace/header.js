import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { SIZES } from '../../constants';
const HeaderSearch = () => {
  return (
    <View
        style={{
          alignItems: "center",
          justifyContent: "center",
    }}
      >
        <View style={styles.searchBar}>
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="search" size={20} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <TextInput placeholder="Where to search!" />
          </View>
        </View>
      </View>
  )
}

export default HeaderSearch

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        height: SIZES.height * 0.06437768,
        width: SIZES.width * 0.906976744,
        backgroundColor: "#FFF4E8",
        justifyContent: "flex-start",
        marginHorizontal: SIZES.width * 0.0498,
        borderRadius: 40,
        alignItems: "center",
        marginTop:10
      },
})