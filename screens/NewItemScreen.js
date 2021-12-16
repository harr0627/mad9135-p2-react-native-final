import React, { useState } from 'react';
import {
  TextInput,
  Button,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from '../components/Styles/Styles';
import { useData } from '../components/context/Context';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';

export default function NewItemScreen({ navigation }) {
  const [data, updateData] = useData();

  const [formTitle, setFormTitle] = useState('');
  const [formDetails, setFormDetails] = useState('');
  const [formMax, setFormMax] = useState('');

  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text
            style={
              ({ fontFamily: 'SourceSansPro_400Regular' },
              styles.listInstructions)
            }
          >
            Add New Quest.
          </Text>
          <Text style={({ fontFamily: 'Raleway_500Medium' }, styles.formLabel)}>
            What would you like your quest to be?
          </Text>
          <TextInput
            style={({ fontFamily: 'Raleway_500Medium' }, styles.formInput)}
            placeholder="Quest Title"
            onChangeText={(text) => setFormTitle(text)}
            value={formTitle}
          />
          <Text>Details about your quest</Text>
          <TextInput
            style={({ fontFamily: 'Raleway_500Medium' }, styles.formInput)}
            placeholder="Quest Details"
            onChangeText={(text) => setFormDetails(text)}
            value={formDetails}
          />
          <Text style={{ fontFamily: 'Raleway_500Medium' }}>
            How many times will you complete this task
          </Text>
          <TextInput
            style={({ fontFamily: 'Raleway_500Medium' }, styles.formInput)}
            placeholder="Max Value"
            onChangeText={(text) => setFormMax(text)}
            value={formMax}
          />
          <Button
            style={{ fontFamily: 'Raleway_500Medium' }}
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
                  taskDetails: formDetails,
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
