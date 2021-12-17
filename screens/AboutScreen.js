import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  View,
  Linking,
  Pressable,
} from 'react-native';
import styles from '../components/Styles/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
      <Text
        style={{
          fontFamily: 'Raleway_500Medium',
          fontSize: 24,
          textAlign: 'center',
        }}
      >
        Quest Point
      </Text>
      <Image
        style={{ alignSelf: 'center', width: 75, height: 75 }}
        source={require('../assets/QuestPoint.png')}
      />
      <Text style={({ fontFamily: 'Raleway_500Medium' }, styles.aboutCompany)}>
        Developed by Executive Methods
      </Text>

      <Pressable
        onPressOut={() => {
          Linking.openURL('https://github.com/wils0936');
        }}
      >
        <View style={styles.listItem}>
          <Text>
            <Ionicons name={'logo-github'} size={24} color={'#000'} /> Jacob
            Wilson
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPressOut={() => {
          Linking.openURL('https://github.com/harr0627');
        }}
      >
        <View style={styles.listItem}>
          <Text>
            <Ionicons name={'logo-github'} size={24} color={'#000'} /> Kelsey
            Harrison
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
