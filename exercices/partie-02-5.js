// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE II
// +++++++++

// 5. Fusionner deux tableaux déjà triés par ordre croissant.

//Cette fonction permet de generer un tableau de n valeur
function genererTableau(n) {
    let tableau = [];
    for (let index = 0; index < n; index++) {
        let alea = Math.round(Math.random() * 100 - Math.random() * 100);//==> On genere le tableau avec des nombres aleatoires
        tableau.push(alea);
    }
    return tableau;
}

let tableau1 = genererTableau(6);
console.log("tableau1", tableau1);
let tableau1Trie = tableau1.sort((a, b) => a - b);
console.log("tableau1 trié", tableau1Trie);

console.log("\n");

let tableau2 = genererTableau(5);
console.log("tableau2", tableau2);
let tableau2Tri = tableau2.sort((a, b) => a - b);
console.log("tableau2 trié", tableau2Tri);

//Fusion des tableaux des triés
let tableauFusion = tableau1Trie.concat(tableau2Tri);
console.log("tableauFusion", tableauFusion);

