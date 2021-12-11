import React from 'react'
import { Pressable, View, Text } from 'react-native'


export default function Task({task}) {

  const {taskTitle, taskDetails, taskValue, taskMaxValue, id} = task.item

  return (
    <Pressable
    onPress={ev => {
      console.log("navigate to the QuestDetails Screen")
    }}
    >
      <View>
        <Text>{taskTitle}</Text>
        <Text>{taskValue}/{taskMaxValue}</Text>
      </View>
    </Pressable>
  )
}
