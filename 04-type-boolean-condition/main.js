// Crée par Joachim Zadi le 16/06/2020 à 12:06
// ===========================================

//LES BOOLEANS
// ============

let estVrai = true;
let estFaux = false;

//Operateur de negation
console.log(!estVrai);
console.log(!estFaux);

//Une parenthese en passant
console.log("a" < "b");
console.log("A" > "b");
console.log(0 == '');

let age = 17;

let condition = false;
condition = 0;
condition = '';
condition = NaN;
condition = undefined;
condition = null;

condition = true;
condition = 2;
condition = 'yfhfg';

if (condition) {
    console.log("Condiftion Verifiée !!!");
}


// Crée par Joachim Zadi le 16/06/2020 à 15:52
// ===========================================

let age = Number(prompt("Saisir votre âge"));

// IF

if (age >= 25) {
    console.log("Super Division");
}

if ((age >= 18) && (age < 25)) {
    console.log("Division normale");
}

if (age < 18) {
    console.log("Division mineure");
}


//IF...ELSE

if (age >= 25) {
    console.log("Super Division");
} else if ((age >= 18) && (age < 25)) {
    console.log("Division normale");
} else {
    console.log("Division mineure");
}

//OPERATEUR TERNAIRE
let age = Number(prompt("Saisir votre âge"));

let message;

if (age >= 18) {
    message = 'Vous êtes majeur(e)';
} else {
    message = `Vous êtes mineur(e)`;
}

message = (age >= 18 ? "Vous êtes majeur(e)" : "Vous êtes mineur(e)");

alert(`message --> ${message}`);

//SWITCH
// +++++

let numeroDuJour = Number(prompt("Saisir le numero du jour de la semaine"));
let message;

switch (numeroDuJour) {
    case 1:
        message = "Lundi";
        break;
    case 2:
        message = "Mardi";
        break;
    case 3:
        message = "Mercredi";
        break;
    case 4:
        message = "Jeudi";
        break;
    case 5:
        message = "Vendredi";
        break;
    case 6:
        message = "Samedi";
        break;
    case 7:
        message = "Dimanche";
        break;
    default:
        message = "un jour inconnu du système";
        break;
}

alert(`Votre saisie correspond à ${message}`);







