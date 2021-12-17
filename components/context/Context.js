import React from 'react';
import { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const DataContext = createContext();

const DataProvider = (props) => {
  const { getItem, setItem } = useAsyncStorage('ExecMethodsQuest');
  const [data, setData] = useState([]);
  const [questPoints, setQuestPoints] = useState(0);

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
    setItem(JSON.stringify(value))
      .then(() => {
        console.log('saved data to storage');
      })
      .catch((err) => {
        console.err(err);
      });
  };

  useEffect(() => {
    getDataFromStorage();
  }, []);

  useEffect(() => {
    storeDataToStorage(data);
  }, [data]);

  function updateData(action, payload) {
    if (action === 'DELETE') {
      setData(data.filter((item) => item.id !== payload.id));
      console.log('Deleted', payload.taskTitle);
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
