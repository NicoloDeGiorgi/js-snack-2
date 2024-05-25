'use strict';


const strings = ['pippo', 'PLUTO', 'Paperino'];
const result = [];

for (let i = 0; i < strings.length; i++) {

    let currentString = strings[i];
    console.log(currentString);

    const stringResult =
        currentString.charAt(0).toUpperCase() +
        currentString.slice(1).toLowerCase();

    result.push(stringResult);
}


console.log(result);