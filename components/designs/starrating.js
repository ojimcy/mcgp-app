import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ rating, maxStars = 5 }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars >= 0.5;
  const emptyStars = maxStars - filledStars - (halfStar ? 1 : 0);

  return (
    <View style={styles.container}>
      {Array(filledStars)
        .fill()
        .map((_, index) => (
          <Icon key={`star-filled-${index}`} name="star" size={20} color="#FFD700" />
        ))}
      {halfStar && <Icon name="star-half" size={20} color="#FFD700" />}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <Icon key={`star-empty-${index}`} name="star-o" size={20} color="#FFD700" />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default StarRating;
