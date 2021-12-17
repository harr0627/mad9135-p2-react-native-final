import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
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
        <StatusBar backgroundColor="#BB2020" barStyle="light-content" />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused, size, color }) => {
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
              headerStyle: {
                backgroundColor: '#BB2020',
              },
              headerTitleStyle: {
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
                color: '#fff',
              },
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="Completed"
            options={{
              title: 'Completed',
              headerStyle: {
                backgroundColor: '#BB2020',
              },
              headerTitleStyle: {
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
                color: '#fff',
              },
            }}
            component={CompletedQuestScreen}
          />
          <Tab.Screen
            name="New"
            options={{
              title: 'Add Quest',
              headerStyle: {
                backgroundColor: '#BB2020',
              },
              headerTitleStyle: {
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
                color: '#fff',
              },
            }}
            component={NewItemScreen}
          />
          <Tab.Screen
            name="About"
            options={{
              title: 'About',
              headerStyle: {
                backgroundColor: '#BB2020',
              },
              headerTitleStyle: {
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
                color: '#FFF',
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
