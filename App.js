import { StyleSheet, Text, View } from 'react-native';
import OrdersScreen from  './Components/views/OrdersScreen.jsx'
import Header from './Components/views/Header.jsx'

export default function App() {
  return (
    <View
    style={[styles.container, {flexDirection: 'column'}]} >
      <Header />
      <OrdersScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
