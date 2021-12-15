import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useData } from '../components/context/Context'
import Task from '../components/Task';

export default function CompletedQuestScreen() {
  const [data, updateData] = useData([])
  const [complete, setComplete] = useState([])
  const [completePoints, setCompletePoints] = useState(0)

  
useEffect(()=>{
  setComplete(data.filter(el=> el.taskCompleted===true ))
},[data])

useEffect(()=> {
  let points = 0
  complete.forEach(el => {
    points += el.questPointValue
  });
  setCompletePoints(points)
},[complete])

  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Text>
        Here are the points from your completed tasks: {completePoints}
      </Text>
      <FlatList data={complete}
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

//we will need to change the task list to be not pressable.