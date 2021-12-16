import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from '../components/Styles/Styles';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Quest Point</Text>
      {/* if we add logo add as an image */}
      <Text>Developed by Executive Methods</Text>
      <Text>Executive Developers: Jacob Wilson & Kelsey Harrison</Text>
      <Text>Link to our website: </Text>
    </SafeAreaView>
  );
}
