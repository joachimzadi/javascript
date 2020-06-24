// Crée par Joachim Zadi le 21/06/2020 à 11:24
// ===========================================

class Personne {
    // prenom;
    // age;
    // conjoint;

    constructor(prenom, age) {
        this.prenom = prenom;
        this.age = age;
    }

    seMarier(autrePersonne) {
        if (this.age >= 18 && autrePersonne.age >= 18 && this.conjoint === undefined && autrePersonne.conjoint === undefined) {
            this.conjoint = autrePersonne;
            autrePersonne.conjoint = this;
        }
    }

    affichePersonne() {
        let affichage = `${this.prenom}, ${this.age} ans\n`;
        if (this.conjoint !== undefined) {
            affichage += `a pour conjoint ${this.conjoint.prenom}, ${this.conjoint.age} ans`;
        }
        return affichage;
    }
}

let personneTalia = new Personne("Talia", 23);
// console.log(personneTalia.affichePersonne());

let personneBakary = new Personne("Bakary", 24);
// console.log(personneBakary.affichePersonne());

// personneTalia.seMarier(personneBakary);

// console.log(personneTalia.affichePersonne());
// console.log(personneBakary.affichePersonne());

console.log(typeof personneBakary);

let autrePersonne = new Personne("Bakary", 24);

// console.log(autrePersonne == personneBakary);

let p3 = personneBakary;
console.log(p3 == personneBakary);

p3.prenom = "Toulepi";
console.log(p3)
console.log(personneBakary);

let a = 45;
let b = a;
console.log(a);
console.log(b);

b = 20;

console.log(a);
console.log(b);

// let nombre1 = new Number(1);
// console.log(nombre1);
// let nombre2 = new Number(1);
// console.log(nombre2);
//
// nombre1 = 1;
// nombre2 = 1;

const tab1 = [1, 2, 3];
new Array(1, 2, 3)

const tab2 = [1, 2, 3];
new Array(1, 2, 3);

tab2[1]=25;
console.log(tab2);

console.log(tab1 === tab2);

let m1 = new String("bonjour");
let m2 = new String("bonjour");

