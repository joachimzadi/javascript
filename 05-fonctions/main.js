// Crée par Joachim Zadi le 19/06/2020 à 17:41
// ===========================================

// GENERALITES SUR LES FONCTIONS
// =============================

//Definition ou signature d'une fonction
function sum(g, d) {
    return g + d;
}

/*
Dans ce code, une variable somme est définie et initialisée en tant que fonction. Notez qu'il n'y a pas de
nom inclus après le mot-clé de la fonction parce qu'il n'est pas nécessaire - la fonction peut être référencée
par la variable somme. Notez également qu'il n'y a pas de point-virgule après la fin de la définition de la
fonction
.*/

/*
La syntaxe de déclaration d'une fonction est presque exactement équivalente à l'utilisation d'une
expression de fonction comme celle-ci :
*/

let modulo = function (g, d) {
    return g % d;
};

//Appel de la fonction
modulo(5, 3);

/*
Notez qu'il y a un point-virgule après la fin de la declaration de la fonction, tout comme il y en aurait
après toute initialisation de variable.
*/

/*
Une autre façon de définir une fonction qui est assez similaire à une expression de fonction est
d'utiliser la ,otation "flèchée" ou expression lambda,comme celle-ci :
*/

let multiply = (g, d) => {
    return g * d;
};

/*
La dernière façon de définir les fonctions est d'utiliser le constructeur de fonctions,
qui accepte n'importe quel nombre d'éléments arguments. Le dernier argument est toujours
considéré comme le corps de la fonction, et les arguments précédents énumèrent
les arguments de la nouvelle fonction. Considérez cet exemple :
*/

let divide = new Function('g', 'd', 'return g / d'); //==> Pas recommandé

/*
REMARQUE Il existe des différences subtiles mais importantes entre ces différentes façons
d'instancier un objet fonction qui seront discutées plus loin dans ce chapitre.
Néanmoins, ils sont tous invoqués de la même manière.
*/

// =============================
// EXPRESSION LAMBDAS

/*
ECMAScript 6 offre la possibilité de définir une expression de fonction à l'aide des
expressions lambdas.
Pour la plupart, les expressions lambdas instancient les objets de fonction qui se
comportent de la même manière que leurs homologues d'expression de fonction formelle.
Partout où une expression de fonction peut être utilisée, une expression lambdas peut
également être utilisée :
*/

let expressionLambdaSomme = (g, d) => {
    return g + d;
};

let expressionFonctionSomme = function (g, d) {
    return g + d;
};

console.log(expressionLambdaSomme(5, 8));//==> 13
console.log(expressionFonctionSomme(5, 8));//==> 13

/*
Les expressions lambdas sont particulièrement utiles dans les situations
en ligne où elles offrent une syntaxe plus succincte :
*/

let entiers = [1, 2, 3];

console.log(
    entiers.map(
        function (i) {
            return i + 1;
        }
    )
);//==> [ 2, 3, 4 ]

console.log(entiers.map((i) => {
    return i + 1;
}));//==> [ 2, 3, 4 ]

/*
Les expressions lambdas n'ont pas besoin de parenthèses si vous ne voulez utiliser qu'un seul
paramètre.
Si vous voulez avoir zéro paramètre ou plus d'un paramètre, des parenthèses sont nécessaires :
*/

// Les deux sont valables
let double = (x) => {
    return 2 * x;
};

let triple = x => {
    return 3 * x;
};

// L'absence de paramètres nécessite une paire de parenthèses vides.
let getRandom = () => {
    return Math.random();
};

// Plusieurs paramètres nécessitent des parenthèses.
let somme = (a, b) => {
    return a + b;
};

// Syntaxe Invalide :
//let multiply = a, b => { return a * b; };

// ===================================================

// APPLICATIONS
// ============
let a = 2;
let b = 3;
let resultat;

//Definition de la fonction
function addition() {
    resultat = a + b;
    console.log(a + b);
}

//Fonction avec arguments
function addition(n, m) {
    resultat = m + n;
    console.log(resultat);
}

//Appel de la fonction
addition();
addition(4, 6);
addition(6);
addition(6, -45, 100);

//Fonction avec valeurs par defaut
function addition(n = 2, m = 3) {
    resultat = m + n;
    console.log(resultat);
}

addition();
addition(12);
addition(12, -2);

let addition = function (m = 2, n = 3) {
    resultat = m + n;
    console.log(resultat);
}

console.log(typeof addition);
addition(56, -78);

//Fonction à argument indetreminés
let addition = function (...args) {
    let resultat = 0;
    for (const arg of args) {
        resultat += arg;
    }
    return resultat;
}
addition(2, -8, 9, 4, -7);

//Expression Lambda
let multiply = (m, n) => {
    resultat = m * n;
    console.log(resultat);
}
multiply(56, -78);

function modulo(m, n) {
    resultat = m % n;
    return resultat;
}

console.log(modulo(8, 3));
//IIFE ==> ou fonction auto-executée
(function multiply() {
    let a = Number(prompt());
    let b = Number(prompt());
    console.log(a * b);
})();

(function multiply(a, b) {
    console.log(a * b);
})(5, 6);

((m, n) => {
    console.log(m * n);
})(-3, 7);

let resultat;

function add(a, b) {
    let resultat = a + b;
    console.log(`interne = ${resultat}`);
}

add(5, 6);
console.log(`externe = ${resultat}`);

function add() {
    let a = Number(prompt());
    let b = Number(prompt());
    console.log(a + b);
}

add();
