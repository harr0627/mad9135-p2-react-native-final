const firstData = [
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
]

export default firstData