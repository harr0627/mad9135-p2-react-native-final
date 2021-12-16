import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';

export default function Task({ task, navigation }) {
  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
    SourceSansPro_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

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
        <Text style={{ fontFamily: 'SourceSansPro_400Regular' }}>
          {taskTitle}
        </Text>
        <Text style={{ fontFamily: 'SourceSansPro_400Regular' }}>
          {taskDetails}
        </Text>
        {/* <Text>Completed on: {completed}</Text> */}
        <Text style={{ fontFamily: 'SourceSansPro_400Regular' }}>
          Task value: {taskValue}/{taskMaxValue}
        </Text>
        <Text style={{ fontFamily: 'SourceSansPro_400Regular' }}>
          Points earned: {questPointValue}
        </Text>
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
          <Text style={{ fontFamily: 'SourceSansPro_400Regular' }}>
            {taskTitle}
          </Text>
          <Text style={{ fontFamily: 'SourceSansPro_400Regular' }}>
            {taskValue}/{taskMaxValue}
          </Text>
        </View>
      </Pressable>
    );
  }
}
