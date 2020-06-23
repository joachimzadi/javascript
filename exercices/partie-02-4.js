// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE II
// +++++++++

//Trier un tableau de 10 éléments par ordre croissant

let tableau = [];//On declare une variable qui va encapsuler le le tableau

//On se propose de generer le valeur du tableau aleatoirement
for (let i = 0; i < 10; i++) {
    let alea = Math.round(Math.random() * 100 - Math.random() * 100);
    tableau.push(alea);
}
console.log("tableau original", tableau);//Tableau original

let operateurDeTri = function (a, b) {
    return a - b;
}

tableau = tableau.sort(operateurDeTri);
console.log("tableau trié", tableau);//Tableau trie


