import React from 'react';
import { Text, SafeAreaView, Image, Button, Linking } from 'react-native';
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
      <Text style={({ fontFamily: 'Raleway_500Medium' }, styles.aboutCompany)}>
        Executive Developers: Jacob Wilson & Kelsey Harrison
      </Text>
      <Button
        title="Click Here To Our School Website"
        onPress={() =>
          Linking.openURL(
            'https://www.algonquincollege.com/mediaanddesign/program/mobile-application-design-and-development/'
          )
        }
      />
    </SafeAreaView>
  );
}
