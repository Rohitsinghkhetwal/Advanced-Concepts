// console.log("hey this is from zed code editor !");

const arr = [2, 3, 4, 5, 6];

// creating the polyfills
// function callBack(el) {
// }
// Array.prototype.costumElem = function(cb) {
//   for(let ind = 0; ind < this.length; ind++) {
//     cb(this[ind], ind, this)
//   }
// }

// arr.costumElem(callBack);

// // creating the polyfill for map function
// Array.prototype.myMap = function(cb) {
//   //map function returns a new array
//   let response = [];
//   for(let i = 0 ; i < this.length; i++) {
//     response.push(cb(this[i], i, this));
//   }
//   return response;
// }

// const res = arr.myMap((elm) => elm * 2);

// //filter polyfill
// Array.prototype.myFilter = function (cb) {
//   let resp = [];
//   for(let i = 0; i < this.length; i++) {
//     if(cb(this[i])) {
//       resp.push(this[i]);
//     }
//   }

//   return resp;
// }
// const res = arr.myFilter((el) => el > 3);

// polyfill for reduce
// const result = arr.reduce((accum, current) => {
//   return accum + current;
// },0)
// Array.prototype.myReduce = function(cb, initialValue) {
//   let accum = initialValue;
//   for(let i = 0; i < this.length; i++) {
//     accum = accum ? cb(accum, this[i]) : this[i]
//   }
//   return accum;
// }

// const response = arr.myReduce((accum, current) => {
//   return accum + current
// },0);
// console.log(response);

// call apply bind method
const users = {
  fname: "Rohit singh",
  lname: "Khetwal",
  sayName(greeting, time) {
    return `${greeting} ${time}! ${this.fname} ${this.lname}`;
  },
};

const user2 = {
  fname: "john",
  lname: "doe",
};

// first we will apply call fucntion
//console.log(users.sayName.call(user2));
// console.log(users.sayName.call(user2, "Hi", "good morning"));
// console.log(users.sayName.call(users, "hi", "good evening"));
// console.log(users.sayName.apply(users, ["hi", "good evening"]));

// const res = users.sayName.bind(user2, "hi", "good night");
// res();

//function currying

function multiply(a, b) {
  //first parameter will be fix
  return a + b;
}

const res = multiply.bind(null, 3);
console.log(res(4));
console.log(res(8));
