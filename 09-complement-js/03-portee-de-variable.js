// Crée par Joachim Zadi le 21/06/2020 à 12:07
// ===========================================

// "Visibilité" variable
// L'endroit où une variable est définie dicte où nous avons accès à cette variable


//EXEMPLE 1 ==> dans une fonction
// ++++++++++++++++++++++++++++++
let message;

function auSecour() {
    let message = `A l'laide, je suis pris au piege par les feux`;
    console.log(message);
}

console.log(message);
auSecour();

// EXEMPLE 2 ==> dans une fonction
// +++++++++++++++++++++++++++++++
let oiseau = "Duck mandarin";

function nomOiseau() {
    let oiseau = "Corbeau doré";
    console.log(oiseau);
}

console.log(oiseau);
nomOiseau();
console.log(typeof nomOiseau);

//EXEMPLE 3 ==> dans un bloc de code
// +++++++++++++++++++++++++++++++++
let rayon = 8;
if (rayon > 8) {
    const PI = Math.PI;
    let perimetre = 2 * PI * rayon;
}
// console.log(`rayon = ${rayon}`);//8
// console.log(`PI = ${PI}`);//Non definie
// console.log(`perimetre = ${perimetre}`);//Non definie

function externe() {
    let hero = "Spiderman";

    function interne() {
        let appelAide = `${hero}, s'il te plait aide moi`;
        console.log(appelAide);
    }

    interne();
}

externe();
// interne();//Non definie

//EXEMPLE 4 ==> Fonction d'ordre superieur
// +++++++++++++++++++++++++++++++++++++++
// Fonctions qui fonctionnent sur / avec d'autres
// les fonctions. Ils peuvent:
// Accepter d'autres fonctions comme arguments
// Retourner une fonction

//Fonction qui prend une fonction en argument
function definieDeuxFois(func) {
    func();
    func();
}

function rire() {
    console.log("HAHAHAHAHAHAHAHAHA");
}

definieDeuxFois(rire);

//Fonction qui retourne une fonction
function entreMinMax(min, max) {
    return function (val) {
        return val >= min && val <= max;
    }
}

const ageAutorise = entreMinMax(15, 77);

console.log(ageAutorise(14));
console.log(ageAutorise(25));

// EXEMPLE 5 ==> FONCTIONS DE RAPPEL ==> CALLBACK FUNCTION
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Une fonction de rappel est une fonction passée dans une autre fonction comme argument,
// qui est ensuite invoquée à l'intérieur de la fonction externe.

definieDeuxFois(rire);//la fonction rire ici est une fonction de rappel.

//Exemple
let entiers = [1, 2, 3];

console.log(entiers.map(function (i) {
    return i + 1;
}));//==> [ 2, 3, 4 ]

console.log(entiers.map((i) => {
    return i + 1;
}));//==> [ 2, 3, 4 ]