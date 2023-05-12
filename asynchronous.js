// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.
const myMessage=()=>{
    console.log("i love python");
}
setTimeout(myMessage,3000)
// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
function getUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = {
          1: { id: 1, name: "Juliet" },
          2: { id: 2, name: "Kaitlin" },
        };
  
        const user = users[userId];
  
        if (user) {
          resolve(user);
        } else {
          reject(new Error("User not found"));
        }
      }, 1000);
    });
  }
  
  getUserData(1)
    .then((userData) => {
      console.log("User data:", userData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  


// You have an asynchronous function performTask() that returns a Promise.
//The Promise resolves if the task is successful and rejects if there's an error.
//Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
// let task1=true
// let promise=new Promise((resolves,rejects)=>{
//     if(task1){
//         setTimeout(()=>{resolves("task1 is successful")},3000)
//     }
//     else{
//         setTimeout(()=>{rejects(new Error())},3000)

//     }
    
// });
// const performTask=async()=>{
//     let results=await promise;
//     console.log({results}) 
// }

// performTask()
let performtask=true
let promise=new Promise(function(resolve,reject){
if(performtask){
    resolve("the task is completed")
}
else{
    reject("Kindly complete the task!")
}
})
const person= async()=>{
  let results= await promise;
  console.log({results});
}
person()
// .then(()=>{
//   return("congratulations")
// }).catch(()=>{
// return("try again next time");
// }).finally(()=>{
//     return("atleast i attempted");
// })
// console.log({promise})
