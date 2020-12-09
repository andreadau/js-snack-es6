// Dichiarazione 
let arr1 = [1,2,3,4,5,6,7,8,9,10];
let newArray = [];

// Posizioni
let p1 = 1;
let p2 = 5; 

// Funzione es6
const arrayPosition = (arr, start, exit) => {  
    for (let i = 0; i < arr.length; i++) {
        if (i >= start && i <= exit) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
// Return
let nuovoArray = arrayPosition(arr1,p1,p2);
console.log(nuovoArray);

/*
// es6 slice
var arrPosition = arr1.slice(p1, p2);

// Return es6
console.log(arrPosition);
*/