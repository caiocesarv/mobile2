import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import DonationForm from './DonationForm';
import EventList from './Eventlist';
import AddEventScreen from './AddEventScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Header titulo="ONG USMF" />
      <DonationForm text="Digite seu valor" />
      <EventList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default App;
