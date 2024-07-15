const fs = require('fs');

let input = '';
let totalCalValues = 0;

try {
    input = fs.readFileSync('input.txt', 'utf8');
} catch (err) {
    console.error(err);
}

const inputArray = input.split('\n');

// Mapeo de nombres de números a valores numéricos
const numeros = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10
    // Agrega más si es necesario
};

function getCalibrationValue(inputLine) {
    // Encontrar todos los nombres de números en la línea
    const matches = inputLine.match(/\b(zero|one|two|three|four|five|six|seven|eight|nine|ten)\b/gi);

    if (!matches) {
        return 0; // Si no se encuentran nombres de números, retornar 0
    }

    // Convertir nombres de números a valores numéricos y sumarlos
    const sum = matches.reduce((acc, match) => {
        const num = numeros[match.toLowerCase()];
        return acc + (num !== undefined ? num : 0);
    }, 0);

    return sum;
}

for (const line of inputArray) {
    totalCalValues += getCalibrationValue(line);
    console.log(totalCalValues);
}

console.log('Total:', totalCalValues);
