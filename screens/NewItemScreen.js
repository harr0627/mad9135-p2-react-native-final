import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useData } from '../components/context/Context';

export default function NewItemScreen({ navigation }) {
  const [data, updateData] = useData();

  const [formTitle, setFormTitle] = useState('');
  const [formDetails, setFormDetails] = useState('');
  const [formMax, setFormMax] = useState('');

  return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Add New Quest.</Text>
        <Text>What would you like your quest to be?</Text>
        <TextInput
          placeholder="Quest Title"
          onChangeText={(text) => setFormTitle(text)}
          value={formTitle}
        />
        <Text>Details about your quest</Text>
        <TextInput
          placeholder="Quest Details"
          onChangeText={(text) => setFormDetails(text)}
          value={formDetails}
        />
        <Text>How many times will you complete this task</Text>
        <TextInput
          placeholder="Max Value"
          onChangeText={(text) => setFormMax(text)}
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
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F',
    justifyContent: 'flex-start',
    // alignItems: 'stretch',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
