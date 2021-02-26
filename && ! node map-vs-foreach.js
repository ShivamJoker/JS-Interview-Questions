const myArr = ["sonu", "sharmaji", "chintu", "chinti"];

const names = myArr.map((name, index, arr) => {
  arr.pop();
});
console.log(myArr);

// myArr.map((name, index, arr) => {
//   console.log(`Name: ${name} Index: ${index} Arr: ${arr}`);
// });
