import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { getAdverts } from '../../constants/api/AuthenticationService';
import ProductCard from '../../components/designs/productcard';

const Products = () => {
  const {token}=useAuth()
  const { value } = useLocalSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredData = products.filter((item) => item.category === value);

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await getAdverts('Product');
        if (response.status === 401) {
          return router.push('/login');
        }
        const fetchProducts = response.data.results;
        setProducts(fetchProducts);
      } catch (error) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchedProducts();
  }, [value]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <ProductCard data={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            No Product found for this category.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  noResultsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: '#555',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Products;
