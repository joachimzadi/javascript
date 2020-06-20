// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE I
// ++++++++

// 3 => Afficher les nombres de n à m, dans le cas où n est supérieur à m:
console.log("==== Afficher un message d'erreur et arrêter le programme ====\n");

//On demandera à l'utilisateur d'effectuer une saisie jusqu'a ce qu'elle soit valide
let m = Number(prompt(`M`));
if (Number.isNaN(m)) {
    do {
        alert("Attention à votre saisie, vous devez saisir un nombre !!!");
        m = Number(prompt("M"));
    } while (Number.isNaN(m));
}

let n = Number(prompt("N"));
if (Number.isNaN(n)) {
    do {
        alert("Attention à votre saisie, vous devez saisir un nombre !!!");
        n = Number(prompt("N"));
    } while (Number.isNaN(n));
}

if (n > m) {
    alert("la valeur de m doit être superieure à celle de n");
}


