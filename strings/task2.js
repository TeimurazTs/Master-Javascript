function reverseCase(str) {
  let newStrArray = [];
  if (typeof str !== "string") throw new TypeError("Enter a string");

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      newStrArray.push(str.charAt(i).toLowerCase());
    } else {
      newStrArray.push(str.charAt(i).toUpperCase());
    }
  }
  console.log(newStrArray.join(""));
}

//testers

reverseCase("Hello theRe");
reverseCase("BIG LETTERS");
reverseCase("");
