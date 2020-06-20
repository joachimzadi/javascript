// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE II
// +++++++++

//Dans un tableau de 10 entiers, afficher :
//La moyenne des entiers,

let tableau = [];//On declare une variable qui va encapsuler le le tableau

//On se propose de generer le valeur du tableau aleatoirement
for (let i = 0; i < 10; i++) {
    let alea = Math.round(Math.random() * 100 - Math.random() * 100);
    tableau.push(alea);
}
console.log(tableau);

//On applique l'algo de la PARTIE I - 5
