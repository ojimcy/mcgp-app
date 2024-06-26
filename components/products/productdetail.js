import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants';

const ProductDetail = ({ item }) => {
  const [isMore, setIsMore] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name="star"
          size={20}
          color={i <= rating ? 'gold' : 'lightgray'}
          style={styles.star}
        />
      );
    }
    return stars;
  };

  const attributes = [
    {
      values: ['50kg', '60kg'],
      _id: '667af110f004bb6bb5222f6e',
      name: 'weight',
    },
    {
      values: ['Red', 'Blue'],
      _id: '667af110f004bb6bb5222f6e',
      name: 'Color',
    },
  ];

  const reviews = [
    {
      reviewedBy: 'Cynthia',
      rating: 5.0,
      reviewText: 'Very nice cake',
      date: '18/6/2024',
    },
    {
      reviewedBy: 'Cynthia',
      rating: 4.0,
      reviewText: 'Thank you for wish me happy birthday',
      date: '18/6/2024',
    },
    {
      reviewedBy: 'Cynthia',
      rating: 3.5,
      reviewText: 'I had a nice wedding cake',
      date: '18/6/2024',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {item && (
        <>
          <Image
            source={{ uri: item.images.split(',')[0] }}
            style={styles.image}
            accessibilityLabel="Product Image"
          />
          <View style={styles.contentContainer}>
            <View style={styles.titleConteainer}>
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
                    {item.reviews.length} ratings
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
            {isMore && (
              <>
                <View style={styles.productInfoContainer}>
                  {attributes.map((attribute, index) => (
                    <View style={styles.productInfoRow} key={index}>
                      <Text style={styles.productInfoTitle}>
                        {attribute.name}:{' '}
                      </Text>
                      <Text style={styles.productInfoValue}>
                        {attribute.values.join(', ')}
                      </Text>
                    </View>
                  ))}
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
            <View style={styles.reviewsContainer}>
              <Text style={styles.reviewRating}>
                Verified Customer Feedback
              </Text>
              <Text style={styles.reviewTitle}>Product rating and review</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.reviewScore}>{item.averageRating}/5</Text>
                <Text style={styles.reviewCount}>
                  {reviews.length} ratings so far
                </Text>
              </View>

              {reviews.map((review, index) => (
                <View key={index} style={styles.review}>
                  <View style={styles.reviewHeader}>
                    <View style={{ flexDirection: 'row' }}>
                      {renderStars(review.rating)}
                    </View>
                    <Text style={styles.reviewDate}>{review.date}</Text>
                  </View>
                  <Text style={styles.reviewAuthor}>{review.reviewedBy}</Text>
                  <Text style={styles.reviewText}>{review.reviewText}</Text>
                </View>
              ))}
            </View>
          </View>
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
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
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
    color: 'gray',
  },
  priceContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    lineHeight: 22,
    color: '#9D6B38',
  },
  feeContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shipping: {
    fontSize: 11,
    lineHeight: 22,
    color: '#000',
  },
  productInfoContainer: {
    marginBottom: 20,
  },
  productInfoRow: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  productInfoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#9C9C9C',
    letterSpacing: -0.41,
  },
  productInfoValue: {
    fontSize: 14,
    letterSpacing: -0.41,
  },
  viewMoreButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  viewLessButton: {
    alignItems: 'center',
    marginBottom: 50,
  },
  viewMoreText: {
    color: '#E8A14A',
    fontSize: 12,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 22,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  reviewsContainer: {
    backgroundColor: COLORS.lightGray,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewRating: {
    fontSize: 12,
    marginBottom: 5,
  },
  reviewScore: {
    fontSize: 12,
    color: '#E8A14A',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewCount: {
    fontSize: 12,
    marginBottom: 20,
  },
  review: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    paddingBottom: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  reviewAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewDate: {
    fontSize: 12,
    color: 'gray',
  },
  reviewText: {
    fontSize: 12,
  },
  titleConteainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    paddingBottom: 10,
  },
});
