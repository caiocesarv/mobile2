import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ titulo }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#123456',
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
