// reverse function
var parola = prompt("Inserisci una parola per il reverse");
// ES6 
const rev = s => (s.split("").reverse().join(""));

alert(rev(parola));