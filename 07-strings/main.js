// Crée par Joachim Zadi le 17/06/2020 à 16:43
// ===========================================

// LES CHAINES DE CARACTERES
// +++++++++++++++++++++++++

// Le String est fournie avec diverses fonctions de chaîne communes.
console.log('dog'.charAt(1)); // o
console.log('YouTube'.substring(1, 2)); // o
console.log('YouTube'.substring(3, 7)); // Tube
console.log('YouTube'.substring(1)); // ouTube


// LES COMPARAISONS ===> La comparaison se base sur le code ASCII
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let a = 'a';
let b = 'b';
console.log(a < b); //true

a = 'add';
b = 'b';
console.log(a < b); //true

a = 'add';
b = 'ab';
console.log(a < b); //false

a = 'a';
b = 'A';
console.log(a < b); //false

// RECHERCHER DANS UNE CHAINE
// ++++++++++++++++++++++++++

let index = 'Red Dragon'.indexOf('Red'); // 0
console.log(`index = ${index}`);

index = 'Red Dragon'.indexOf('RedScale'); // -1
console.log(`index = ${index}`);

index = 'Red Dragon'.indexOf('Dragon', 0); // returns 4
console.log(`index = ${index}`);

index = 'Red Dragon'.indexOf('Dragon', 4); // returns 4
console.log(`index = ${index}`);

index = 'Red Dragon'.indexOf('', 9); // returns 9
console.log(`index = ${index}`);

function exitDansUneChaine(stringValue, search) {
    return stringValue.indexOf(search) !== -1;
}

console.log(exitDansUneChaine('red', 'r'));
console.log(exitDansUneChaine('red', 'v'));

'Red Dragon'.startsWith('Red'); // returns true
'Red Dragon'.endsWith('Dragon'); // returns true
'Red Dragon'.startsWith('Dragon'); // returns false
'Red Dragon'.endsWith('Red'); // returns false



// DECOMPOSER UNE CHAINE
// ++++++++++++++++++++++++++

// Pour décomposer une chaîne en parties, vous pouvez utiliser
// .split (séparateur), qui est une fonction très utile.
// Elle prend un paramètre (le séparateur) et crée un tableau
// de sous-chaînes.

let maChaine = 'chicken,noodle,soup,broth';
console.log(maChaine.split(','));// ["chicken", "noodle", "soup", "broth"]

maChaine = 'chicken';
console.log(maChaine.split(""));//[ 'c', 'h', 'i', 'c', 'k', 'e', 'n' ]


// REMPLACER DANS UNE CHAINE
// +++++++++++++++++++++++++

// .replace (string, replace String) remplace une chaîne spécifiée
// dans une variable chaîne par une autre chaîne.

let r = "Wizard of Oz".replace("Wizard","Witch"); // "Witch of Oz"
console.log(r);

// Plusieurs autres fonctions existent pour les strings. Vous les trouverez à cette adresse :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String
