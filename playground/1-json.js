const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book); // object to json string
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)   // json string to object
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer =  fs.readFileSync('1-json.json')   // give dataBuffer
// const dataJSON = dataBuffer.toString()      // give data
// const data = JSON.parse(dataJSON)

const book = fs.readFileSync("1-json.json");
const parsedData = JSON.parse(book);
parsedData.name = "Hello";
parsedData.planet = "";

fs.writeFileSync("1-json.json", JSON.stringify(parsedData));
