// Crée par Joachim Zadi le 21/06/2020 à 16:24
// ===========================================

// Retrait d'un element HTML
// *************************
let titre_h1 = document.getElementById('grosTitre');
let parent = document.body;

// parent.removeChild(titre_h1);//pour la suppression

// Creer un nouvel element HTML
// ****************************
let newTitre = document.createElement("h2");
newTitre.id = "titreMoyen";
newTitre.textContent = "Expert en DOM";
newTitre.style.color = "orange";
parent.replaceChild(newTitre, titre_h1);


