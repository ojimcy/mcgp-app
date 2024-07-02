import React, { useContext, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Link, router } from "expo-router";
import { AppContext } from "../../AuthContext/AuthContext";

const ProductListCard = ({ itemList, itemValue }) => {
  const { setCategory } = useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {itemList.length === 0 ? (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>
            No registered avaliable vendor merchant at the moment.
          </Text>
          <Text style={styles.subText}>
            Do you offer such product or service?
          </Text>
          <Link href="/register" style={styles.registerLink}>
            Register
          </Link>
        </View>
      ) : (
        itemList.map((item, itemIndex) => (
          <Pressable
            onPress={() => {
              if (itemValue === "digital") {
                return alert("coming soon");
              }
              if (!isDisabled) {
                setIsDisabled(true);
                setCategory(item.title);
                router.push({
                  pathname: `/${itemValue}`,
                  params: { value: item.id },
                });
                setTimeout(() => {
                  setIsDisabled(false);
                }, 2000);
              }
            }}
            key={itemIndex}
            disabled={isDisabled}
          >
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          </Pressable>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: SIZES.height * 0.7,
  },
  notFoundText: {
    fontSize: 14,
  },
  subText: {
    fontSize: 14,
  },
  registerLink: {
    fontSize: 16,
    color: '#E8A14A',
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    borderColor: COLORS.gray,
    borderBottomWidth: 0.5,
    height: SIZES.height * 0.07081545,
    backgroundColor: "#FFF4E8",
  },
  iconStyle: {
    width: 40,
    height: "96%",
    marginRight: 5,
    borderRadius: 60,
  },
  itemText: {
    fontSize: 16,
  },
});

export default ProductListCard;
