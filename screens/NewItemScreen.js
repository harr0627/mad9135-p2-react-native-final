import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
export default function NewItemScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Text>This is page where the NewEdit component goes.</Text>
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
