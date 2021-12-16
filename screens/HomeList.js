import React from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Task from '../components/Task';
import { useData } from '../components/context/Context';
import { useState, useEffect } from 'react';
import styles from '../components/Styles/Styles';

export default function HomeList({ navigation }) {
  const [data, updateData] = useData([]);
  const [nonComplete, setNonComplete] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setNonComplete(data.filter((el) => el.taskCompleted === false));
    setIsLoading(false);
  }, [data]);

  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Text>
        We'll put the flatlist here that has a pressable that shows the
        QuestDetails screen on press
      </Text>
      <FlatList
        data={nonComplete}
        renderItem={(item) => <Task navigation={navigation} task={item} />}
        keyExtractor={(item, index) => item.taskTitle + '-' + index}
        ListEmptyComponent={<Text>No Data. Such Sad.</Text>}
      />
      <ActivityIndicator size="large" color="#000000" animating={isLoading} />
    </SafeAreaView>
  );
}
