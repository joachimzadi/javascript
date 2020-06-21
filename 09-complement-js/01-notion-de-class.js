// Crée par Joachim Zadi le 21/06/2020 à 11:24
// ===========================================

//Creation de la classe :  C'est comme si nous creons un nouveau type
class Person {
    prenom;
    age;
    conjoint;

    constructor(prenom, age) {
        this.prenom = prenom;
        this.age = age;
    }

    seMarier(person) {
        if (this.age > 18 && person.age > 18 && this.conjoint === undefined && person.conjoint === undefined) {
            this.conjoint = person;
            person.conjoint = this;
        }
    }

    affichage() {
        let message = `${this.prenom}, ${this.age} ans\n`;
        if (this.conjoint !== undefined) {
            message += `a pour conjoint ${this.conjoint.prenom}, ${this.conjoint.age} ans`
        }
        return message;
    }
}

//Creation d'une instance de Person
let p1 = new Person('Joachim', 50);

console.log(p1);
//Le type de Person
console.log(`type de p1 = ${typeof p1}`);

let p2 = new Person('Joachim', 50);

//Acces par notation pointée
console.log(p2.prenom);
console.log(p2.age);

//Notion d'egalité des objets
console.log(`p1 == p2 : ${p1 == p2}`);
console.log(`p1 === p2 : ${p1 === p2}`);

let p3 = p1;

console.log(`p1 == p3 : ${p1 == p3}`);
console.log(`p1 === p3 : ${p1 === p3}`);

p3.age = 28;
console.log(p1);

//Exemple avec les tableaux
let tab1 = [1, 2, 3, 4];
let tab2 = [1, 2, 3, 4];
console.log(`type tab1 = ${typeof tab1}`);
console.log(`type tab2 = ${typeof tab2}`);
console.log(`tab1 === tab2 : ${tab1 === tab2}`);

//Exemple avec les strings
let a = "bonjour";
let b = "bonjour";
console.log(`type a = ${typeof a}`);
console.log(`type b = ${typeof b}`);
console.log(`a === b : ${a === b}`);

a = new String("bonjour");
b = new String("bonjour");
console.log(`type a = ${typeof a}`);
console.log(`type b = ${typeof b}`);
console.log(`a === b : ${a === b}`);

//Exemple avec les nombres
a = 5;
b = 5;
console.log(`type a = ${typeof a}`);
console.log(`type b = ${typeof b}`);
console.log(`a === b : ${a === b}`);

a = new Number(5);
b = new Number(5);
console.log(`type a = ${typeof a}`);
console.log(`type b = ${typeof b}`);
console.log(`a === b : ${a === b}`);

//Notions de methodes dans une classe
let marie = new Person("Marie", 25);
console.log(marie.affichage());
let ange = new Person("Ange", 26);
console.log(ange.affichage());

marie.seMarier(ange);
console.log(marie.affichage());
console.log(ange.affichage());

