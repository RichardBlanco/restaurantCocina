import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, CheckBox } from "react-native";

const OrdersScreen = () => {
  const [modalVisible, setModalVisible] = useState(false); 
  const [selectedOrder, setSelectedOrder] = useState(null); 
  const [checkboxStates, setCheckboxStates] = useState([]); 

  const handleOrderSelection = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
    setCheckboxStates(Array(order.items.length).fill(false));
  };

  const handleCheckBoxChange = (index) => {
    setCheckboxStates(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {/* Ejemplo de card de pedido */}
        <TouchableOpacity
          onPress={() => handleOrderSelection({ mesa: "Mesa #1", items: ["Hamburguesa Clásica", "Hamburguesa Argentina", "Soda Saborizada Cereza", "Coca-Cola"], mesero: "Juan Pérez" })}
          style={styles.card}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Mesa #1</Text>
          </View>
          <View style={styles.content}>
            <FlatList
              data={["Hamburguesa Clásica", "Hamburguesa Argentina", "Soda Saborizada Cereza", "Coca-Cola"]}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Mesero: Juan Pérez</Text>
          </View>
        </TouchableOpacity>

        {/* Agregar más cards aquí */}
        <TouchableOpacity
          onPress={() => handleOrderSelection({ mesa: "Mesa #2", items: ["WTF! Burger", "Crispy Chicken", "Gringa", "Té Helado", "Limonada de coco", "Cerveza Corona"], mesero: "María García" })}
          style={styles.card}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Mesa #2</Text>
          </View>
          <View style={styles.content}>
            <FlatList
              data={["WTF! Burger", "Crispy Chicken", "Gringa", "Té Helado", "Limonada de coco", "Cerveza Corona"]}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Mesero: María García</Text>
          </View>
        </TouchableOpacity>

        {/* Agregar más cards aquí */}
        <TouchableOpacity
          onPress={() => handleOrderSelection({ mesa: "Mesa #3", items: ["Pizza Margarita", "Pasta Carbonara", "Tiramisú"], mesero: "José Martínez" })}
          style={styles.card}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Mesa #3</Text>
          </View>
          <View style={styles.content}>
            <FlatList
              data={["Pizza Margarita", "Pasta Carbonara", "Tiramisú"]}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Mesero: José Martínez</Text>
          </View>
        </TouchableOpacity>

        {/* Agregar más cards aquí */}
        <TouchableOpacity
          onPress={() => handleOrderSelection({ mesa: "Mesa #4", items: ["Ensalada César", "Tacos al pastor", "Sushi", "Helado de vainilla"], mesero: "Ana López" })}
          style={styles.card}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Mesa #4</Text>
          </View>
          <View style={styles.content}>
            <FlatList
              data={["Ensalada César", "Tacos al pastor", "Sushi", "Helado de vainilla"]}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Mesero: Ana López</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalHeaderText}>{selectedOrder && selectedOrder.mesa}</Text>
            <FlatList
              data={selectedOrder && selectedOrder.items}
              renderItem={({ item, index }) => (
                <View style={styles.item}>
                  <CheckBox
                    value={checkboxStates[index]}
                    onValueChange={() => handleCheckBoxChange(index)}
                  />
                  <Text style={styles.modalItemText}>{item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <Text style={styles.modalFooterText}>Mesero: {selectedOrder && selectedOrder.mesero}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "#000000",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 20,
    width: '30%',
    minWidth: 200,
    margin: 10,
    height: 300,
    overflow: 'hidden',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 20,
    width: '60%', // Modificado para hacerlo un 10% más pequeño
    height: '60%', // Modificado para hacerlo un 10% más pequeño
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    marginVertical: 10,
    flex: 1,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  modalHeaderText: {
    fontSize: 20, // Modificado para aumentar el tamaño de la fuente
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalItemText: {
    marginLeft: 10,
    fontSize: 20, // Modificado para aumentar el tamaño de la fuente
  },
  modalFooterText: {
    fontSize: 20, // Modificado para aumentar el tamaño de la fuente
    fontWeight: "bold",
  },
});

export default OrdersScreen;
