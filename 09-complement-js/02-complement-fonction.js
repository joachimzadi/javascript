// Crée par Joachim Zadi le 21/06/2020 à 14:20
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
