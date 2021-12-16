import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from '../components/Styles/Styles';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';

export default function AboutScreen() {
  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={(styles.container, styles.about)}>
      <Text style={{ fontFamily: 'Raleway_500Medium' }}>Quest Point</Text>
      {/* if we add logo add as an image */}
      <Text style={{ fontFamily: 'Raleway_500Medium' }}>
        Developed by Executive Methods
      </Text>
      <Text style={{ fontFamily: 'Raleway_500Medium' }}>
        Executive Developers: Jacob Wilson & Kelsey Harrison
      </Text>
      <Text style={{ fontFamily: 'Raleway_500Medium' }}>
        Link to our website:{' '}
      </Text>
    </SafeAreaView>
  );
}
