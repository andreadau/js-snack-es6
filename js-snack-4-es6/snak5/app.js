let squadre = [
    {
        nome : "Juventus",
        punti : 0,
        falli : 0
    },
    {
        nome : "Fiorentina",
        punti : 0,
        falli : 0
    },
    {
        nome : "Napoli",
        punti : 0,
        falli : 0
    },
    {
        nome : "Sassuolo",
        punti : 0,
        falli : 0
    },
    {
        nome : "Milan",
        punti : 0,
        falli : 0
    }
];

const getRandomIntInclusive = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

squadre.forEach(element => {
    element.punti = getRandomIntInclusive(1,20);
    element.falli = getRandomIntInclusive(1,30);
});

console.table(squadre);

