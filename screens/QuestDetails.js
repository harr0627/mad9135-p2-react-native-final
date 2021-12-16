import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { useData } from '../components/context/Context';
import styles from '../components/Styles/Styles';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';

export default function QuestDetails({ route, navigation }) {
  //if return will allow for the gesture handler based off the items value of quest completed.
  //have to change the value of competed or not when they leave the page.
  const { task } = route.params;
  const [data, updateData] = useData();
  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontFamily: 'Raleway_500Medium' }}>{task.taskTitle}</Text>
      <Text style={{ fontFamily: 'Raleway_500Medium' }}>
        {task.taskDetails}
      </Text>
      <Text style={{ fontFamily: 'Raleway_500Medium' }}>{task.taskValue}</Text>
      <Text style={{ fontFamily: 'Raleway_500Medium' }}>
        {task.taskMaxValue}
      </Text>
      <Button
        style={{ fontFamily: 'Raleway_500Medium' }}
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
