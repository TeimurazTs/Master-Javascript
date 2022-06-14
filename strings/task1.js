function rmHtmlTags(str) {
  let start;
  let end = str.indexOf("/") - 1;
  if (typeof str !== "string") throw new TypeError("Enter string");

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 62 && str.charCodeAt(i + 1) !== 60) {
      start = i + 1;
      break;
    }
  }
  console.log(str.substring(start, end));
}

rmHtmlTags("<p><strong><em>Content</em></strong></p>");

// > 62 < 60
