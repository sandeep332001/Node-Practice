const fs = require('fs');
// fs.writeFileSync('note.txt',"This file was created by node.js")
fs.readFileSync('note.txt', 'utf-8',(error,data) =>{
    console.log(data)
})