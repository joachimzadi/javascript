// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE II
// +++++++++

//Dans un tableau de 10 entiers, trouver les rangs du plus petit et du plus grand élément,
// et afficher les rangs et leurs valeurs.

let tableau = [];//On declare une variable qui va encapsuler le le tableau

//On se propose de generer le valeur du tableau aleatoirement
for (let i = 0; i < 10; i++) {
    let alea = Math.round(Math.random() * 100 - Math.random() * 100);
    tableau.push(alea);
}
console.log(tableau);

let valPlusPetit = Math.min(...tableau);
let posPlusPetit = tableau.indexOf(valPlusPetit);
console.log(`valPlusPetit = ${valPlusPetit}, posPlusPetit = ${posPlusPetit}`);

let valPlusGrand = Math.max(...tableau);
let posPlusGrand = tableau.indexOf(valPlusGrand);
console.log(`valPlusGrand = ${valPlusGrand}, posPlusGrand = ${posPlusGrand}`);
