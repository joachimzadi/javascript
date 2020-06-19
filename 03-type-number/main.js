// Crée par Joachim Zadi le 16/06/2020 à 10:16
// ===========================================

// LES NOMBRES EN JS
// =================

20;
-45;
2.654;
-231.254;

//Operations de bases

let addition = 45 + 3.2;
console.log(`addition = ${addition}`);

let soustraction = 45 - 8;
console.log(`soustraction = ${soustraction}`);

let multiplication = 45 * 3.2;
console.log(`multiplication = ${multiplication}`);

let division = 45 / 8;
console.log(`division = ${division}`);

let modulo = 45 % 8;
console.log(`modulo = ${modulo}`);

//ORDRE DE PRIORITE DES OPERARTIONS
// ===============================
let resultat = 3 - 9 * 2;
console.log(`3 - 9 * 2 = ${resultat}`);

resultat = (3 - 9) * 2;
console.log(`(3 - 9) * 2 = ${resultat}`);

//LES EXPOSANTS
// ===========
console.log(2 ** 3);
console.log(2 ** 5);
console.log(5 ** 3);

//LE NOMBRE NaN OU NOT A NUMBER
// ===========================
resultat = 0 / 0;
console.log(`resultat = ${resultat}`);
console.log(typeof resultat);

resultat = 1 + NaN;
console.log(`resultat = ${resultat}`);

resultat = 1 / 0;
console.log(`resultat = ${resultat}`);
console.log(typeof resultat);

resultat = -1 / 0;
console.log(`resultat = ${resultat}`);

resultat = 0;
console.log(`resultat = ${resultat}`);

resultat = -0;
console.log(`resultat = ${resultat}`);

// LES OPRERATEURS D'ASSIGNATIONS
// =============================

let x = 3;
x = x + 4;
x += 6;//===> x = x + 6
x -= 1;
x *= 1;
x /= 5;

x = 12;
x %= 5;

x++;//===> x = x + 1;
x--;

++x;
--x;

console.log(`x = ${x}`);

let a = 25;
x = 3;

let resultat = a + x;

console.log(`resultat = ${resultat}`);

resultat = a + x++;
console.log(`x = ${x}`);
console.log(`resultat = ${resultat}`);

resultat = a + ++x;
console.log(`x = ${x}`);
console.log(`resultat = ${resultat}`);

// EXERCICE
// ========

console.log(1.5 + 1.5 * 2);
console.log((10 % 6) ** 2);
console.log(200 + 0 / 0);

//LES ARRONDIS
// ===========

console.log(Math.floor(0.9));
console.log(Math.floor(1.1));

console.log(Math.round(0.49));
console.log(Math.round(0.5));
console.log(Math.round(2.9));

console.log(Math.ceil(0.1));
console.log(Math.ceil(0.9));
console.log(Math.ceil(21));
console.log(Math.ceil(21.01));

//GENERATEUR DE NOMBRE ALEATOIRE
let aleatoire = Math.random() * 101;
console.log(`aleatoire = ${Math.floor(aleatoire)}`);

// console.log(`aleatoire = ${aleatoire}`);

//OPERATEURS DE COMPARAISON
// ========================

console.log(4 < 5);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 <= 4);
console.log(4 >= 4);
console.log(4 > 3);
console.log(4 == 3);
console.log(4 == 4);
console.log(4 == '4');
console.log(4 === '4');
console.log(4 === 4);
console.log(4 != 4);
console.log(4 != '4');
console.log(4 !== 4);
console.log(4 !== '4');

// FIN DU CHAPITRE

