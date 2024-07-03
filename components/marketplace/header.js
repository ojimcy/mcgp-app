import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SIZES } from "../../constants";
import axios from "axios";
import { baseUrl } from "../../constants/api/apiClient";
import { useAuth } from "../../AuthContext/AuthContext";
import debounce from "lodash.debounce";
import { COLORS } from "../constants";
import { router } from "expo-router";

const HeaderSearch = ({ type }) => {
  const { token } = useAuth();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const fetchSearchResults = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${baseUrl}/search`, {
        headers: {
          Authorization: `${token}`,
        },
        params: {
          name: query,
          type,
        },
      });
      setResults(response.data);
    } catch (err) {
      setError("Failed to fetch search results");
      console.error("Error fetching search results:", err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchSearchResults = useCallback(
    debounce(fetchSearchResults, 300),
    [type, token]
  );

  useEffect(() => {
    if (search.trim() !== "") {
      debouncedFetchSearchResults(search);
    } else {
      setResults([]);
    }
  }, [search, debouncedFetchSearchResults]);

  const renderSearchResults = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={SIZES.primary} />
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

    if (isFocused && search.trim() !== "" && results.length > 0) {
      return (
        <View style={styles.dropdown}>
          <FlatList
            data={results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  console.log("clicked!!");
                  router.push({
                    pathname: "/productdetails",
                    params: item,
                  });
                }}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }

    return null;
  };

  const clearSearch = () => {
    setSearch("");
    setResults([]);
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.searchInput}
        />
        {search !== "" && (
          <TouchableOpacity onPress={clearSearch}>
            <Ionicons
              name="close-circle"
              size={20}
              color="#666"
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      {renderSearchResults()}
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: SIZES.padding,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    zIndex: 1,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  clearIcon: {
    marginLeft: 10,
  },
  loadingContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  errorContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
  dropdown: {
    position: "absolute",
    top: "130%",
    left: 10,
    right: 0,
    backgroundColor: "#fff",
    maxHeight: 350,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 1000,
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: "98%",
  },
  dropdownItem: {
    padding: 10,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
