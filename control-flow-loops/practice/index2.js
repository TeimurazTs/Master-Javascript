let message;

message =
  login == "Pitter"
    ? "Hi"
    : login == "Owner"
    ? "Hello"
    : login == ""
    ? "unknown"
    : "";

//Tester
// let message;

// let loginArrays = ["Pitter", "Owner", ""];

// for (let i = 0; i < loginArrays.length; i++) {
//   let login = loginArrays[i];
//   message =
//         login == "Pitter"
//       ? "Hi"
//       : login == "Owner"
//       ? "Hello"
//       : login == ""
//       ? "unknown"
//       : "";

//   console.log(message);
// }
