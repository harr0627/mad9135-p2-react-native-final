import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QuestDetails from './QuestDetails';
import HomeList from './HomeList';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';

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
