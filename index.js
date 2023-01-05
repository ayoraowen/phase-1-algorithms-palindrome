function isPalindrome(word) {
  // Write your algorithm here
  let wordReverser=''
  for (i = word.length - 1; i > -1; i--) {
    //let wordReverser //word[i]
    //console.log(wordReverser)

    wordReverser=wordReverser.concat(word[i])
    //console.log(reversedArray)

  }
  console.log(wordReverser)
  console.log(word)
  if (word==wordReverser){
    return true
  }
  return false

}

/* 
  Add your pseudocode here
  Declare a variable to store the reversed word
  Iterate through the passed in word string storing each character in a variable that will store the reversed word
  Compare the reversed word with the passed in word to check if their values are equivalent
  Return a boolean based on evaluation of the comparison

*/

/*
  Add written explanation of your solution here
  The function isPalindrome() takes in a string argument
  A for loop iterates through the passed in string which is an array starting from the last index to the first in order to reverse the string
  The loop stores each character in a varible declared to hold the reversed word
  The function then compares the passed in word string with the reversed string 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
 // console.log
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
