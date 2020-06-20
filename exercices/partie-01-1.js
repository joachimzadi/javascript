// Crée par Joachim Zadi le 19/06/2020 à 18:13
// ===========================================

// PARTIE I
// ++++++++

// 1 => Afficher les nombres de 1 à 10.
console.log("==== VERSION BOUCLE FOR ====");

let affichage = "";//Pour gerer l'affichage

for (let i = 1; i <= 10; i++) {
    affichage += `${i} `;
}
console.log(affichage);

// ===============================================
console.log("\n==== VERSION BOUCLE WHILE ====");

let compteur = 1;//Pour la gestion du compteur de la boucle
affichage = "";
while (compteur <= 10) {
    affichage += `${compteur} `;
    compteur++;
}
console.log(affichage);

// ===============================================
console.log("\n==== VERSION BOUCLE DO WHILE ====");

compteur = 1;
affichage = "";

do {
    affichage += `${compteur} `;
    compteur++;
} while (compteur <= 10);
console.log(affichage);
