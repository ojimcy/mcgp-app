import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from "react-native";
const OrderCard = ({ item }) =>{

return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₦{item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            /* onPress={async () => {
              if (item.quantity > 1) {
                await handleSubtract(item.productId, { quantity: 1 });
                await getItems();
              } else {
                alert(
                  `you can't reduce again, you are at your limit, you can decide to remove the Item`
                );
              }
            }} */
            style={styles.button}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
           /*  onPress={async () => {
              const response = await handleAdd(item.productId, { quantity: 1 });
              const result = await getItems();
            }} */
            style={styles.button}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
       /*  onPress={async () => {
          await handleRemoveCartItem(item.productId);
          await getItems();
        }} */
        style={styles.removeButton}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f5f5f5",
    },
    list: {
      paddingBottom: 20,
    },
    itemContainer: {
      flexDirection: "row",
      backgroundColor: "#fff",
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 5,
    },
    details: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
    },
    price: {
      fontSize: 14,
      color: "#888",
      marginVertical: 5,
    },
    quantityContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: "#ddd",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 20,
      fontWeight: "bold",
    },
    quantity: {
      marginHorizontal: 10,
      fontSize: 16,
    },
    totalContainer: {
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: "#ddd",
    },
    checkoutContainer: {
      paddingVertical: 10,
      borderTopWidth: 1,
      marginBottom: 20,
    },
    totalText: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    removeButton: {
      backgroundColor: "#ff4444",
      padding: 5,
      borderRadius: 5,
    },
    removeButtonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });
  
  export default OrderList;
  