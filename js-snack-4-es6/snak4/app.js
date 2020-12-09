// Triangolo
let triangoloRett = {
    base : 4,
    altezza : 20
};

// Perimetro 
const ipotenusa = Math.sqrt((triangoloRett.base^2)+(triangoloRett.altezza^2));
const perimetro = (triangoloRett.base) + (triangoloRett.altezza) + ipotenusa;
console.log(perimetro);

// Area
const area = (triangoloRett.base * triangoloRett.altezza) / 2;
console.log(area);