import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

export default function QuestDetails({ route, navigation }) {
  //if return will allow for the gesture handler based off the items value of quest completed.
  //have to change the value of competed or not when they leave the page.
  const { task } = route.params;
  console.log(task);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{task.taskTitle}</Text>
      <Text>{task.taskDetails}</Text>
      <Text>{task.taskValue}</Text>
      <Text>{task.taskMaxValue}</Text>
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
