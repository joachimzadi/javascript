// Crée par Joachim Zadi le 17/06/2020 à 09:49
// ===========================================

//LES TABLEAUX
// +++++++++++

//DECLARATION
// let stagiaires = ['Roxana', 'Talia', 'Sabrine', 'Bakary', 'Souly', 'Aoukas', 'Toulepi', 'Badji'];
// let numeros = Array(1, 35, 84, -98);
// let tabMixed = new Array(true, 68, 'chat', null, [45, 'Joachim']);
//
// //Taille du tableau --> length
// let taille = stagiaires.length;
// console.log(`tailleStagiaire = ${taille}`);
// console.log(`tailleNumero = ${numeros.length}`);
// console.log(`tailleTabMixed = ${tabMixed.length}`);
//
//Acces aux elements du tableau
console.log(stagiaires[0]);
console.log(stagiaires[7]);
console.log(stagiaires[3]);
console.log(stagiaires[8]);

// //Modifier les elements d'un tableau
// stagiaires[8] = 'Tayachi';
// console.log(stagiaires[8]);
//
// stagiaires[2]='Guedda';
// console.log(stagiaires[2]);

//METHODES DE TABLEAUX
// +++++++++++++++++++

// let numeros = [1, 2, 3, 4];
// console.log(numeros);

//Ajoute en fin de tableau
numeros.push(-5);
console.log(numeros);

// //Supprime le dernier element du tableau
// numeros.pop();
// console.log(numeros);

// //Ajout en debut de tableau
// numeros.unshift(-5);
// console.log(numeros);

// //Supprime le premier element du tableau
// numeros.shift();
// console.log(numeros);

//LES BOUCLES
// ++++++++++

// //POUR --> FOR
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// //TANT QUE --> WHILE
// let i = 11;
//
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
//
// //REPETER TANT QUE --> DO...WHILE
// let compteur = 11;
//
// do {
//     console.log(compteur);
//     compteur++;
// } while (compteur <= 10)

// let stagiaires = ['Roxana', 'Talia', 'Sabrine', 'Bakary', 'Souly', 'Aoukas', 'Toulepi', 'Badji'];

// for (let i = 0; i < stagiaires.length; i++) {
//     console.log(stagiaires[i]);
// }

// let compteur = 0;
// while (compteur<stagiaires.length){
//     console.log(stagiaires[compteur]);
//     compteur++;
// }

//FOR...OF --> Pour acceder aux elements du tableau
// let stagiaires = ['Roxana', 'Talia', 'Sabrine', 'Bakary', 'Souly', 'Aoukas', 'Toulepi', 'Badji'];
//
// for (let stagiaire of stagiaires) {
//     console.log(stagiaire);
// }
//
//FOR...IN --> Pour acceder aux index du tableau
for (let position in stagiaires) {
    console.log(`(${position}, ${stagiaires[position]})`);
}

//MOT CLE BREAK & CONTINUE
// +++++++++++++

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}



