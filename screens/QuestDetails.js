import React from 'react';
import { Text, View, SafeAreaView, Pressable, Alert } from 'react-native';

import { useData } from '../components/context/Context';
import styles from '../components/Styles/Styles';
import {
  useFonts,
  Raleway_500Medium,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';

export default function QuestDetails({ route, navigation }) {
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
    Raleway_700Bold,
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
          </View>
          <View style={styles.questDetailsCard}>
            <Text
              style={({ fontFamily: 'Raleway_700Bold' }, styles.listItemTitle)}
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
            {/* used pressable instead of Button due to styling */}
            <Pressable
              style={{ fontFamily: 'Raleway_500Medium' }}
              onPress={deleteCheck}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}
