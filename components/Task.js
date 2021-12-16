import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';

export default function Task({ task, navigation }) {
  const {
    taskTitle,
    taskDetails,
    questPointValue,
    taskCompleted,
    taskValue,
    taskMaxValue,
    completed,
    id,
  } = task.item;
  if (taskCompleted === true) {
    return (
      <View>
        <Text>{taskTitle}</Text>
        <Text>{taskDetails}</Text>
        {/* <Text>Completed on: {completed}</Text> */}
        <Text>
          Task value: {taskValue}/{taskMaxValue}
        </Text>
        <Text>Points earned: {questPointValue}</Text>
      </View>
    );
  } else {
    return (
      <Pressable
        onPressOut={() => {
          navigation.navigate('QuestDetails', { task: task.item }); //task might need to be key value pair
        }}
      >
        <View>
          <Text>{taskTitle}</Text>
          <Text>
            {taskValue}/{taskMaxValue}
          </Text>
        </View>
      </Pressable>
    );
  }
}
