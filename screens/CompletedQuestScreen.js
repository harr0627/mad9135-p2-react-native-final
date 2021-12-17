import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useData } from '../components/context/Context';
import Task from '../components/Task';
import styles from '../components/Styles/Styles';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';

export default function CompletedQuestScreen() {
  const [data, updateData] = useData([]);
  const [complete, setComplete] = useState([]);
  const [completePoints, setCompletePoints] = useState(0);
  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
  });

  useEffect(() => {
    setComplete(data.filter((el) => el.taskCompleted === true));
  }, [data]);

  useEffect(() => {
    let points = 0;
    complete.forEach((el) => {
      points += el.questPointValue;
    });
    setCompletePoints(points);
  }, [complete]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Text
        style={({ fontFamily: 'Raleway_500Medium' }, styles.completedTitle)}
      >
        Quest Points Earned
      </Text>
      <Text style={styles.completedPoints}>{completePoints}</Text>
      <FlatList
        data={complete}
        renderItem={(item) => <Task task={item} />}
        keyExtractor={(item, index) => item.taskTitle + '-' + index}
        ListEmptyComponent={<Text>No Quests have been completed.</Text>}
      />
    </SafeAreaView>
  );
}
