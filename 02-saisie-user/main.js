// Crée par Joachim Zadi le 16/06/2020 à 09:09
// ===========================================

//Affiche dans la console
console.log("test de connexion !");

//Pour affcher des informations -->alert
alert("Bonjour JavaScript des la boite Alert");

//Boite de dialog pour confirmation --> confirm
let reponse = confirm("Voulez-vous confirmer votre prenom ?");
console.log(reponse);

//Saisie utilisateur --> prompt
let prenom = prompt("Entrez votre prenom svp");
console.log(prenom);
console.log(typeof prenom);

let age = prompt("Entrez votre âge");
console.log(age);
console.log(typeof age);

//Tout ce que vous saisissez dans le prompt est consideré comme string

// let prenom = prompt("Entrez votre prenom svp");
// let age = prompt("Entrez votre âge");
//
// console.log("Bonjour " + prenom + ", vous avez " + age +" ans");
// alert('Bonjour ' + prenom + ", vous avez " + age +" ans");
//
// console.log('Dimanche j\'irai au "USA"');//Attention au caractere d'echapement \
// console.log("Dimanche j\'irai au \"USA\"");
// console.log(`Dimanche j'irai au "USA"`);//String Template
// console.log(`Bonjour ${prenom}\nVous avez ${age} ans`);
