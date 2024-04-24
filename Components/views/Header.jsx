import { View, Text, StyleSheet } from "react-native-web";

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#8e0000",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        COCINA
      </Text>
    </View>
  );
};


export default Header;
