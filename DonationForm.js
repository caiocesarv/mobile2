import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const DonationForm = ({ text, donationAmount, setDonationAmount, donateHandler }) => {
  return (
    <View style={styles.donation}>
      <Text style={styles.donationTitle}>"Faça sua doação:"</Text>
      <TextInput
        style={styles.donationInput}
        keyboardType='numeric'
        placeholder={text}
        value={donationAmount}
        onChangeText={setDonationAmount}
      />
      <Button title="Doar" onPress={donateHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  donation: {
    marginBottom: 20,
  },
  donationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  donationInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default DonationForm;
