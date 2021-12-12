import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useData } from '../components/context/Context'
import Task from '../components/Task';

export default function HomeScreen() {
  const [data, updateData] = useData()
  const [nonComplete, setNonComplete] = useState()
  //stack navigation here with name list and name details
  
useEffect(()=>{
  setNonComplete(data.filter(el=> el.taskCompleted===false ))
},[data])

  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Text>
        We'll put the flatlist here that has a pressable that shows the
        QuestDetails screen on press
      </Text>
      <FlatList data={nonComplete}
      renderItem={item => <Task task={item}/>}
      keyExtractor={(item, index)=> item.taskTitle + "-" + index}  
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
