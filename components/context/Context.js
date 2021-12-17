import React from 'react';
import { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const DataContext = createContext();

const DataProvider = (props) => {
  const { getItem, setItem } = useAsyncStorage('ExecMethodsQuest');
  const [data, setData] = useState([]);
  const [questPoints, setQuestPoints] = useState(0); // maybe not this (keep it local?) // i'm pretty sure we put this in the component

  const getDataFromStorage = async () => {
    getItem()
      .then((item) => {
        item = item === null ? [] : JSON.parse(item);
        setData(item);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  const storeDataToStorage = async (value) => {
    setItem(JSON.stringify(value)).then(() => {
      console.log('saved data to storage');
    });
  };

  useEffect(() => {
    getDataFromStorage();
    // first load. async storage fetch from here. once async is initialized
    // two storaged data pieces  which will hold activeData and pastaccomplished data
    // either quest points will be the result of the added values of pastaccomplished and returned/updated
    // or quest points will be entirely it's own entity that will be updated and read seperately from accomplished. NOT THIS
  }, []);

  useEffect(() => {
    storeDataToStorage(data);
  }, [data]); // may need to use this instead of calling the store each update call. >> look up hook for skipping first load???

  let dataExample = [
    {
      id: 'id sent from active',
      completed: 'December 20, 1995 01:24:00', //date done when the item is completed aka when the user swipes away as the items value is at it's max value // may not add
      created: 'a date object sent from active', // may not add
      taskTitle: 'title set by User',
      taskDetails: 'details set by User',
      taskCompleted: true,
      taskValue: 0, //number changed when user flings up or do
      taskMaxValue: 10, // number set by user
      questPointValue: 1, // not reliant on taskMaxValue set by user.
      // the onFling horizontal will hold the checks for changing taskCompleted and the updatelist call.
      // onFling vertical will change the taskvalue up or down within range of 0 to taskMaxValue it will also updateData each fling.
    },
  ];

  function updateData(action, payload) {
    //TODO: when updates made to data also update async storage
    if (action === 'DELETE') {
      setData(data.filter((item) => item.id !== payload.id));
      console.log('Deleted', payload.taskTitle);
      // storeDataToStorage(data)
    } else if (action === 'UPDATEUP') {
      // find by id in data update properties of item
      console.log('Updating up with: ', payload.taskTitle);
      setData(
        data.map((item) => {
          if (item.id == payload.id) {
            if (
              payload.taskValue != payload.taskMaxValue &&
              !(payload.taskValue > payload.taskMaxValue - 1)
            ) {
              payload.taskValue += 1;
            }
            if (payload.taskValue == payload.taskMaxValue) {
              payload.taskCompleted = true;
            }
            console.log(payload.taskCompleted);
            return payload;
          } else {
            return item;
          }
        })
      );
      // storeDataToStorage(data)
      // updateup and updatedown >>>  data.map((item) => {
      // if (item.id == payload.id) {
      // another if check >> if (payload.taskvalue === payload.maxTaskValue) { // same with going down for not going below 0
      // payload.taskValue = payload.maxTaskValue
      // } else {
      // payload.taskValue += 1 // and for down is -= 1
      // }
      //   return payload; //might have to move this in
      // } else {
      //   return item;
      // }
    } else if (action === 'UPDATEDOWN') {
      console.log('Updating up with: ', payload.taskTitle);
      setData(
        data.map((item) => {
          if (item.id == payload.id) {
            if (payload.taskValue == payload.taskMaxValue) {
              payload.taskCompleted = false;
            }
            if (payload.taskValue != 0 && !(payload.taskValue < 0)) {
              payload.taskValue -= 1;
            }
            console.log(payload.taskCompleted);
            return payload;
          } else {
            return item;
          }
        })
      );
    } else if (action === 'INSERT') {
      setData([
        ...data,
        {
          id: uuid(),
          taskTitle: payload.taskTitle,
          taskDetails: payload.taskDetails,
          taskCompleted: false,
          taskValue: 0,
          taskMaxValue: payload.taskMaxValue,
          questPointValue: 1,
        },
      ]);
      // storeDataToStorage(data)
      console.log('adding new item:', payload.taskTitle);
    } else {
      console.log('action payload must be DELETE, UPDATE or INSERT');
    }

    // this is where we need to update accomplished data with setData
    // this function will not behave different based on anything
    // check if item exists in array using id. update if it is not new. Add if it is new. then update array.
  }

  return <DataContext.Provider value={[data, updateData]} {...props} />;
};

//  import useData

function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('not inside context');
  return context;
}

export { useData, DataProvider };
