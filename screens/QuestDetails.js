import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { useData } from '../components/context/Context';
import styles from '../components/Styles/Styles';

export default function QuestDetails({ route, navigation }) {
  //if return will allow for the gesture handler based off the items value of quest completed.
  //have to change the value of competed or not when they leave the page.
  const { task } = route.params;
  const [data, updateData] = useData();
  console.log(task);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{task.taskTitle}</Text>
      <Text>{task.taskDetails}</Text>
      <Text>{task.taskValue}</Text>
      <Text>{task.taskMaxValue}</Text>
      <Button
        title="Delete"
        onPress={(ev) => {
          ev.preventDefault();
          updateData('DELETE', task);
          navigation.navigate('homeList');
          // add alert for (are you sure you want to delete? yes >> delete and navigate back... no >>> close and do nothing)
        }}
      />
    </SafeAreaView>
  );
}
