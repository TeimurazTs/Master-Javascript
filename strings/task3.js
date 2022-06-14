function searchWord(sentence, word) {
  let count = 0;
  if (typeof sentence !== "string" || typeof word !== "string") {
    throw new TypeError("parameters must be strings");
  }

  while (sentence.includes(word)) {
    count++;
    let newSentence = sentence.replace(word, "");
    sentence = newSentence;
  }
  console.log(`'${word}' was found ${count} times`);
}

searchWord("The quick brown fox", "fox");
searchWord("aa, bb, cc, dd, aa", "aa");
searchWord("sunshine", "sun");
