function isPalindrome(word) {
  // Write your algorithm here
  // check the if the revese word is same as word using reverse() function
  if (reverse(word) === word) {
    return true
  } else {
    return false
  }
}

const reverse = (word) => {
  // split the word to make array of chars and reverse the array and join them together
  return word.split("").reverse().join("")
}

/* 
  Pseudocode
  - make a function "reverse()" to reverse the word:
    - split the word to make an array of chars
    - use reverse() method to revorse array 
    - use join() to join the char and make backword word 

  - chech if word and reverse word using reverse function
    if they are same return true
    if not the same return false 
*/

/*
  explanation of solution:
  - simply made a reverse function to reverse the word 
  - compare word with the reverse word using the function I made 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("anna"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("sam"));
}

module.exports = isPalindrome;
