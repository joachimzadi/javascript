// Crée par Joachim Zadi le 15/06/2020 à 15:22
// ===========================================

//DECLARATION DE VARIABLES ==> let & const
// +++++++++++++++++++++++++++++++++++++++

//On decalare la variable maVariable
let maVariable;

//Determination du type de la variable avec typeof
typeof maVariable;

console.log(typeof maVariable);//-->undefined

//On fait une assignation ou une affectation avec l'operateur =
maVariable = 25;
console.log(typeof maVariable);//-->number

maVariable = "Joachim";
console.log(typeof maVariable);//-->string

maVariable = true;
console.log(typeof maVariable);//-->boolean(true ou false / 1 ou 0)

maVariable = null;
console.log(typeof maVariable);//-->object

// ===================================================
//On dit que JavaScript est un langage faiblement typé
// ===================================================

//Il est interdit de declarer une variable plusieurs fois
let maVariable = 78;
console.log(maVariable);

//Declaration suivi d'une assignation ou affectation
let prenom = "Joachim";

//On peur declarer aussi des variables sur une meme ligne
let age = 15, nom, estMajeur;
nom = 'Bakary';
estMajeur = false;

//Les mot reservés au JS ne peuvent servir de nom de variable
let var;//-->Interdit

let 5nom = "DAWM";//--> Le d'une variable ne peut commencer par un nombre
let nom5 = "DAWM";
console.log(nom5)

let _nom = "DAWM";
console.log(_nom)

let _nom_ = "DAWM";
console.log(_nom_);

let monPrenom; //Notation KamelCase
let mon_prenom;

//Declaration de constante ==> const
const ma_constante = "Sabrine";
ma_constante = "Sabrine";//-->Modification interdite

//UTILISATION DES VARIABLES
// ++++++++++++++++++++++++

let a = 45;
let b = -12;
console.log(a + b);

let c = "5";
console.log(a + b + c);

let autre_variable = "fin du cours du jour";
console.log(autre_variable);







