function findLongestWord(string = "") {
  let str = string.split(" ");
  let longestWordLength = 0;
  let longestWord = "";

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].length > longestWordLength) {
      longestWordLength = str[i].length;
      longestWord = str[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
