// Crée par Joachim Zadi le 17/06/2020 à 09:49
// ===========================================

//LES TABLEAUX
// +++++++++++

//DECLARATION
let stagiaires = ['Roxana', 'Talia', 'Sabrine', 'Bakary', 'Souly', 'Aoukas', 'Toulepi', 'Badji'];
let numeros = Array(1, 35, 84, -98);
let tabMixed = new Array(true, 68, 'chat', null, [45, 'Joachim']);

// //Taille du tableau --> length
let taille = stagiaires.length;
console.log(`tailleStagiaire = ${taille}`);
console.log(`tailleNumero = ${numeros.length}`);
console.log(`tailleTabMixed = ${tabMixed.length}`);
//
//Acces aux elements du tableau
console.log(stagiaires[0]);
console.log(stagiaires[7]);
console.log(stagiaires[3]);
console.log(stagiaires[8]);

// //Modifier les elements d'un tableau
stagiaires[8] = 'Tayachi';
console.log(stagiaires[8]);

stagiaires[2] = 'Guedda';
console.log(stagiaires[2]);

// METHODES DE TABLEAUX
// +++++++++++++++++++

let numeros = [1, 2, 3, 4];
console.log(numeros);

//Ajoute en fin de tableau
numeros.push(-5);
console.log(numeros);

//Supprime le dernier element du tableau
numeros.pop();
console.log(numeros);

//Ajout en debut de tableau
numeros.unshift(-5);
console.log(numeros);

//Supprime le premier element du tableau
numeros.shift();
console.log(numeros);

//concat - fusionner des tableaux
let tab1 = ['a', 'b', 'c'];
let tab2 = ['d', 'e', 'f'];
let tabConcat = tab1.concat(tab2);
console.log(tabConcat); //["a", "b", "c", "d", "e", "f"]

//includes - recherchez une valeur dans une chaine
// Cette méthode utilise l'algorithme de comparaison
// SameValueZero qui fonctionne comme l'égalité stricte,
// à la différence que NaN est ici égal à lui même.
tab1 = [1, 2, 3];
console.log(tab1.includes(2)); // true

let animaux = ['chien', 'chat', 'amster'];
console.log(animaux.includes('chat')); // true
console.log(animaux.includes('at')); // false

// indexOf - fonctionne de la meme que les chaines de caracters
// Cette fonction recherche l'index d'un element du tableau
// dans un tableau
let betes = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(betes.indexOf('bison'));// => 1
console.log(betes.indexOf('bison', 2));// => 4
console.log(betes.indexOf('giraffe'));// => -1

// join - crée une chaîne à partir d'un tableau
let elements = ['Feu', 'Air', 'Eau'];
console.log(elements.join());// => "Feu,Air,Eau"
console.log(elements.join(''));// => "FeuAirEau"
console.log(elements.join('-'));// => "Feu-Air-Eau"

// reverse - inverse un tableau!
let tab = ['un', 'deux', 'trois'];
console.log('tab:', tab);// => tab:["un", "deux", "trois"]

let tabInverse = tab.reverse();
console.log('tabInverse:', tabInverse);// => "tabInverse: ["trois", "deux", "un"]

// Attention : La fonction reverse est destructrice. Elle change le tableau original
console.log('tab:', tab);// => "tab: ["trois", "deux", "un"]

// slice - La méthode slice() renvoie un objet tableau, contenant une copie superficielle
// (shallow copy) d'une portion du tableau d'origine, la portion est définie par
// un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.
animaux = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animaux.slice(2));// => ["camel", "duck", "elephant"]
console.log(animaux.slice(2, 4));// => ["camel", "duck"]
console.log(animaux.slice(1, 5));// => ["bison", "camel", "duck", "elephant"]

// splice - La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou
// en ajoutant de nouveaux éléments à même le tableau.On peut ainsi vider ou remplacer une partie
// d'un tableau.

let mois = ['Jan', 'March', 'April', 'June'];
mois.splice(1, 0, 'Feb');//  => insertion à l'index 1
console.log(mois);// => ["Jan", "Feb", "March", "April", "June"]

mois.splice(4, 1, 'May');// replace 1 element à l'index 4
console.log(mois);// => ["Jan", "Feb", "March", "April", "May"]

// sort - La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.
// Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et
// triées selon les valeurs des unités de code UTF-16 des caractères.

mois = ['March', 'Jan', 'Feb', 'Dec'];
mois.sort();
console.log(mois);// => ["Dec", "Feb", "Jan", "March"]

tab = [1, 30, 4, 21, 100000];
tab.sort();
console.log(tab); // => [1, 100000, 21, 30, 4]


//LES BOUCLES
// ++++++++++

// //POUR --> FOR
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// //TANT QUE --> WHILE
let i = 11;

while (i <= 10) {
    console.log(i);
    i++;
}

//REPETER TANT QUE --> DO...WHILE
let compteur = 11;

do {
    console.log(compteur);
    compteur++;
} while (compteur <= 10)

let stagiaires = ['Roxana', 'Talia', 'Sabrine', 'Bakary', 'Souly', 'Aoukas', 'Toulepi', 'Badji'];

for (let i = 0; i < stagiaires.length; i++) {
    console.log(stagiaires[i]);
}

let compteur = 0;
while (compteur < stagiaires.length) {
    console.log(stagiaires[compteur]);
    compteur++;
}

//FOR...OF --> Pour acceder aux elements du tableau
let stagiaires = ['Roxana', 'Talia', 'Sabrine', 'Bakary', 'Souly', 'Aoukas', 'Toulepi', 'Badji'];

for (let stagiaire of stagiaires) {
    console.log(stagiaire);
}

//FOR...IN --> Pour acceder aux index du tableau
for (let position in stagiaires) {
    console.log(`(${position}, ${stagiaires[position]})`);
}

//MOT CLE BREAK & CONTINUE
// +++++++++++++

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}



