const findLongestWord = function (string) {
  let splitMessage = string.split(" ");
  let findLongestWord = splitMessage[0];

  for (let i = 1; i < splitMessage.length; i += 1) {
    if (LongestWord.length < splitMessage[i].length) {
      LongestWord = splitMessage[i];
    }
  }
  return LongestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
