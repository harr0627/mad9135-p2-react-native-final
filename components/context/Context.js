import React from 'react';
import { createContext, useState, useContext, useEffect } from 'react';
import {firstData} from '../firstData'

const DataContext = createContext();

const DataProvider = (props) => {
  
  const [data, setData] = useState([
    {
    id: "asldkjalskdj",
    completed: "", //date done when the item is completed aka when the user swipes away as the items value is at it's max value // may not add 
    created: new Date('December 17, 1995 01:24:00'), // may not add
    taskTitle: "Bi-Weekly Walks",
    taskDetails: "How many times I walk in January",
    taskCompleted: false,
    taskValue: 0, //number changed when user flings up or do
    taskMaxValue: 8, // number set by user
    questPointValue: 1, // not reliant on taskMaxValue set by user. 
    // the onFling horizontal will hold the checks for changing taskCompleted and the updatelist call.
    // onFling vertical will change the taskvalue up or down within range of 0 to taskMaxValue it will also updateData each fling.
  },
  {
    id: "asldkjalsasd",
    completed: "",
    created: new Date('December 20, 1995 01:24:00'),
    taskTitle: "Workouts",
    taskDetails: "Try to work out 20 mins a day for a week from Dec 20",
    taskCompleted: false,
    taskValue: 2,
    taskMaxValue: 8, 
    questPointValue: 1, 
  },
  {
    id: "alsasd",
    completed: new Date('December 31, 1995 11:02:00'),
    created: new Date('December 20, 1995 01:24:00'),
    taskTitle: "Workouts",
    taskDetails: "Try to work out 20 mins a day for a week from Dec 20",
    taskCompleted: true,
    taskValue: 8,
    taskMaxValue: 8, 
    questPointValue: 1, 
  }
  ])
  const [questPoints, setQuestPoints] = useState(0) // maybe not this (keep it local?)

  useEffect(()=>{

    // first load. async storage fetch from here. once async is initialized
    // two storaged data pieces  which will hold activeData and pastaccomplished data
    // either quest points will be the result of the added values of pastaccomplished and returned/updated
    // or quest points will be entirely it's own entity that will be updated and read seperately from accomplished. NOT THIS
  },[])

  
  
let dataExample = [{
  id: "id sent from active",
  completed: Date.now(), //date done when the item is completed aka when the user swipes away as the items value is at it's max value // may not add 
  created: "a date object sent from active", // may not add
  taskTitle: "title set by User",
  taskDetails: "details set by User",
  taskCompleted: true,
  taskValue: 0, //number changed when user flings up or do
  taskMaxValue: 10, // number set by user
  questPointValue: 1, // not reliant on taskMaxValue set by user. 
  // the onFling horizontal will hold the checks for changing taskCompleted and the updatelist call.
  // onFling vertical will change the taskvalue up or down within range of 0 to taskMaxValue it will also updateData each fling.
}]

// have one list where the load organizes based on "task Completed"

  // function updateAnimalsList(action, payload) {
  //   if (action === 'DELETE') {
  //     console.log("calling delete API in context")
  //     console.log("The action: ",action,"the payload: ",payload)
  //     //find id in animals and delete item
  //     //then setAnimals as mapped array
  //     setAnimals(animals.filter((animal) => animal.id !== payload.id)); // TODO: WE NEED TO CHANGE THIS TO MATCH ANIMALS [ID] PAGE
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

    function updateData(item){
// this is where we need to update accomplished data with setData
// this function will not behave different based on anything

// check if item exists in array using id. update if it is not new. Add if it is new. then update array.
    }


return(
  <DataContext.Provider value={[data, updateData]} {...props} />
)
};

//  import useData

function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('not inside context');
  return context;
}


export { useData, DataProvider };