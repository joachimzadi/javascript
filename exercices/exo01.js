// Crée par Joachim Zadi le 16/06/2020 à 13:44
// ===========================================

//Je declare mes variables
let a, b, c;

a = prompt("a = ");
b = prompt("b = ");

console.log(`Avant permutation`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);

//On effectue la permutation
c = a;
a = b;
b = c;

console.log(`Apres permutation`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);


