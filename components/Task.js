import React from 'react';
import { Pressable, View, Text } from 'react-native';

export default function Task({ task }) {
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
        <Text>Completed on: {completed}</Text>
        <Text>
          Task value: {taskValue}/{taskMaxValue}
        </Text>
        <Text>Points earned: {questPointValue}</Text>
      </View>
    );
  } else {
    return (
      <Pressable
        onPress={(ev) => {
          console.log('navigate to the QuestDetails Screen');
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
