const names = ["Chitnu", "Pintu", "Ghanta"];

// const mrNames = [];
// for (let i = 0; i < names.length; i++) {
//   // console.log(names[i]);
//   mrNames.push(`Mr ${names[i]}`);
// }
// console.log(mrNames);

// names.forEach((name, i) => {
//   mrNames.push("Mr " + name);
// });
// console.log(mrNames);

// const mrNames = names.map((n) => {
//   return "Mr " + n;
// });
// console.log(mrNames);

const nums = [1, 2, 3, 4, 5];
const sqs = nums.map((n) => n * n);
const evenSquares = nums
  .map((n) => {
    if (n % 2 === 0) {
      return n * n;
    }
  })
  .filter((n) => !isNaN(n));

console.log(evenSquares);
