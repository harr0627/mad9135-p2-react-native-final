import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Quest Point</Text>
      {/* if we add logo add as an image */}
      <Text>Developed by Executive Methods</Text>
      <Text>Executive Developers: Jacob Wilson & Kelsey Harrison</Text>
      <Text>Link to our website: </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
