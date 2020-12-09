let zucchine = [
    zucchina1 = {
    varietà : "romanesco",
    peso : 2,
    lunghezza : 30
},
    zucchina2 = {
    varietà : "faenza",
    peso : 3,
    lunghezza : 34
},
    zucchina3 = {
    varietà : "fiorentina",
    peso : 4,
    lunghezza : 20
},
    zucchina4 = {
    varietà : "siciliano",
    peso : 6,
    lunghezza : 22
},
    zucchina5 = {
    varietà : "napoli",
    peso : 7,
    lunghezza : 34
},
    zucchina6 = {
    varietà : "triestina",
    peso : 3,
    lunghezza : 15
},
    zucchina7 = {
    varietà : "pugliese",
    peso : 7,
    lunghezza : 23
},
    zucchina8 = {
    varietà : "piacenza",
    peso : 4,
    lunghezza : 12
},
    zucchina9 = {
    varietà : "nizza",
    peso : 5,
    lunghezza : 43
},
    zucchina10 = {
    varietà : "firenze",
    peso : 2,
    lunghezza : 32
}
];

// Dichiarazione
let arrayPesi = [];

// Push di oggetti in array vuoto

for( let key in zucchine ){
  arrayPesi.push(zucchine[key].peso);
}

// Funzione per somma

function sumArray (s){
  let totale = 0;
  for ( let i = 0; i < s.length; i++ ){
    totale += s[i];
  }
  return totale;
}

console.log(sumArray(arrayPesi));
