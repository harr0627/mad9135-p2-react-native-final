import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { useData } from '../components/context/Context';

export default function NewItemScreen({ navigation }) {
  const [data, updateData] = useData();

  const [formTitle, setFormTitle] = useState('');
  const [formDetails, setFormDetails] = useState('');
  const [formMax, setFormMax] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Text>Add New Quest.</Text>
      <View>
        <Text>What would you like your quest to be?</Text>
        <TextInput
          placeholder="Quest Title"
          onChange={(e) => setFormTitle(e.target.value)}
          value={formTitle}
        />
        <Text>Details about your quest</Text>
        <TextInput
          placeholder="Quest Details"
          onChange={(e) => setFormDetails(e.target.value)}
          value={formDetails}
        />
        <Text>How many times will you complete this task</Text>
        <TextInput
          placeholder="Max Value"
          onChange={(e) => setFormMax(e.target.value)}
          value={formMax}
        />
        <Button
          title="Start Quest"
          onPress={(ev) => {
            if (!formTitle || !formDetails || !formMax) {
              console.log('you must fill out every option');
            } else if (formMax == 0) {
              console.log('Max Value cannot be zero');
            } else if (isNaN(formMax)) {
              console.log('Max Value must be a number');
            } else {
              updateData('INSERT', {
                taskTitle: formTitle,
                details: formDetails,
                taskMaxValue: formMax,
              });
              setFormTitle('');
              setFormDetails('');
              setFormMax('');
              navigation.navigate('Home');
              console.log('added quest');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'flex-start',
    // alignItems: 'stretch',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
