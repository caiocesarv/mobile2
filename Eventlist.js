import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const EventList = () => {
  const [events, setEvents] = useState([
    { id: '1', title: 'Arraial USMF', date: '2023-06-24', location: 'Local 1' },
    { id: '2', title: 'Criança feliz USMF', date: '2023-09-12', location: 'Local 2' },
    { id: '3', title: 'Natal solidário USMF', date: '2023-12-24', location: 'Local 3' },
  ]);

  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventLocation, setNewEventLocation] = useState('');

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

  const toggleAddEventForm = () => {
    setShowAddEventForm(!showAddEventForm);
  };

  const addEvent = () => {
    const newEvent = {
      id: Date.now().toString(),
      title: newEventTitle,
      date: newEventDate,
      location: newEventLocation,
    };

    setEvents([...events, newEvent]);
    setNewEventTitle('');
    setNewEventDate('');
    setNewEventLocation('');
    setShowAddEventForm(false);
  };

  return (
    <View style={styles.events}>
      <Text style={styles.eventsTitle}>Eventos:</Text>
      {showAddEventForm && (
        <View style={styles.addEventForm}>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={newEventTitle}
            onChangeText={setNewEventTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Data"
            value={newEventDate}
            onChangeText={setNewEventDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Localização"
            value={newEventLocation}
            onChangeText={setNewEventLocation}
          />
          <Button title="Adicionar Evento" onPress={addEvent} />
        </View>
      )}
      <Button
        title={showAddEventForm ? 'Cancelar' : 'Adicionar Evento'}
        onPress={toggleAddEventForm}
      />
      <FlatList data={events} renderItem={renderEventItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  events: {
    marginBottom: 20,
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
  addEventForm: {
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default EventList;
