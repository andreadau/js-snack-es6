/*L’utente inserisce due numeri in successione, con due
prompt. Il software stampa il maggiore.*/

let num1 = Number(prompt("Inserisci un numero"));
let num2 = Number(prompt("Inserisci un numero"));

// maggiore
const maggiore = Math.max(num1,num2);

//if statement
if (num1 === num2) {
    alert("numeri uguali");
} else {
    alert(maggiore);
}