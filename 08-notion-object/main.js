// Crée par Joachim Zadi le 19/06/2020 à 17:55
// ===========================================

//LES OBJECTS ==> {}
// +++++++++++++++++
let person = new Object();

person.prenom = 'Joachim';
person.nom = 'Zadi';
person.age = 50;
person.sexe = 'M';

//On va preferer la notation suivante :
person = { prenom: 'Joachim', nom: 'Zadi', age: 50, sexe: 'M' }

//On dit qu'on ecrit notre objet au format JSON ==> JavaScript Object Notation
console.log(typeof person);
console.log(person);
console.log(person.prenom);
console.log(person['age']);

//Permet de connaitre la lidte des proprietes d'un objet
let personProps = Object.getOwnPropertyNames(person);
console.log(personProps);
