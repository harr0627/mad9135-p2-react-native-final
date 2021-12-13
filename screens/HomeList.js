import React from 'react';
import { Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Task from '../components/Task';
import { useData } from '../components/context/Context';
import { useState, useEffect } from 'react';

export default function HomeList({ navigation }) {
  const [data, updateData] = useData();
  const [nonComplete, setNonComplete] = useState();

  useEffect(() => {
    setNonComplete(data.filter((el) => el.taskCompleted === false));
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
    </SafeAreaView>
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
