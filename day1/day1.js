const fs = require('node:fs');
let input = ''
let totalCalValues  = 0;
try {
   input = fs.readFileSync('input.txt', 'utf8');
} catch (err) {
  console.error(err);
}

const inputArray = input.split('\n');
function getCalibrationValue(inputLine){
    let fn = 0;
    let ln = 0;
    for (let i = 0; i < inputLine.length; i++) {
        if(inputLine[i]/1){
            fn  = inputLine[i]
            break;
        }
      }

      for (let i = inputLine.length; i >= 0; i--) {
        if(inputLine[i]/1){
            ln  = inputLine[i]
            break;
        }
      }

      return Number(fn+ln);
}

for (line of inputArray){
    totalCalValues += getCalibrationValue(line);
    console.log(totalCalValues)
    
}
console.log(totalCalValues);

