// Crée par Joachim Zadi le 21/06/2020 à 14:20
// ===========================================

// GENERALITES SUR LES FONCTIONS
// =============================
function somme(a, b) {
    return a + b;
}

somme(2, 3);

let modulo = function (a, b) {
    return a % b;
}
modulo(9, 4);

let disivion = (a, b) => {
    return a / b;
}

let message;

function auSecours() {
    let message = `A l'aide, je suis pris au piege par les flammes`;
    console.log(message);
}

// auSecours();
// console.log(message);

let oiseau = "Duck Algerien";

function nomOiseu() {
    let oiseau = "Corbeau Iranien";
    console.log(oiseau);
}

// console.log(oiseau);
// nomOiseu();

let rayon = 8;

if (rayon > 7) {
    const PI = Math.PI;
    let perimetre = 2 * PI * rayon;
}
// console.log(rayon);
// console.log(PI);
// console.log(perimetre);

let externe = () => {
    let hero = "Spiderman";

    function interne() {
        let appelAide = `${hero}, s'il te plait aide moi`;
        console.log(appelAide);
    }

    interne();
}
//
// externe();
// interne();

function definieDeuxFois(func) {
    func();
    func();
}

function rire() {
    console.log("AHAHAHAHAHAHAHAHAH");
}

// definieDeuxFois(rire);

function sum() {
    console.log(5 + 10);
}

// definieDeuxFois(sum);

let tab = [1, 2, 3, 4];
let tabMap = tab.map(function (i) {
    return i * 3;
});
tab.map(i => i * 3);

// console.log(tab);
// console.log(tabMap);

let tableau = [48, -69, 78, -1, -23, 45];
console.log(tableau);
let tableauTrie = tableau.sort((a, b) => a - b);
console.log(tableauTrie);