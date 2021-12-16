import React from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
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
      <View style={styles.questTitleDetails}>
        <Text
          style={
            ({ fontFamily: 'SourceSansPro_400Regular' },
            styles.listInstructions)
          }
        >
          Swipe up to increase quest value{' '}
        </Text>
        <Text
          style={({ fontFamily: 'Raleway_500Medium' }, styles.listItemTitle)}
        >
          {task.taskTitle}
        </Text>
        <Text style={{ fontFamily: 'Raleway_500Medium' }}>
          {task.taskDetails}
        </Text>
      </View>

      <View style={styles.questValue}>
        <Text
          style={
            ({
              fontFamily: 'Raleway_500Medium',
            },
            styles.completeDetails)
          }
        >
          {task.taskValue}
        </Text>
        <Text
          style={
            ({
              fontFamily: 'Raleway_500Medium',
            },
            styles.questValueDetails)
          }
        >
          {task.taskMaxValue}
        </Text>
      </View>
      <View style={styles.deleteBtn}>
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
      </View>
    </SafeAreaView>
  );
}
