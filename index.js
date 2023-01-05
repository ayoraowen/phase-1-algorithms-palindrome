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
*/

/*
  Add written explanation of your solution here
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
