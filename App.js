import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from './Header';
import DonationForm from './DonationForm';

const App = () => {

  const [donationAmount, setDonationAmount] = useState('');

  const donateHandler = () => {
    // Simula a submissão da doação
    alert(`Obrigado por doar ${donationAmount} reais!`);
    setDonationAmount('');
  }

  const [events, setEvents] = useState([
    { id: '1', title: 'Arraial USMF', date: '2023-06-24', location: 'Local 1' },
    { id: '2', title: 'Criança feliz USMF', date: '2023-09-12', location: 'Local 2' },
    { id: '3', title: 'Natal solidário USMF', date: '2023-12-24', location: 'Local 3' },
  ]);

  const renderEventItem = (itemData) => (
    <TouchableOpacity onPress={() => console.log('Evento selecionado')}>
      <View style={styles.eventItem}>
        <Text style={styles.eventTitle}>{itemData.item.title}</Text>
        <Text style={styles.eventDate}>{itemData.item.date}</Text>
        <Text style={styles.eventLocation}>{itemData.item.location}</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="#aaa" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header titulo="ONG USMF"/>
      <ScrollView>
        <DonationForm text="Digite seu valor"/>
        <View style={styles.events}>
          <Text style={styles.eventsTitle}>Eventos:</Text>
          <FlatList
            data={events}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  eventDate: {
    fontSize: 14,
    color: '#888',
    marginRight: 10,
  },
  eventLocation: {
    fontSize: 14,
    color: '#888',
  },
  events: {
    marginBottom: 20,
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
