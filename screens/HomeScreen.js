import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useData } from '../components/context/Context'
import Task from '../components/Task';

export default function HomeScreen() {
  const [data, updateData] = useData()
  
  //stack navigation here with name list and name details

  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Text>
        We'll put the flatlist here that has a pressable that shows the
        QuestDetails screen on press
      </Text>
      <FlatList data={data}
      renderItem={item => <Task task={item}
      ListEmptyComponent={<Text>No Data. Such Sad.</Text>}    
      keyExtractor={(item, index)=> item.taskTitle + "-" + index}  
      />}/>
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
