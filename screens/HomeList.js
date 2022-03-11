import React from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Task from '../components/Task';
import { useData } from '../components/context/Context';
import { useState, useEffect } from 'react';
import styles from '../components/Styles/Styles';
import { useFonts, Raleway_500Medium } from '@expo-google-fonts/raleway';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';
import * as StoreReview from 'expo-store-review';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function HomeList({ navigation }) {
  const [data, updateData] = useData([]);
  const [nonComplete, setNonComplete] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewCounter, setReviewCounter] = useState(0);
  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
    SourceSansPro_400Regular,
  });
  let storeUrl = StoreReview.storeUrl();
  const { getItem, setItem } = useAsyncStorage('ExecMethodsQuestCounter');

  const callReview = () => {
    StoreReview.isAvailableAsync()
      .then((res1) => {
        return StoreReview.hasAction(), res1;
      })
      .then((res2, res1) => {
        if (res1 === true || res2 === true) {
          //only one needs to be true, requestReview will handle navigation either way.
          StoreReview.requestReview();
        } else {
          throw 'No Review Available';
        }
      })
      .catch((err) => {
        console.error(err);
      });

    // if(reviewCounter === 32){
    //   StoreReview.isAvailableAsync()
    //   .then((yesAsync)=>{
    //     if(yesAsync){
    //       return StoreReview.hasAction().then((yesAction)=>{
    //         if(yesAction){
    //           StoreReview.requestReview()
    //         }
    //       })
    //       .catch(()=>{
    //         console.log("is Not Available Async")
    //       })
    //     }else{
    // return
    // }})
    //     .catch((er)=>{
    //       console.log(er);
    //     })
  };

  const checkStorageCounter = async () => {
    getItem()
      .then((number) => {
        number = number === null ? 0 : JSON.parse(number);
        setReviewCounter(number);
      })
      .catch((er) => {
        console.error(er);
      });
  };

  const setStorageCounter = async (newNum) => {
    setItem(JSON.stringify(newNum));
    console.log(reviewCounter + 1);
  };

  useEffect(() => {
    setNonComplete(data.filter((el) => el.taskCompleted === false));
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    checkStorageCounter();
    if (reviewCounter === 10) {
      //once the user has opened the app 10 times
      callReview();
    }
  }, []);

  useEffect(() => {
    console.log('Counter', reviewCounter);
    setStorageCounter(reviewCounter + 1);
  }, [reviewCounter]);

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
        ListEmptyComponent={<Text>No Data. Start by adding a quest.</Text>}
      />
      <ActivityIndicator size="large" color="#000000" animating={isLoading} />
    </SafeAreaView>
  );
}
