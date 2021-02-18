const word = " Boob";

const fWord = word.toLowerCase().trim();
const splited = fWord.split("");
let reversed = "";

for (let i = splited.length - 1; i >= 0; i--) {
  reversed += splited[i];
}

if (reversed === fWord) {
  console.log("Yey! It's palindrome 🤓");
} else {
  console.log("Oh no! It's not a palindrome 🤓");
}

// one liner
const isPalindrome = [...fWord].reverse().join("") === fWord ? "Yes" : "No";
console.log(isPalindrome);
