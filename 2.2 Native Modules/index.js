// const fs = require("fs")

// // fs.writeFile("message.txt", "Hello from NodeJASDSAS!", (err) => {
// //     if (err) throw err;
// //     console.log('The file has been saved!');
// //   });

// fs.readFile('message.txt', 'utf8',(err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const fs = require("fs");

fs.writeFile("messages.txt", "HELLO TITE", "utf8", (err) => {
  if (err) throw err;
  console.log("askldlkas;d");
});

fs.readFile("messages.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
