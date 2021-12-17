import React from 'react';
import { Text, View, SafeAreaView, Button, Alert } from 'react-native';

import { useData } from '../components/context/Context';
import styles from '../components/Styles/Styles';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';

export default function QuestDetails({ route, navigation }) {
  //if return will allow for the gesture handler based off the items value of quest completed.
  //have to change the value of competed or not when they leave the page.
  const { task } = route.params;
  const [data, updateData] = useData();

  const deleteCheck = () => {
    Alert.alert('Delete', 'Would you like to delete this item?', [
      {
        text: 'No',
        onPress: () => {
          console.log('you pressed cancel');
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          updateData('DELETE', task);
          navigation.navigate('homeList');
        },
        style: 'destructive',
      },
    ]);
  };
  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <FlingGestureHandler
      direction={Directions.DOWN}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          if (Directions.DOWN) {
            updateData('UPDATEDOWN', task);
          }
        }
      }}
    >
      <FlingGestureHandler
        direction={Directions.UP}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) {
            if (Directions.UP) {
              updateData('UPDATEUP', task);
            }
          }
        }}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.questTitleDetails}>
            <Text
              style={
                ({ fontFamily: 'SourceSansPro_400Regular' },
                styles.listInstructions)
              }
            >
              Swipe up to increase quest value, down to decrease value or right
              to see active quests
            </Text>
            <Text
              style={
                ({ fontFamily: 'Raleway_500Medium' }, styles.listItemTitle)
              }
            >
              {task.taskTitle}
            </Text>
            <Text
              style={
                ({ fontFamily: 'Raleway_500Medium' }, styles.questValueDetails)
              }
            >
              {task.taskDetails}
            </Text>
          </View>
          <View style={styles.questValue}>
            <Text
              style={
                ({ fontFamily: 'Raleway_500Medium' }, styles.completeDetails)
              }
            >
              {task.taskValue}
            </Text>
            <Text
              style={
                ({ fontFamily: 'Raleway_500Medium' }, styles.questValueDetails)
              }
            >
              {task.taskMaxValue}
            </Text>
          </View>
          <View style={styles.deleteBtn}>
            <Button
              style={{ fontFamily: 'Raleway_500Medium' }}
              title="Delete"
              onPress={deleteCheck}
              // {(ev) => {
              //   ev.preventDefault();
              //   updateData('DELETE', task);
              //   navigation.navigate('homeList');
              //   // add alert for (are you sure you want to delete? yes >> delete and navigate back... no >>> close and do nothing)
              // }}
            />
          </View>
          {/* <Button
      title="Up"
      onPress={(ev)=>{
        ev.preventDefault();
        updateData('UPDATEUP', task)
      }}
      />
      <Button
      title="down"
      onPress={(ev)=>{
        ev.preventDefault();
        updateData('UPDATEDOWN', task)
      }}
      /> */}
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}
