// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE I
// ++++++++

// 5 => Lire n nombres et en calculer la moyenne.
console.log("==== Moyenne de n Nombres ====\n");

//On demandera à l'utilisateur de saisir le nombre de valeurs intervenant dans la moyenne
let n = Number(prompt("Nombre de valeurs à saisir"));

if (Number.isNaN(n)) {
    do {
        alert("Votre saisie doit etre un nombre");
        n = Number(prompt("Nombre de valeurs à saisir"));
    } while (Number.isNaN(n));
}

let somme = 0;
for (let i = 1; i <= n; i++) {
    let saisie = Number(prompt(`Nombre N°${i}`));
    if (Number.isNaN(saisie)) {
        do {
            alert("Votre saisie doit etre un nombre");
            saisie = Number(prompt(`Nombre N°${i}`));
        } while (Number.isNaN(n));
    }
    somme += saisie;
}
console.log(`moyenne = ${somme / n}`);
//On demandera à l'utilisateur d'effectuer une saisie jusqu'a ce qu'elle soit valide
