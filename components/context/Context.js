import React from 'react';
import { createContext, useState, useContext, useEffect } from 'react';
import { firstData } from '../firstData';
import { v4 as uuid } from 'uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const DataContext = createContext();

const DataProvider = (props) => {
  const { getItem, setItem } = useAsyncStorage('ExecMethodsQuest');
  const [data, setData] = useState([
    // {
    //   id: 'asldkjalskdj',
    //   completed: '', //date done when the item is completed aka when the user swipes away as the items value is at it's max value // may not add
    //   created: 'December 17, 1995 01:24:00', // may not add
    //   taskTitle: 'Bi-Weekly Walks',
    //   taskDetails: 'How many times I walk in January',
    //   taskCompleted: false,
    //   taskValue: 0, //number changed when user flings up or do
    //   taskMaxValue: 8, // number set by user
    //   questPointValue: 1, // not reliant on taskMaxValue set by user.
    //   // the onFling horizontal will hold the checks for changing taskCompleted and the updatelist call.
    //   // onFling vertical will change the taskvalue up or down within range of 0 to taskMaxValue it will also updateData each fling.
    // },
    // {
    //   id: 'asldkjalsasd',
    //   complete: 'December 20, 1995 01:24:00',
    //   taskTitle: 'Workouts',
    //   taskDetails: 'Try to work out 20 mins a day for a week from Dec 20',
    //   taskCompleted: false,
    //   taskValue: 2,
    //   taskMaxValue: 8,
    //   questPointValue: 1,
    // },
    // {
    //   id: 'alsasd',
    //   completed: 'December 20, 1995 01:24:00',
    //   created: 'December 20, 1995 01:24:00',
    //   taskTitle: 'Workouts',
    //   taskDetails: 'Try to work out 20 mins a day for a week from Dec 20',
    //   taskCompleted: true,
    //   taskValue: 8,
    //   taskMaxValue: 8,
    //   questPointValue: 1,
    // },
  ]);
  const [questPoints, setQuestPoints] = useState(0); // maybe not this (keep it local?) // i'm pretty sure we put this in the component

  const getDataFromStorage = async () => {
    getItem()
      .then((item) => {
        item = item === null ? [] : JSON.parse(item);
        setData(item);
      })
      .catch(console.log);
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

  // have one list where the load organizes based on "task Completed"

  // function updateAnimalsList(action, payload) {
  //   if (action === 'DELETE') {
  //     console.log("calling delete API in context")
  //     console.log("The action: ",action,"the payload: ",payload)
  //     //find id in animals and delete item
  //     //then setData as mapped array
  //     setAnimals(animals.filter((item) => animal.id !== payload.id)); // TODO: WE NEED TO CHANGE THIS TO MATCH ANIMALS [ID] PAGE
  //   } else if (action === 'UPDATE') {
  //     // find by id in animals update properties of item
  //     console.log("Payload is: ",payload)
  //     setAnimals(
  //       animals.map((animal) => {
  //         console.log("one of the animals",animal)
  //         console.log('animal id', animal.id)
  //         console.log('payload id', payload.id)
  //         if(animal.id == payload.id){
  //           return payload
  //         } else {
  //           return animal
  //         }
  //       })
  //     );
  //   } else if (action === 'INSERT') {
  //     setAnimals([
  //       ...animals,
  //       { id: uuid(), type: payload.type, coveredIn: payload.coveredIn, imageFile: 'placeholder.png'}, // check to see if this works
  //     ]); // look at how to destructure payload either {} or ...
  //     //new array =  ...animals + {payload} + newId
  //   } else {
  //     console.log('action payload must be DELETE, UPDATE or INSERT');
  //   }
  // }

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
            if (payload.taskValue != payload.taskMaxValue && !(payload.taskValue > (payload.taskMaxValue-1))){
              payload.taskValue += 1
            }
            if(payload.taskValue == payload.taskMaxValue){
              payload.taskCompleted = true
            }
            console.log(payload.taskCompleted)
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
    } else if(action === "UPDATEDOWN"){
      console.log('Updating up with: ', payload.taskTitle);
      setData(
        data.map((item) => {
          if (item.id == payload.id) {
            if(payload.taskValue==payload.taskMaxValue){
              payload.taskCompleted = false
            }
            if (payload.taskValue != 0 && !(payload.taskValue < 0)){
              payload.taskValue -= 1
            }
            console.log(payload.taskCompleted)
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
