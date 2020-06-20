// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE I
// ++++++++

// 4 => Lire 10 nombres et trouver le plus grand et sa position.
console.log("==== Plus grand et sa position ====\n");

//On demandera à l'utilisateur d'effectuer une saisie jusqu'a ce qu'elle soit valide
let plusGrand;
let position = -1;
let tableau = [];

for (let i = 1; i < 11; i++) {
    let saisie = Number(prompt(`Saisie N°${i}`));
    if (Number.isNaN(saisie)) {
        do {
            alert("Attention à votre saisie, vous devez saisir un nombre !!!");
            saisie = Number(prompt(`Saisie N°${i}`));
        } while (Number.isNaN(saisie));
    }
    tableau.push(saisie);

    if (plusGrand === undefined || plusGrand < saisie) {
        plusGrand = saisie;
        position = i - 1;
    }
}
console.log(tableau);
console.log(`plusGrand = ${plusGrand}, position = ${position}`);