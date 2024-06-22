import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../constants";

const ProductDetail = ({ item }) => {
  const [isMore, setIsMore] = useState(false);
  console.log("attr", item.attributes);
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name="star"
          size={20}
          color={i <= rating ? "gold" : "lightgray"}
          style={styles.star}
        />
      );
    }
    return stars;
  };

   const getDescriptionSnippet = (desc) => {
    return desc.length > 100 ? desc.substring(0, 100) + '...' : desc;
  };

  return (
    <ScrollView style={styles.container}>
      {item &&(
        <>
        <Image
        source={{ uri: item.images.split(',')[0] }}
        style={styles.image}
        accessibilityLabel="Product Image"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {item.companyName}
          {"'s "}
          {item.name}
        </Text>
        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <Icon
              name="map-marker"
              size={20}
              color="gray"
              style={styles.locationIcon}
            />
            <Text style={styles.location}> {item.location}</Text>
          </View>
          <View style={styles.ratingRow}>
            {renderStars(item.averageRating)}
            <Text style={styles.rating}>{item.averageRating}</Text>
            <Text style={styles.ratingCount}>
              {item.reviews} ratings
            </Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View style={styles.feeContainer}>
          <Text style={styles.shipping}>300 Bought in the past</Text>
          <Text style={styles.shipping}>10k shipping fee to Abuja</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            {
              isMore
                ? item.description
                : item.description /* getDescriptionSnippet(description) */
            }
          </Text>
          {!isMore && (
            <TouchableOpacity
              onPress={() => setIsMore(true)}
              accessibilityRole="button"
              accessibilityLabel="See more details"
            >
              <Text style={styles.viewMoreText}>See more</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.productInfoContainer}>
          {item.attributes.split(',').map((attribute, index) => (
            <View style={styles.productInfoRow} key={index}>
              <Text style={styles.productInfoTitle}>{attribute.name}: </Text>
              <Text style={styles.productInfoValue}>
               {/*  {attribute.values.join(', ')} */}
              </Text>
            </View>
          ))}
        </View>
      </View>
      {isMore && (
        <>
          <View style={styles.footer}>
            <Text style={styles.reviewTitle}>Verified Customer Feedback</Text>
            <Text style={styles.reviewRating}>Product rating and review</Text>
            <Text style={styles.reviewScore}>4.7/5</Text>
            <Text style={styles.reviewCount}>500 ratings so far</Text>
            <Text style={styles.reviewDate}>18/6/2024</Text>
            <Text style={styles.reviewAuthor}>Cynthia</Text>
          </View>
          <TouchableOpacity
            onPress={() => setIsMore(false)}
            style={styles.viewLessButton}
            accessibilityRole="button"
            accessibilityLabel="View less details"
          >
            <Text style={styles.viewMoreText}>View less</Text>
          </TouchableOpacity>
        </>
      )}
        </>
      )}
      
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 22,
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  locationIcon: {
    marginRight: 5,
  },
  location: {
    marginRight: 10,
  },
  star: {
    marginRight: 2,
  },
  rating: {
    marginLeft: 5,
    marginRight: 10,
  },
  ratingCount: {
    color: "gray",
  },
  priceContainer: {
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    lineHeight: 22,
    color: "#9D6B38",
  },
  feeContainer: {
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shipping: {
    fontSize: 11,
    lineHeight: 22,
    color: "#000",
  },
  productInfoContainer: {
    marginBottom: 20,
  },
  productInfoRow: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  productInfoTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#9C9C9C",
    letterSpacing: -0.41,
  },
  productInfoValue: {
    fontSize: 16,
    fontSize: 14,
    letterSpacing: -0.41,
  },
  viewMoreButton: {
    alignItems: "center",
    marginVertical: 10,
  },
  viewLessButton: {
    alignItems: "center",
    marginBottom: 50,
  },
  viewMoreText: {
    color: COLORS.primary,
    fontSize: 16,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: COLORS.lightGray,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reviewRating: {
    fontSize: 16,
    marginBottom: 5,
  },
  reviewScore: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reviewCount: {
    fontSize: 16,
    marginBottom: 5,
  },
  reviewDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  reviewAuthor: {
    fontSize: 16,
  },
});
