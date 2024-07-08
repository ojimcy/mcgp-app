import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  GestureHandlerRootView
} from "react-native";
import React, { useState, useEffect } from "react";
import ServiceCard from "../../components/services/ServiceCard";
import { Link, router, useLocalSearchParams } from "expo-router";
import { baseUrl } from "../../constants/api/apiClient";
import axios from "axios";
import { useAuth } from "../../AuthContext/AuthContext";

const Services = () => {
  const { value, setAppService } = useLocalSearchParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchedServices = async () => {
      try {
        const response = await axios.get(`${baseUrl}/adverts?type=Service`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const fetchServices = response.data.results;
        setServices(fetchServices);
      } catch (error) {
        alert(error?.response.data.message);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    if (token) {
      fetchedServices();
    }
  }, []);

  const filteredData = services.filter((item) => item.category === value);

  return (
    <GestureHandlerRootView style={{ backgroundColor: "#fff", flex: 1 }}>
      {loading ? ( // Show loading spinner when loading
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#E8A14A" />
        </View>
      ) : filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.name}
            description={item.description}
            image={item.images[0]}
          />
        ))
      ) : (
        <View style={styles.noResultsContainer}>
          <View style={styles.notFoundContainer}>
            <Text style={styles.notFoundText}>
              No registered available vendor merchant at the moment.
            </Text>
            {/* <Text style={styles.subText}>
              Do you offer such product or service?
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.push({
                  pathname: "/serviceaction",
                  params: { index: 0 },
                });
              }}
              style={styles.registerLink}
            >
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      )}
      <View style={{ position: "absolute", alignItems: "center"}}>
        <Text
          onPress={() => {
            setAppService("Register your service");
            router.push({ pathname: "/serviceaction", params: { index: 1 } });
          }}
        >
          click here to register as a vendor
        </Text>
      </View>
    </GestureHandlerRootView>
  );
};

export default Services;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  noResultsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: "#555",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 14,
  },
  subText: {
    fontSize: 14,
  },
  registerLink: {
    fontSize: 16,
    color: "#E8A14A",
    marginTop: 15,
  },
});
