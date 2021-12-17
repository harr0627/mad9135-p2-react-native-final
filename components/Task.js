import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';
import { StyleSheet } from 'react-native';

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
      <View style={styles.listItem}>
        <Text
          style={
            ({ fontFamily: 'Raleway_500Medium', fontSize: 20 },
            styles.listItemTitle)
          }
        >
          {taskTitle}
        </Text>
        <Text
          style={({ fontFamily: 'SourceSansPro_400Regular' }, styles.listInfo)}
        >
          {taskDetails}
        </Text>
        {/* <Text>Completed on: {completed}</Text> */}
        <Text
          style={({ fontFamily: 'SourceSansPro_400Regular' }, styles.listInfo)}
        >
          Task value: {taskValue}/{taskMaxValue}
        </Text>
        <Text
          style={({ fontFamily: 'SourceSansPro_400Regular' }, styles.listInfo)}
        >
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
        <View style={styles.listItem}>
          <Text
            style={
              ({ fontFamily: 'SourceSansPro_400Regular' }, styles.listItemTitle)
            }
          >
            {taskTitle}
          </Text>
          <Text
            style={
              ({ fontFamily: 'SourceSansPro_400Regular' }, styles.listInfo)
            }
          >
            {taskDetails}
          </Text>
          <Text
            style={
              ({ fontFamily: 'SourceSansPro_400Regular' }, styles.listInfo)
            }
          >
            {taskValue}/{taskMaxValue}
          </Text>
        </View>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  listItemTitle: {
    fontSize: 20,
    color: '#FFF',
  },
  listInfo: {
    color: 'white',
  },
  listItem: {
    backgroundColor: '#BB2020',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BEC7C7',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
