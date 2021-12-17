import React from 'react';
import { Text, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import Task from '../components/Task';
import { useData } from '../components/context/Context';
import { useState, useEffect } from 'react';
import styles from '../components/Styles/Styles';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';

export default function HomeList({ navigation }) {
  const [data, updateData] = useData([]);
  const [nonComplete, setNonComplete] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
    SourceSansPro_400Regular,
  });

  useEffect(() => {
    setNonComplete(data.filter((el) => el.taskCompleted === false));
    setIsLoading(false);
  }, [data]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <Text
        style={
          ({ fontFamily: 'SourceSansPro_400Regular' }, styles.listInstructions)
        }
      >
        Click on a task to see more details.
      </Text>
      <FlatList
        data={nonComplete}
        renderItem={(item) => (
          <Task styles={styles} navigation={navigation} task={item} />
        )}
        keyExtractor={(item, index) => item.taskTitle + '-' + index}
        ListEmptyComponent={<Text>No Data. Such Sad.</Text>}
      />
      <ActivityIndicator size="large" color="#000000" animating={isLoading} />
    </SafeAreaView>
  );
}
