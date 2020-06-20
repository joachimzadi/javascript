// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE II
// +++++++++

//Inverser les éléments d'un tableau de 10 éléments (sans passer par un tableau intermédiaire).

let tableau = [];//On declare une variable qui va encapsuler le le tableau

//On se propose de generer le valeur du tableau aleatoirement
for (let i = 0; i < 10; i++) {
    let alea = Math.round(Math.random() * 100 - Math.random() * 100);
    tableau.push(alea);
}
console.log("tableau", tableau);//Tableau original
console.log("tableau inversé", tableau.reverse());//Tableau inverse
