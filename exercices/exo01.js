// Crée par Joachim Zadi le 16/06/2020 à 13:44
// ===========================================

//Je declare mes variables
// let a, b, c;
//
// a = prompt("a = ");
// b = prompt("b = ");
//
// console.log(`Avant permutation`);
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);
//
// //On effectue la permutation
// c = a;
// a = b;
// b = c;
//
// console.log(`Apres permutation`);
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// 1. Afficher les nombres de 1 à 10.
// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// 2. Afficher la somme des nombres de 1 à 10.
// let somme = 0
// for (let i = 1; i < 11; i++) {
//     somme += i;// sommme = somme + i;
// }
// console.log(`somme = ${somme}`);

// let n = Number(prompt("N = "));
// let m = Number(prompt("M = "));

// Dans le cas où n est supérieur à m :
// ---------------------------------

/*// a. Afficher un message indiquant que n doit être inférieur à m.
let message;
// message = n > m ? "n doit être inférieur à m" : "";
if(n>m){
   message = "n doit être inférieur à m";
}
alert(message);*/

// b. Permuter n et m, puis afficher les nombres de n à m.
// if (n >= m) {
//     let c = n;
//     n = m;
//     m = c;
//
//     for (let i = n; i <= m; i++) {
//         console.log(i)
//     }
// }

// if (n >= m){
//     for (let i = n; i >= m ; i--) {
//         console.log(i);
//     }
// }

// // d. Afficher la somme des nombres pairs de n à m.
// if (n >= m) {
//     let somme = 0;
//     for (let i = m; i <= n; i++) {
//         if (i % 2 === 0) {
//             somme += i;
//         }
//     }
//     console.log(`somme = ${somme}`);
// }

// 4. Lire 10 nombres et trouver le plus grand.

let plusPetit;
let tabNombres = [];
let indicePlusPetit = -1;

for (let i = 0; i < 10; i++) {
    let nombre = Number(prompt(`Entrez le nombre ${i+1}`));
    tabNombres.push(nombre);

    if (plusPetit === undefined || nombre < plusPetit) {
        plusPetit = nombre;
        indicePlusPetit = i;
    }
}
console.log(tabNombres);
console.log(`plusGrand = ${plusPetit}`);
console.log(`indecePlusPetit = ${indicePlusPetit}`);



