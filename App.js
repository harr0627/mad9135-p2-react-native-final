import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CompletedQuestScreen from './screens/CompletedQuestScreen';
import NewItemScreen from './screens/NewItemScreen';
import AboutScreen from './screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DataProvider } from './components/context/Context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Completed') {
                iconName = focused
                  ? 'checkmark-circle'
                  : 'checkmark-circle-outline';
              } else if (route.name === 'New') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              } else {
                iconName = focused
                  ? 'information-circle'
                  : 'information-circle-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="Home"
            options={{
              title: 'Home',
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="Completed"
            options={{
              title: 'Completed',
            }}
            component={CompletedQuestScreen}
          />
          <Tab.Screen
            name="New"
            options={{
              title: 'Add Quest',
            }}
            component={NewItemScreen}
          />
          <Tab.Screen
            name="About"
            options={{
              title: 'About',
            }}
            component={AboutScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
