const input = require('readline-sync');

let name = input.question("Please enter your whole name: ");
let splitName = name.split(" ");

//letNameUpper = name[0].toUpperCase() + name.slice(1).toLowerCase();

for(let i = 0; i < splitName.length;i++){
  let tempStr = String(splitName[i]);
  let temp = String(splitName[i][0]);
  splitName[i] = tempStr.replace(temp, temp.toUpperCase());
}

console.log(splitName.join(""));