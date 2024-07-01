import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../../constants";
import ListCard from "../../../../components/accessories/ListCard";
import HeaderSearch from "../../../../components/marketplace/header";

const digitalAssets = [
  { id: 1, title: "Bitcoin", icon: require("../../../../assets/digital/bitcoin.png") },
  { id: 2, title: "Ethereum", icon: require("../../../../assets/digital/ethereum.png") },
  { id: 3, title: "MCGP", icon: require("../../../../assets/digital/mcgp.png") },
  { id: 4, title: "BNB", icon: require("../../../../assets/digital/binance.png") },
  { id: 5, title: "Solana", icon: require("../../../../assets/digital/solana.png") },
  { id: 6, title: "Fantom", icon: require("../../../../assets/digital/ftm.png") },
  // { id: 7, title: "Base", icon: require("../../../../assets/digital/base.png") },
  { id: 8, title: "Dogecoin", icon: require("../../../../assets/digital/dogecoin.png") },
  { id: 9, title: "Floki", icon: require("../../../../assets/digital/floki.png") },
  { id: 10, title: "Pepe", icon: require("../../../../assets/digital/pepe.png") },
  { id: 11, title: "Tokenfi", icon: require("../../../../assets/digital/tokenfi.png") },
  { id: 12, title: "BTT", icon: require("../../../../assets/digital/btt.png") },
  { id: 13, title: "CoQ", icon: require("../../../../assets/digital/coq.png") },
  { id: 14, title: "DFC", icon: require("../../../../assets/digital/dfc.png") },
  { id: 15, title: "WKC", icon: require("../../../../assets/digital/wkc.png") },
  { id: 16, title: "USDT", icon: require("../../../../assets/digital/usdt.png") },
  { id: 17, title: "TRX", icon: require("../../../../assets/digital/trx.png") },
];

const digital = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderSearch />
      <ListCard itemList={digitalAssets} itemValue="digital" />
    </View>
  );
};

export default digital;

export const styles = StyleSheet.create({});
