// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE II
// +++++++++

// // 6. Dire si une valeur existe dans un tableau trié
let tableau = [];

for (let index = 0; index < 10; index++) {
    let alea = Math.round(Math.random() * 100 - Math.random() * 100);//==> On genere le tableau avec des nombres aleatoires
    tableau.push(alea);
}
//On trie le
tableau = tableau.sort((a, b) => a - b);

let saisie = Number(prompt("Nombre à rechercher"));
if (Number.isNaN(saisie) || !Number.isInteger(saisie)) {
    do {
        alert("Vous devez saisir un nombre entier");
        saisie = Number(prompt("Nombre à rechercher"));
    } while (Number.isNaN(saisie) || !Number.isInteger(saisie));
}

console.log("tableau", tableau);

//On utilise ici l'operateur ternaire du if pour decider
let reponse = tableau.includes(saisie) ? `${saisie} est present dans le tableau` : `${saisie} est absent du tableau`;//If ternaire
console.log(reponse);