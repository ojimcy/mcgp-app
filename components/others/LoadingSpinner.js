// components/LoadingSpinner.js
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#9D6B38" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingSpinner;
