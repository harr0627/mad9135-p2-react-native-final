import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
// import { useState, useEffect } from 'react';
// import { useData } from '../components/context/Context';
// import Task from '../components/Task';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuestDetails from './QuestDetails';
import HomeList from './HomeList';

const Stack = createStackNavigator();

export default function HomeScreen() {
  //stack navigation here with name list and name details

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeList"
        options={{
          title: 'Active Quests',
          headerStyle: {
            // backgroundColor: 'blue',
            height: 40,
          },
          headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 16,
          },
        }}
        component={HomeList}
      />
      <Stack.Screen
        name="QuestDetails"
        options={{
          title: 'Quest Details',
          headerStyle: {
            // backgroundColor: 'blue',
            height: 40,
          },
          headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 16,
          },
        }}
        component={QuestDetails}
      />
    </Stack.Navigator>
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
