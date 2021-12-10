import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Text>
        We'll put the flatlist here that has a pressable that shows the
        QuestDetails screen on press
      </Text>
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
