import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

export default function QuestDetails({ task, navigation }) {
  //if return will allow for the gesture handler based off the items value of quest completed.
  //have to change the value of competed or not when they leave the page.
  console.log(task);
  return (
    <SafeAreaView style={styles.container}>
      <Text>gesture handler goes here also with button for delete.</Text>
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
