// Crée par Joachim Zadi le 21/06/2020 à 16:24
// ===========================================

// Recuperer le contenu du tag h1
// ******************************

let premierH1 = document.querySelector('h1');
// console.log(premierH1.innerText);
console.log(premierH1.textContent);

// Modifier le contenu du tag h1
// *****************************

premierH1.innerHTML = "<div style='color: red'>Titre modifié par JavaScript</div>";
document.querySelector('a').textContent = "wikipedia.org";

// Exercices
// *********

let liens = document.querySelectorAll('a');
liens[6].textContent = "Lien 4";
liens[7].textContent = "Lien 5";
liens[8].textContent = "Lien 6";


// Modifier l'attribut d'un element
// ********************************

document.querySelector('a').href = "https://wikipedia.org";
// document.querySelectorAll('.container')[2].className = "container-fluid";
// Modifier le style d'un element
// ******************************

document.querySelector('#titreHeader').style.color = "teal";
document.querySelector('#titreHeader').style.fontSize = "3rem";