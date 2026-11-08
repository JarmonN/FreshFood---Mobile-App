// NOTE this is purely a place holder! This portion of the emulator will be changed once the project is completed! Purely here to add SOMETHING to the emulator. Without it, the screen is just a blank screen!

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>FreshKeep</Text>
        <Text style={styles.headerSubtitle}>Food Freshness Tracker</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📦 Sample Food Item</Text>
        <Text style={styles.cardText}>Category: Dairy</Text>
        <Text style={styles.cardText}>Refrigerator: 3-5 Days</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
});