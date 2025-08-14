const fs = require('fs');

// Sync...
// fs.writeFileSync("./test.txt", "Hey There!");

// Async...
// fs.writeFile("./test.txt", "Hey There!", (err) => {});

// const result = fs.readFileSync("./contact.txt", "utf8");
// console.log(result);

fs.readFile("./contact.txt", "utf8", (err, result) => {
    if(err){
        console.log("Error: ", err);
    } else{
        console.log(result);
    }
})

// fs.appendFileSync("./test.txt", "\nHellllllooooo World!");

fs.unlinkSync("./contact.txt");