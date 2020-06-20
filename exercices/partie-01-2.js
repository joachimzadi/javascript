// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE I
// ++++++++

// 2 => Afficher la somme des nombres de 1 à 10.
console.log("==== SOMME DE 1 A 10 ====\n");

let somme = 0; //Variable representant la somme
for (let i = 1; i < 11; i++) {
    somme += i;
}
console.log(`somme = ${somme}`);