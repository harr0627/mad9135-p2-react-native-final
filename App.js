import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CompletedQuestScreen from './screens/CompletedQuestScreen';
import NewItemScreen from './screens/NewItemScreen';
import AboutScreen from './screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DataProvider } from './components/context/Context';
import {
  useFonts,
  Raleway_700Bold,
  Raleway_500Medium,
} from '@expo-google-fonts/raleway';

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Raleway_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <DataProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
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
              headerTitleStyle: {
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
              },
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="Completed"
            options={{
              title: 'Completed',
              headerTitleStyle: {
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
              },
            }}
            component={CompletedQuestScreen}
          />
          <Tab.Screen
            name="New"
            options={{
              title: 'Add Quest',
              headerTitleStyle: {
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
              },
            }}
            component={NewItemScreen}
          />
          <Tab.Screen
            name="About"
            options={{
              title: 'About',
              headerTitleStyle: {
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
              },
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
