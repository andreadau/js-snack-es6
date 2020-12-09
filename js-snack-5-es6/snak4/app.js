// Funzione per fusione array
const fusioneArray = (arr,arr1,arr2,arrFusione) =>  {
    for (let i = 0; i < arr.length; i++) {
      let el1 = arr1[i];
      let el2 = arr2[i];
      arrFusione.push(el1,el2);
    }
}

// Dichiarazione array
let arrLista = ["mela","banane","carote","cipolle"];
let arrNumeri = [1,2,3,4];
let arrShuffle = [];

// Applicazione funzione

fusioneArray(arrLista,arrLista,arrNumeri,arrShuffle);
  
console.log(arrShuffle);