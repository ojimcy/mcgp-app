import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  Modal,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import PropTypes from "prop-types";
const DropDownState = ({
  data,
  selectedItem,
  setSelectedItem,
  getCity,
  country,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  // const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
    setSearchQuery("");
    setFilteredData(data);
    if (getCity) {
      getCity({ country: country, state: item });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.pickerContainer}
        onPress={() => setIsDropdownOpen(true)}
      >
        <Text style={styles.selectedItemText}>
          {selectedItem || "Select an State"}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isDropdownOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsDropdownOpen(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.dropdownContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search..."
              onChangeText={handleSearch}
              value={searchQuery}
            />
            <FlatList
              data={filteredData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => handleSelectItem(item.name)}
                >
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
DropDownState.propTypes = {
  data: PropTypes.array.isRequired,
  selectedItem: PropTypes.string,
  setSelectedItem: PropTypes.func.isRequired,
  getCity: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
  pickerContainer: {
    width: SIZES.width * 0.9,
    height: (6.2 / 100) * SIZES.height,
    borderColor: "gray",
    marginTop: 2,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: SIZES.width * 0.05,
    backgroundColor: COLORS.gray,
  },
  selectedItemText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginTop: 100, // Adjust this value to set the top margin as needed
  },
  dropdownContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    padding: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default DropDownState;
